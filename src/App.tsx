import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.scss";
import Dropdown from "./components/dropdown/dropdown";
import FoldableMenu, {
  menuLocation,
} from "./components/foldable-menu/foldable-menu";
import LandingPage from "./components/landing-page/landing";
import ToolController from "./components/tool-controller/tool-controller";
import { TOOL_LIST } from "./util";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link to="/">PS Tools</Link>
        </header>
        <FoldableMenu
          location={menuLocation.RIGHT}
          routeBase={"tools"}
          menuItems={TOOL_LIST.map((tool) => {
            return { name: tool.name, id: tool.id };
          })}
        />
        <div className="page-body">
          <Switch>
            <Route path="/tools/:id">
              <ToolController />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
