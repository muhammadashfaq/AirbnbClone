import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import ForgotPassword from "../screens/ForgotPassword";
import LoggedOut from "../screens/LoggedOut";

export const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      LoggedOut: LoggedOut,
      Login: Login,
      ForgotPassword: ForgotPassword
    },
    {
      initialRouteName: "LoggedOut",
      headerMode: 'none'
    }
  )
);
