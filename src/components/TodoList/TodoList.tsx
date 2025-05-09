import { TodoInfo } from '../TodoInfo';

interface Props {
  todos: Array<{
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }>;
}

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map((todo) => (
        <TodoInfo todo={todo} key={todo.id} />
      ))}
    </section>
  );
};
