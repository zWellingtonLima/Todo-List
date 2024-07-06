// import { EmptyTasks } from "./EmptyTasks";
import styles from "./Tasks.module.css";
import { TasksList } from "./TasksList";

export function Tasks() {
  return (
    <section className={styles.container}>
       <header>
        <div>
          <p className={styles.taskCreated}>Tarefas criadas</p>
          <span className={styles.counter}>0</span>
        </div>

        <div>
          <p className={styles.taskDone}>Concluídas</p>
          <span className={styles.counter}>0</span>
        </div>
       </header>

      <section className={styles.tasksSection}>
        {/* <EmptyTasks /> */}
        <TasksList />
      </section>
    </section>
  )
}