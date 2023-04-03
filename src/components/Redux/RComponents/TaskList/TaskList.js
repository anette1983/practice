import { Task } from '../Task/Task';
import css from './TaskList.module.css';
// Імпортуємо хук
import { useSelector } from 'react-redux';
// Імпортуємо об'єкт значень фільтра
import { statusFilters } from '../../redux/constants';

// крок 3 - винесемо функцыъ селектори в окремий файл
import { getTasks, getStatusFilter } from '../../redux/selector';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

// export const TaskList = () => {
//   return (
//     <ul className={css.list}>
//       {[].map(task => (
//         <li className={css.listItem} key={task.id}>
//           <Task task={task} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export const TaskList = () => {
//   // Отримуємо масив завдань із стану Redux
//   const tasks = useSelector(state => state.tasks);
//   // Отримуємо значення фільтра із стану Redux
//   const statusFilter = useSelector(state => state.filters.status);
//   // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
//   const visibleTasks = getVisibleTasks(tasks, statusFilter);
//   return (
//     <ul className={css.list}>
//       {visibleTasks.map(task => (
//         <li key={task.id} className={css.listItem}>
//           <Task task={task} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// Зверніть увагу на те, що у компонента TaskList немає пропсів, як це було б при використанні стану React. Компоненту App тепер не потрібно знати про те, що TaskList підписаний на дані із стору. Використовуючи Redux будь-який компонент може безпосередньо отримати доступ до значень стану Redux, якщо в цьому є необхідність.

export const TaskList = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(getTasks);
  // Отримуємо значення фільтра із стану Redux
  const statusFilter = useSelector(getStatusFilter);
  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li key={task.id} className={css.listItem}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

// крок 3 - використовуємо винесені функції-селектори замість повторюваного коду (56 строка ітд)
