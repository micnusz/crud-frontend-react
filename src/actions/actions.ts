"use server";

import apiClient from "@/lib/apiClient";
import { Todo, TodoDTO } from "@/types/types";

export async function createTodo(prevState: any, formData: FormData) {
  try {
    // Extract data from FormData
    const author = formData.get("author") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    // Validation
    if (!author?.trim() || !title?.trim() || !description?.trim()) {
      return {
        message: "All fields are required",
        success: false,
      };
    }

    // Create TodoDTO object
    const todoData: TodoDTO = {
      author: author.trim(),
      title: title.trim(),
      description: description.trim(),
    };

    // Send to backend
    const res = await apiClient.post("/todos", todoData);

    return {
      message: "Todo created successfully!",
      success: true,
      data: res.data,
    };
  } catch (error) {
    console.error("Error creating todo:", error);
    return {
      message: "Failed to create todo",
      success: false,
    };
  }
}

export async function getTodos(): Promise<Todo[]> {
  try {
    const res = await apiClient.get<{ content: Todo[] }>(
      "/todos?page=0&size=10&sortBy=createdAt&direction=desc"
    );

    return res.data.content;
  } catch (error) {
    console.error("Error creating todo:", error);
    return [];
  }
}
