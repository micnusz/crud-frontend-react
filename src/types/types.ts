export type TodoDTO = {
  author: string;
  title: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
};

export type Todo = {
  author: string;
  title: string;
  description: string;
  id: number;
  createdAt?: string;
  updatedAt?: string;
};
