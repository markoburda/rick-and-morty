import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import DetailedCharacter from "./pages/DetailedCharacter/DetailedCharacter";
import Header from "./components/Header";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/search">
          <Home />
        </Route>
        <Route exact path="*">
          <div>
            <Header />
            <Switch>
              <Route exact path="/character/:id">
                <DetailedCharacter />
              </Route>
              <Route path="*">
                <Redirect to="/search" />
              </Route>
            </Switch>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
