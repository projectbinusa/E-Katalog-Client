import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./component/Home";
import Catalog from "./component/Catalog";
import Service from "./component/Service";
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
import DetailLp from "./Admin/DetailLp";

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

// Komponen PrivateRoute untuk melindungi rute berdasarkan otentikasi dan role
function PrivateRoute({ children }) {
  const location = useLocation();

  if (!isAuthenticated()) {
    // Redirect ke halaman login jika belum login
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!checkAdminRole()) {
    // Redirect ke halaman beranda jika bukan "ADMIN"
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
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/service" element={<Service />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/detail/:id" element={<DetailLp />} />
            <Route path="/uks" element={<Uks />} />
            <Route path="/absensi" element={<Absensi />} />
            <Route path="/sis" element={<Sis />} />
            <Route path="/ekampoeng" element={<Ekampoeng />} />
            <Route path="/bayartagihan" element={<Bayartagihan />} />
            <Route path="/sewaruang" element={<Sewaruang />} />
            <Route path="/bawaslu" element={<Bawaslu />} />
            <Route path="/dinarpos" element={<Dinarpos />} />
            <Route path="/pemilu" element={<Pemilu />} />
            <Route path="/invitation" element={<Invitation />} />
            <Route path="/datacenter" element={<Datacenter />} />
            <Route path="/kasir" element={<Kasir />} />
            <Route path="/labbahasa" element={<Labbahasa />} />
            <Route path="/managementwa" element={<ManagementWa />} />

            {/* Rute dilindungi - Hanya untuk Admin */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/gantipass"
              element={
                <PrivateRoute>
                  <GantiPass />
                </PrivateRoute>
              }
            />
            <Route
              path="/listprojek"
              element={
                <PrivateRoute>
                  <Listp />
                </PrivateRoute>
              }
            />
            <Route
              path="/updatelist/:id"
              element={
                <PrivateRoute>
                  <Updatelist />
                </PrivateRoute>
              }
            />
            <Route
              path="/tambahlist"
              element={
                <PrivateRoute>
                  <Createlist />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
