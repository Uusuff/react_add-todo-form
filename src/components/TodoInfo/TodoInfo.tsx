import { UserInfo } from '../UserInfo';
import usersFromServer from '../../api/users';

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

export const TodoInfo = ({ todo }: { todo: Todo }) => {
  const user = usersFromServer.find((user) => user.id === todo.userId);

  return (
    <article
      data-id={todo.id}
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={user ? { email: user.email, name: user.name } : null} />
    </article>
  );
};
