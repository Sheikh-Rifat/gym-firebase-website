import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/About/Contact";
import Footer from "./components/Footer/Footer";
import MenuHeader from "./components/Header/MenuHeader/MenuHeader";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Login/Register";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import MemberShip from "./components/MemberShip/MemberShip.js/MemberShip";
import NotFound from "./components/NotFound/NotFound";
import ServiceDetail from "./components/ServiceDetails/ServiceDetail";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <MenuHeader />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/membership">
            <MemberShip></MemberShip>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/details/:detail">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
