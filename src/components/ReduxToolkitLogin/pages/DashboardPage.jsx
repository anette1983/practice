import { useLogOutRedirect } from '../hooks/useLogOutRedirect';

// export const DashboardPage = () => {
// const navigate = useNavigate();
// const isLoggedIn = useSelector(state => state.user.isLoggedIn);
// useEffect(() => {
//   if (!isLoggedIn) {
//     navigate('/login', { replace: true });
//   }
// }, [isLoggedIn, navigate]);

//   return <div>DashboardPage</div>;
// };

// Если нужно, чтобы при вылете из логина на любой странице нас перенаправляло на стр логина, можем сделать кастомн хук, чтобы не прописывать на кажд странице из многих

export const DashboardPage = () => {
  useLogOutRedirect();

  return <div>DashboardPage</div>;
};
