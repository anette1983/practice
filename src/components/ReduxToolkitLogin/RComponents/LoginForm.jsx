import { useDispatch } from 'react-redux';
import { logIn } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
// чтобы перенеправить на другую страницу, когда залогинилист - зук юзнавигейт

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    //   когда будем отправлять форму, должны взять из юзерэкшена логин и его задиспатчить
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log('form.elements.login.value :>> ', form.elements.login.value);
    dispatch(logIn(form.elements.login.value));
    form.reset();
    navigate('/dashboard', { replace: true });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <button type="submit">Log in</button>
    </form>
  );
};
