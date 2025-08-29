"use server";

import { getTodos } from "@/actions/actions";
import { TodoCard } from "@/components/TodoCard";
import { TodoForm } from "@/components/TodoForm";

export default async function Home() {
  const data = await getTodos();

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
