import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/userSlice';

export const UserMenu = () => {
  // подписали юзер меню на стейт, чтобы получить тут инфу про пользователя, ткт она есть в стейте. Ьудем логиниь юзерменю в аппбаре, только когда пользователь залогинен

  const login = useSelector(state => state.user.login);
  const dispatch = useDispatch();
  return (
    <div>
      {login}
      <button onClick={() => dispatch(logOut())}>Log out</button>
      {/* На клик диспатчим резтат вызова экшена логаута */}
    </div>
  );
};
