import { Redirect, Route, Switch } from "react-router-dom";
import Sticky from "react-sticky-nav";
import "../src/App.css";
import Addmisson from "../src/components/Addmisson/Admisson";
import Faculty from "../src/components/Faculty/Faculty";
import FacultyMembers from "../src/components/FacultyMembers/FacultyMembers";
import Header from "../src/components/Header/Header";
import Home from "../src/components/Home/Home";
import Iqac from "../src/components/IQAC/Iqac";
import Library from "../src/components/Library/Library";
import Login from "../src/components/Login/Login";
import Navbar from "../src/components/NavBar/Navbar";
import StudentPortal from "../src/components/StudentPortal/Studentportal";
import AboutUs from "./components/About Us/About";


function App() {
  return (
    <div className="App">
      <Header />
      <Sticky className="sticky">
        <Navbar />
      </Sticky>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/addmisson" component={Addmisson} />
        <Route exact path="/iqac" component={Iqac} />
        <Route exact path="/facultymembers" component={FacultyMembers} />
        <Route exact path="/faculty" component={Faculty} />
        <Route exact path="/studentportal" component={StudentPortal} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
