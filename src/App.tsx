
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import { CallbackPage } from "./pages/callback-page";
import { PageLoader } from "./components/page-loader";
import ProfilePage from "./pages/ProfilePage";

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
  );
}

export default App;
