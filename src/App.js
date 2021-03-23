import { Route, Switch } from "react-router-dom";
import Allmeetups from "./pages/Allmeetups";
import Favourites from "./pages/Favourites";
import Newmeetups from "./pages/Newmeetups";
import MainNavigation from './components/layout/MainNavigation'

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Allmeetups />
        </Route>
        <Route path="/new-meetup">
          <Newmeetups />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
