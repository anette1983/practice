import { Button } from '../Button/Button';
import css from './StatusFilter.module.css';

// export const StatusFilter = () => {
//   return (
//     <div className={css.wrapper}>
//       <Button>All</Button>
//       <Button>Active</Button>
//       <Button>Completed</Button>
//     </div>
//   );
// };

// // Імпортуємо хук
// import { useSelector } from 'react-redux';
// // Імпортуємо об'єкт значень фільтра
// import { statusFilters } from '../../redux/constants';
// export const StatusFilter = () => {
//   // Отримуємо значення фільтра із стану Redux
//   const filter = useSelector(state => state.filters.status);
//   return (
//     <div className={css.wrapper}>
//       <Button selected={filter === statusFilters.all}>All</Button>
//       <Button selected={filter === statusFilters.active}>Active</Button>
//       <Button selected={filter === statusFilters.completed}>Completed</Button>
//     </div>
//   );
// };

// Імпортуємо хук

// import { useSelector, useDispatch } from 'react-redux';
// import { statusFilters } from '../../redux/constants';
// import { getStatusFilter } from '../../redux/selector';

// export const StatusFilter = () => {
//   const filter = useSelector(getStatusFilter);

//   return (
//     <div className={css.wrapper}>
//       <Button selected={filter === statusFilters.all}>All</Button>
//       <Button selected={filter === statusFilters.active}>Active</Button>
//       <Button selected={filter === statusFilters.completed}>Completed</Button>
//     </div>
//   );
// };

// // Імпортуємо хук
// import { useSelector, useDispatch } from 'react-redux';
// // Імпортуємо генератор екшену
// import { setStatusFilter } from '../../redux/actions';
// // Імпортуємо об'єкт значень фільтра
// import { statusFilters } from '../../redux/constants';

// export const StatusFilter = () => {
//   // Отримуємо посилання на функцію відправки екшенів
//   const dispatch = useDispatch();
//   const filter = useSelector(state => state.statusFilter);
//   // Викликаємо генератор екшену та передаємо значення фільтра
//   // Відправляємо результат - екшен зміни фільтра
//   const handleFilterChange = filter => dispatch(setStatusFilter(filter));
//   return (
//     <div className={css.wrapper}>
//       <Button
//         selected={filter === statusFilters.all}
//         onClick={() => handleFilterChange(statusFilters.all)}
//       >
//         All
//       </Button>
//       <Button
//         selected={filter === statusFilters.active}
//         onClick={() => handleFilterChange(statusFilters.active)}
//       >
//         Active
//       </Button>
//       <Button
//         selected={filter === statusFilters.completed}
//         onClick={() => handleFilterChange(statusFilters.completed)}
//       >
//         Completed
//       </Button>
//     </div>
//   );
// };

import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { getStatusFilter } from '../../redux/selector';
import { setStatusFilter } from '../../redux/actions';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
