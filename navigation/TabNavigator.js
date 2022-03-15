import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Home from "../screen/home";
import { UserStackNavigator, MainStackNavigator } from "./StackNavigator";
import BookHistory from "../screen/bookhistory";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return focused ? (
              <Image source={require("../assets/imgs/HomeIconActive.png")} />
            ) : (
              <Image source={require("../assets/imgs/HomeIcon.png")} />
            );
          } else if (route.name === "BookHistory") {
            return focused ? (
              <Image source={require("../assets/imgs/BookIconActive.png")} />
            ) : (
              <Image source={require("../assets/imgs/BookIcon.png")} />
            );
          } else if (route.name === "User") {
            return focused ? (
              <Image source={require("../assets/imgs/UserIconActive.png")} />
            ) : (
              <Image source={require("../assets/imgs/UserIcon.png")} />
            );
          }
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          border: 15,
          borderColor: "#000",
          shadowColor: "black",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          height: 60,
        },
      })}
    >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="BookHistory" component={BookHistory} />
      <Tab.Screen
        name="User"
        component={UserStackNavigator}
        options={{ tabBarBadge: 3 }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
