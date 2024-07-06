import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import * as z from "zod";

import styles from "./NewTask.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTaskValidationSchema = z.object({
  task: z
    .string()
    .min(2, { message: "É necessário inserir pelo menos 2 caracteres." })
    .refine(
      (value) => value.trim() !== "",
      "O campo não pode conter apenas espaços."
    ),
});

type newTaskFormData = z.infer<typeof newTaskValidationSchema>;

export function NewTask() {
  const [task, setTask] = useState<newTaskFormData[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<newTaskFormData>({
    resolver: zodResolver(newTaskValidationSchema),
    defaultValues: {
      task: "",
    },
  });

  function handleAddTask(data: newTaskFormData) {
    setTask((state) => [data, ...state]);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleAddTask)} className={styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        {...register("task")}
      />
      {errors.task && <span className={styles.error}>{errors.task.message}</span>}
      <button type="submit">
        Criar
        <PlusCircle size={20} weight="bold" />
      </button>
    </form>
  );
}
