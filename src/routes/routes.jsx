import { Switch } from "react-router-dom";
import Route from "./route";
import PageNotFound from "../pages/PageNotFound"
import Home from "../pages/Home"
import Account from "../pages/Account"
import Login from "../pages/Login"


const Routes = () => {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/account" isPrivate={true} exact component={Account} />
        <Route component={PageNotFound} />
      </Switch>
    );
  };

//   
  
  export default Routes;
