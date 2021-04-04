import './App.css';
import LandingLayout from "./containers/LandingLayout/LandingLayout";
import DescriptionPage from "./containers/DescriptionPage/DescriptionPage";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={LandingLayout}/>
      <Route path="/:id" component={DescriptionPage}/>
    </Switch>
  );
}

export default App;
