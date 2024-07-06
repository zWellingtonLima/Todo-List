import { Trash } from "phosphor-react";
import styles from "./TasksList.module.css";

export function TasksList() {
  return (
    <div className={styles.taskList}>
      <input type="checkbox" id="taskCheckbox" />
      <label htmlFor="taskCheckbox">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, ipsa
        maxime nulla distinctio perferendis doloremque.
      </label>

      <button className={styles.trashContainer}>
        <Trash />
      </button>
    </div>
  );
}
