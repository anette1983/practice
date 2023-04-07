import { AppBar } from './AppBar/AppBar';
import { Layout } from './Layout/Layout';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

export const PersistTodos = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
