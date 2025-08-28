"use client";

type TodoCardProps = {
  author: string;
  title: string;
  description: string;
};

export const TodoCard = ({ author, title, description }: TodoCardProps) => {
  return (
    <div className="flex flex-col gap-y-2 bg-gray-700 rounded-xl p-4">
      <div>
        <h3 className="text-xs">{author}</h3>
      </div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};
