import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Layout } from "./components/site/Layout";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { NotFoundPage } from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route index={true} element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
