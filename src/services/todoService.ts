import apiClient from "@/lib/apiClient";

export type Todo = {
  id: number;
  author: string;
  title: string;
  description: string;
};

export const todoClient = {
  async getTodos(): Promise<Todo[]> {
    const res = await apiClient.get<{ content: Todo[] }>(
      "/todos?page=0&size=10&sortBy=id&direction=asc"
    );
    return res.data.content;
  },
};
