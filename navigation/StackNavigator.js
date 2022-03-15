import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestDetail from "../screen/restdetail";
import Map from "../screen/map";
import First from "../screen/first";
import Second from "../screen/second";
import Third from "../screen/third";
import Welcome from "../screen/welcome";
import BottomTabNavigator from "./TabNavigator";
import User from "../screen/user";
import Forgot from "../screen/forgot";
import ForgotSucces from "../screen/forgotsuccess";
import ChangePass from "../screen/changepass";
import ChangePassSucces from "../screen/changepasssuccess";
import Home from "../screen/home";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerShown: false,
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RestDetail" component={RestDetail} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};

const UserStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="ForgotSucces" component={ForgotSucces} />
      <Stack.Screen name="ChangePass" component={ChangePass} />
      <Stack.Screen name="ChangePassSucces" component={ChangePassSucces} />
    </Stack.Navigator>
  );
};

const FirstScreenStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="First" component={First} />
      <Stack.Screen name="Second" component={Second} />
      <Stack.Screen name="Third" component={Third} />
      <Stack.Screen name="Home" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, FirstScreenStackNavigator, UserStackNavigator };
