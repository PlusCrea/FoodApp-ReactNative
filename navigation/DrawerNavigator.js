import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import First from "../screen/first";
import Second from "../screen/second";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="First" component={First} />
      <Drawer.Screen name="Home" component={Second} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
