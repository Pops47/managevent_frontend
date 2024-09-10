import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import NavBarAdmin from "./components/NavBar/NavBarAdmin";
import CreateUpdateEventPage from "./pages/Admin/HandleEvent/CreateUpdateEventPage";
import TaskList from "./pages/Admin/HandleTask/TaskList";
import UserList from "./pages/Admin/HandleUser/UserList";
import Contact from "./pages/Contact/Contact";
import CalendarPage from "./pages/Events/CalendarPage";
import DetailEventPage from "./pages/Events/DetailEventPage";
import EventsPage from "./pages/Events/EventsPage";
import Homepage from "./pages/Home/Homepage";
import Login from "./pages/Login/Login";
import CheckEmailPage from "./pages/Login/ResetPassword/CheckEmailPage";
import NewPasswordPage from "./pages/Login/ResetPassword/NewPasswordPage";
import ResetPassPage from "./pages/Login/ResetPassword/ResetPassPage";
import NotificationPage from "./pages/Notification/NotificationPage";
import ProfilePage from "./pages/Profil/ProfilePage";
import UpdateProfilePage from "./pages/Profil/UpdateProfilePage";
import Register from "./pages/Register/Register";
import RegisterConfirmEmail from "./pages/Register/RegisterConfirm";
import Page404 from "./services/utils/Page404";
import PrivateAdminRoute from "./services/utils/PrivateAdminRoute";

export default function App() {
  // checking route path to display NavBar or NavBarAdmin
  const { pathname } = useLocation();
  const isAdminPath = new RegExp("^/admin");
  const isPanelAdmin = isAdminPath.test(pathname);
  // checking route path to display NavBar or Not
  const isContactPath = new RegExp("/contact");
  const isRegisterPath = new RegExp("/register");
  const isLoginPath = new RegExp("^/login");
  const isNotNavBarPage =
    pathname === "/" ||
    pathname === "/404" ||
    isLoginPath.test(pathname) ||
    isRegisterPath.test(pathname) ||
    isContactPath.test(pathname);

  return (
    <>
      {isNotNavBarPage ? null : isPanelAdmin ? <NavBarAdmin /> : <NavBar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/register/confirm-email/:token"
          element={<RegisterConfirmEmail />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/login/reset-pass" element={<ResetPassPage />} />
        <Route path="/login/check-email" element={<CheckEmailPage />} />
        <Route path="/login/reset-pass/:token" element={<NewPasswordPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/update" element={<UpdateProfilePage />} />
        <Route element={<PrivateAdminRoute />}>
          <Route
            path="/events"
            element={<EventsPage isPanelAdmin={isPanelAdmin} />}
          />
          <Route
            path="/events/calendar"
            element={<CalendarPage isPanelAdmin={isPanelAdmin} />}
          />
          <Route path="/events/:id" element={<DetailEventPage />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route
            path="/admin/events"
            element={<EventsPage isPanelAdmin={isPanelAdmin} />}
          />
          <Route
            path="/admin/events/calendar"
            element={<CalendarPage isPanelAdmin={isPanelAdmin} />}
          />
          <Route
            path="/admin/events/create-update"
            element={<CreateUpdateEventPage />}
          />
          <Route
            path="/admin/events/create-update/:eventId"
            element={<CreateUpdateEventPage />}
          />
        </Route>
        <Route path="/admin/tasks" element={<TaskList />} />
        <Route path="/admin/users" element={<UserList />} />

        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      <ReactQueryDevtools />
    </>
  );
}
