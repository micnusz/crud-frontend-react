"use client";
import { createTodo } from "@/actions/actions";
import { useActionState } from "react";

const initialState = {
  message: "",
  success: false,
};

export const TodoForm = () => {
  const [state, formAction, pending] = useActionState(createTodo, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-y-2 w-50">
      <label htmlFor="author">Author</label>
      <input
        type="text"
        id="author"
        name="author"
        required
        className="border-1 p-2"
      />

      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        required
        className="border-1 p-2"
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        required
        className="border-1 p-2"
        rows={3}
      />

      <p
        aria-live="polite"
        className={`${state.success ? "text-green-600" : "text-red-600"}`}
      >
        {state.message}
      </p>

      <button
        type="submit"
        disabled={pending}
        className="border-1 bg-blue-600 text-white p-2 disabled:bg-gray-400"
      >
        {pending ? "Creating..." : "Create Todo"}
      </button>
    </form>
  );
};
