import { useState } from "react";
import { PlusCircle } from "phosphor-react";

import { Header } from "./components/Header";
import styles from "./components/NewTask.module.css";
import taskStyles from "./components/Tasks.module.css";
import { TasksList } from "./components/TasksList";
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
            <span className={taskStyles.counter}>0</span>
          </div>

          <div>
            <p className={taskStyles.taskDone}>Concluídas</p>
            <span className={taskStyles.counter}>0</span>
          </div>
        </header>

        <section className={taskStyles.tasksSection}>
          {taskList.length === 0 ? <EmptyTasks /> : <TasksList />}
        </section>
      </section>
    </>
  );
}

export default App;
