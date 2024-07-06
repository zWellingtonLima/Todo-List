import clipboard from "../assets/clipboard.svg";
import styles from "./EmptyTasks.module.css";

export function EmptyTasks() {
  return (
  <div className={styles.container}>
    <div>
      <img src={clipboard} alt="Ícone de prancheta" />
    </div>

    <div className={styles.emptyInfo}>
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  </div>
  )
}