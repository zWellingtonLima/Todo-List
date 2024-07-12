import { useState } from "react";
import { PlusCircle, Trash } from "phosphor-react";

import { Header } from "./components/Header";
import styles from "./components/NewTask.module.css";
import taskStyles from "./components/Tasks.module.css";
import taskListStyles from "./components/TasksList.module.css";
import { EmptyTasks } from "./components/EmptyTasks";

export interface Task {
  id: number;
  content: string;
  isChecked: boolean;
}

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTask() {
    if (!inputValue) return;

    const task = {
      id: new Date().getTime(),
      content: inputValue,
      isChecked: false,
    };

    setTaskList((state) => [task, ...state]);
    setInputValue("");
  }

  function handleToggleTodo(id: number, isChecked: boolean) {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: !isChecked };
      }

      return { ...task };
    });

    setTaskList(updatedTaskList);
    console.log(updatedTaskList);
  }

  function handleDeleteTodo(id: number) {
    const tasksFiltered = taskList.filter((task) => task.id !== id);

    setTaskList(tasksFiltered);
  }

  function log() {
    console.log(taskList);
    
  }

  return (
    <>
      <Header />

      <div className={styles.container}>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Adicione uma nova tarefa"
          value={inputValue}
        />
        <button type="submit" onClick={handleAddTask}>
          Criar
          <PlusCircle size={20} weight="bold" />
        </button>
      </div>

      <section className={taskStyles.container}>
        <header>
          <div>
            <p className={taskStyles.taskCreated}>Tarefas criadas</p>
            <span className={taskStyles.counter}>{taskList.length}</span>
          </div>

          <div>
            <p className={taskStyles.taskDone}>Concluídas</p>
            <span className={taskStyles.counter}>0</span>
          </div>
        </header>

        <section className={taskStyles.tasksSection}>
          {taskList.length === 0 ? (
            <EmptyTasks />
          ) : (
            taskList.map((task) => (
              <div onClick={log} className={taskListStyles.taskList} key={task.id}>
                <input
                  readOnly
                  type="checkbox"
                  checked={task.isChecked}
                  id={task.content}
                />
                <label
                  htmlFor={task.content}
                  onClick={() => handleToggleTodo(task.id, task.isChecked)}
                >
                  {task.content}
                </label>

                <button
                  onClick={() => handleDeleteTodo(task.id)}
                  className={taskListStyles.trashContainer}
                >
                  <Trash />
                </button>
              </div>
            ))
          )}
        </section>
      </section>
    </>
  );
}

export default App;
