import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import managementwa from "./pages/ManagementWa";
import Register from './Auth/Register';
import Dashboard from './Admin/Dashboard';
import Listp from './Admin/Listp';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route path="/register" element={<Register />} exact />
            <Route path="/dashboard" element={<Dashboard />} exact />
            <Route path="/listprojek" element={<Listp />} exact />
            <Route path="/Profile" element={<Profile />} exact />
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
            <Route path="/managementwa" element={<managementwa />} exact />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;