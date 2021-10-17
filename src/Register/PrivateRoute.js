import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export const PrivateRoute = ({ component: PropsComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(Props) => {
        return currentUser ? (
          <PropsComponent {...Props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};
