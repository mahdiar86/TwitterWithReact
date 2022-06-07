import React from "react";
import Layout from "./layout/Layout";
import { BrowserRouter, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import Page404 from "../pages/404/404";
import Home from "../pages/home/Home";
import TwittesByHashtag from "../pages/TwittesByHashtag/TwittesByHashtag";
import TwittesByUser from "../pages/TwittesByUser/TwittesByUser";
import AuthPage from "../pages/auth/AuthPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TweetProvider } from "../context/TweetContext";
import {LayoutProvider} from "../context/LayoutContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PublicRoute exact path="/login" component={AuthPage} />
          <PrivateRoute
            path={"/"}
            render={() => (
                <LayoutProvider>
                  <TweetProvider>
                    <Layout>
                      <Switch>
                        <Route exact path={"/"} component={Home} />
                        <Route
                          exact
                          path={"/hashtags/:hashtag"}
                          component={TwittesByHashtag}
                        />
                          <Route exact path={"/users/:id/:name"} component={TwittesByUser}/>
                        <Route component={Page404}></Route>
                      </Switch>
                   </Layout>
                  </TweetProvider>
              </LayoutProvider>
            )}
          />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

const isLogin = () => !!localStorage.getItem("x-auth-token");

const PublicRoute = ({ component, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        if (isLogin()) return <Redirect to={"/"} />;
        else {
          return React.createElement(component, props);
        }
      }}
    />
  );
};

const PrivateRoute = ({ render, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        if (isLogin()) return render(props);
        else return <Redirect to={"/login"} />;
      }}
    />
  );
};

export default App;
