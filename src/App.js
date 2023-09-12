import { Outlet, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Home, Register, Login, ResetPassword, Profile } from "./pages";
import { useSelector } from "react-redux";

const Layout = () => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

const App = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div data-theme={theme} className="w-full min-h-[100vh]">
      <Routes>
        <Route element={<Layout />} />
        <Route to="/" element={<Home />} />
        <Route to="/login" element={<Login />} />
        <Route to="/register" element={<Register />} />
        <Route to="/reset-password" element={<ResetPassword />} />
        <Route to="/profile/:id?" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
