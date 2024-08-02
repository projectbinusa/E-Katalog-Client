// import logo from './logo.svg';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./component/Home";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
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
import Profile from './Admin/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/listprojek" component={Listp} exact />
            <Route path="/Profile" component={Profile} exact />
            <Route path="/uks" component={Uks} exact />
            <Route path="/absensi" component={Absensi} exact />
            <Route path="/sis" component={Sis} exact />
            <Route path="/ekampoeng" component={Ekampoeng} exact />
            <Route path="/bayartagihan" component={Bayartagihan} exact />
            <Route path="/sewaruang" component={Sewaruang} exact />
            <Route path="/bawaslu" component={Bawaslu} exact />
            <Route path="/dinarpos" component={Dinarpos} exact />
            <Route path="/pemilu" component={Pemilu} exact />
            <Route path="/invitation" component={Invitation} exact />
            <Route path="/datacenter" component={Datacenter} exact />
            <Route path="/kasir" component={Kasir} exact />
            <Route path="/labbahasa" component={Labbahasa} exact />
            <Route path="/managementwa" component={managementwa} exact />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
