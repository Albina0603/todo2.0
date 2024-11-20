"use client";

import { Edit } from "lucide-react";
import TaskItem from "./TaskItem";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  EditTask: (id: number) =>void;
}

export default function TaskList({
  tasks,
  toggleTask,
  deleteTask,
  EditTask,
}: TaskListProps) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          EditTask={EditTask}
        />
      ))}
    </ul>
  );
}
