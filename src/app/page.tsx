"use server";

import { TodoCard } from "@/components/TodoCard";
import { TodoForm } from "@/components/TodoForm";
import { todoClient } from "@/services/todoService";

export default async function Home() {
  const data = await todoClient.getTodos();

  return (
    <div className="p-4">
      <h1>lista todos</h1>
      <ul className="flex flex-col gap-y-2">
        {data?.map((todo) => (
          <li key={todo.id}>
            <TodoCard
              author={todo.author}
              title={todo.title}
              description={todo.description}
            />
          </li>
        ))}
      </ul>
      <TodoForm />
    </div>
  );
}
