import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useCallback, useState } from "react";
import _ from "lodash";
import DetailedCharacter from "./pages/DetailedCharacter/DetailedCharacter";
import Header from "./components/Header";
import Home from "./pages/Home";

const Router = () => {
  const [name, setName] = useState("");
  const [queryName, setQueryName] = useState("");

  const delayedQuery = useCallback(_.debounce(setQueryName, 1000), [
    setQueryName,
  ]);

  const onNameChange = (value) => {
    setName(value);
    delayedQuery(value);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/search">
          <Home name={name} onNameChange={onNameChange} queryName={queryName} />
        </Route>
        <Route exact path="*">
          <div>
            <Header name={name} setValue={setName} />
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
