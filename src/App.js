import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./component/Home";
import Login from "./Auth/Login";
import Uks from "./pages/Uks";
import Absensi from "./pages/Absensi";
import Sis from "./pages/Sis";
import Ekampoeng from "./pages/Ekampoeng";
import Bayartagihan from "./pages/Bayartagihan";
import Sewaruang from "./pages/Sewaruang";
import Bawaslu from "./pages/Bawaslu";
import Dinarpos from "./pages/Dinarpos";
import Pemilu from "./pages/Pemilu";
import Invitation from "./pages/Einvitation";
import Datacenter from "./pages/Datacenter";
import Kasir from "./pages/Kasir";
import Labbahasa from "./pages/Labbahasa";
import ManagementWa from "./pages/ManagementWa";
import Register from "./Auth/Register";
import Dashboard from "./Admin/Dashboard";
import Listp from "./Admin/Listp";
import Profile from "./component/Profile";
import Createlist from "./Admin/Createlist";
import Updatelist from "./Admin/Updatelist";
import GantiPass from "./component/GantiPass";

// Fungsi untuk memeriksa apakah role pengguna adalah "ADMIN"
function checkAdminRole() {
  const userRole = localStorage.getItem("role");
  return userRole === "ADMIN";
}

// Fungsi untuk memeriksa apakah pengguna sudah login (token tersimpan)
function isAuthenticated() {
  const token = localStorage.getItem("token");
  return token !== null && token !== undefined && token !== '';
}

// Komponen untuk mengelola rute berdasarkan otentikasi
function AuthRoute({ children }) {
  if (isAuthenticated()) {
    // Jika sudah login, tetap di halaman yang diinginkan
    return children;
  }

  // Jika belum login, redirect ke halaman Home
  return <Navigate to="/" replace />;
}

// Komponen ProtectedRoute untuk melindungi rute berdasarkan otentikasi dan role
function ProtectedRoute({ children }) {
  const location = useLocation();
  
  if (!isAuthenticated()) {
    // Redirect ke halaman Home jika belum login
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  if (!checkAdminRole()) {
    // Redirect ke halaman Home jika bukan "ADMIN"
    return <Navigate to="/" replace />;
  }

  // Render konten jika pengguna lolos semua validasi
  return children;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            {/* Rute publik */}
            <Route
              path="/"
              element={
                <Home />
              }
              exact
            />
            <Route
              path="/login"
              element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              }
              exact
            />
            <Route
              path="/register"
              element={
                <AuthRoute>
                  <Register />
                </AuthRoute>
              }
              exact
            />
            <Route path="/uks" element={<Uks />} exact />
            <Route path="/absensi" element={<Absensi />} exact />
            <Route path="/sis" element={<Sis />} exact />
            <Route path="/ekampoeng" element={<Ekampoeng />} exact />
            <Route path="/bayartagihan" element={<Bayartagihan />} exact />
            <Route path="/sewaruang" element={<Sewaruang />} exact />
            <Route path="/bawaslu" element={<Bawaslu />} exact />
            <Route path="/dinarpos" element={<Dinarpos />} exact />
            <Route path="/pemilu" element={<Pemilu />} exact />
            <Route path="/invitation" element={<Invitation />} exact />
            <Route path="/datacenter" element={<Datacenter />} exact />
            <Route path="/kasir" element={<Kasir />} exact />
            <Route path="/labbahasa" element={<Labbahasa />} exact />
            <Route path="/managementwa" element={<ManagementWa />} exact />

            {/* Rute dilindungi - Hanya untuk Admin */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
              exact
            />
            <Route
              path="/gantipass"
              element={
                <ProtectedRoute>
                  <GantiPass />
                </ProtectedRoute>
              }
              exact
            />
            <Route
              path="/listprojek"
              element={
                <ProtectedRoute>
                  <Listp />
                </ProtectedRoute>
              }
              exact
            />
            <Route
              path="/updatelist/:id"
              element={
                <ProtectedRoute>
                  <Updatelist />
                </ProtectedRoute>
              }
              exact
            />
            <Route
              path="/tambahlist"
              element={
                <ProtectedRoute>
                  <Createlist />
                </ProtectedRoute>
              }
              exact
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
              exact
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
