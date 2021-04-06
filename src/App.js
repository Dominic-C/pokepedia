import './App.css';
import LandingLayout from "./containers/LandingLayout/LandingLayout";
import DescriptionPage from "./containers/DescriptionPage/DescriptionPage";
import {Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Redirect from="/" exact to="/page/1"/>
      <Route path="/page/:pageId" exact component={LandingLayout}/>
      <Route path="/page/:pageId/pokemon/:id" exact component={DescriptionPage}/>
    </Switch>
  );
}

export default App;
