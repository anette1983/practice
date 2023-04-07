import { useSelector, useDispatch } from 'react-redux';
import { update } from '../redux/clicksSlice';
import { getClicksValue } from '../redux/clicksSlice';

// export const ReduxPersist = () => {
//   const dispatch = useDispatch();
//   const numberOfClicks = useSelector(state => state.clicks.value);
//   return (
//     <div>
//       <h1></h1>
//       <button type="button" onClick={() => dispatch(update())}>
// Number of clicks: {numberOfClicks}
//         {/* диспатч обновляет стейт, а намебр оф кликс берется из стейта */}
//       </button>
//     </div>
//   );
// };

export const ReduxPersist = () => {
  const dispatch = useDispatch();
  // const numberOfClicks = useSelector(state => state.clicks.value);
  const numberOfClicks = useSelector(getClicksValue);
  return (
    <div>
      <h1>Number of clicks: {numberOfClicks}</h1>
      <button type="button" onClick={() => dispatch(update(5))}>
        Add 5 clicks
        {/* диспатч обновляет стейт, а намебр оф кликс берется из стейта */}
      </button>
      <button type="button" onClick={() => dispatch(update(10))}>
        Add 10 clicks
        {/* диспатч обновляет стейт, а намебр оф кликс берется из стейта */}
      </button>
      <button type="button" onClick={() => dispatch(update(20))}>
        Add 20 clicks
        {/* диспатч обновляет стейт, а намебр оф кликс берется из стейта */}
      </button>
    </div>
  );
};
