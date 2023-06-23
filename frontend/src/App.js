//import { Person } from "@material-ui/icons";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/register";
import Profile from "./pages/profile/Profile";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile/:username" element={<Profile />} />
        </Routes>
      </Router>
  );
}

export default App;