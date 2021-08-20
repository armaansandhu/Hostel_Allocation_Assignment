import ChooseRoom from "./ChooseRoom";
import ChooseHostel from "./ChooseHostel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Auth";
import "./styles.css";
import Login from "./Login";
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/bookHostel/:gender" component={ChooseHostel} />
            <Route path="/bookRoom/:room" component={ChooseRoom} />

            <Route path="/home" component={Home} />
            <Route path="/" component={Login} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}
