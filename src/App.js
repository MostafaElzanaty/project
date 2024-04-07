import React from "react";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NotePage from "./pages/NotePage";
import "./App.css";

const App = () => {
  return (
    <Router>
    <div className="container dark">
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={NotesListPage} />
          <Route path="/note/:id" component={NotePage} />
        </Switch>
      </div>
    </div>
  </Router>
  );
};

export default App;
