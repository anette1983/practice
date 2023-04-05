import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'components/ReduxToolkitLogin/RComponents/Layout';
import { DashboardPage, LoginPage } from './pages';

export const ReduxToolkitLogin = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
