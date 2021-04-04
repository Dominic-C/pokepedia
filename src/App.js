import './App.css';
import LandingLayout from "./containers/LandingLayout/LandingLayout";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={LandingLayout}/>
    </Switch>
  );
}

export default App;
