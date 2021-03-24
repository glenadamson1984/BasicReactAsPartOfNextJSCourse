import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Allmeetups from "./pages/Allmeetups";
import Favourites from "./pages/Favourites";
import Newmeetups from "./pages/Newmeetups";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
