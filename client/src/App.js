import { Container } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,Route
} from "react-router-dom";

import NavBar from "./Components/Navbar/NavBar";
import Home from "./Components/Home/Home";
import Sign from "./Components/Sign/Sign";


function App() {

  return (
      <Router>
    <Container maxWidth="lg">
       <NavBar/>
       <Switch>
         <Route path="/" exact  component={Home}/>
         <Route path="/sign-in" exact  component={Sign}/>
       </Switch>
    </Container>
      </Router>
  );
}


export default App;
