import React from 'react';
import { Route, Switch } from "react-router-dom";

//Layouts
import MainLayout from "./layouts/MainLayout";
import HomePageLayout from "./layouts/HomePageLayout";

//Pages
import HomePage from './pages/HomePage/HomePage';
import Registration from "./pages/Registration/RegistrationPage"
import "./default.scss";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomePageLayout>
              <HomePage />
            </HomePageLayout>
          )}
        />
        <Route
          exact
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
        )}
        />
      </Switch>
    </div>
  );
}

export default App;
