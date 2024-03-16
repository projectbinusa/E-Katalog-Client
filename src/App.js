// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./component/Home"
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <main>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
    </main></BrowserRouter>
    </div>
  );
}

export default App;
