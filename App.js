import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FirstScreenStackNavigator } from "./navigation/StackNavigator";

export default function App() {
  //const Stack = createNativeStackNavigator();
  //const Tab = createBottomTabNavigator();

  const [loaded] = useFonts({
    Inter: require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer style={styles.container}>
      {/*
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return focused ? (
                <Image source={require("./assets/imgs/HomeIconActive.png")} />
              ) : (
                <Image source={require("./assets/imgs/HomeIcon.png")} />
              );
            } else if (route.name === "RestDetail") {
              return focused ? (
                <Image source={require("./assets/imgs/BookIconActive.png")} />
              ) : (
                <Image source={require("./assets/imgs/BookIcon.png")} />
              );
            } else if (route.name === "User") {
              return focused ? (
                <Image source={require("./assets/imgs/UserIconActive.png")} />
              ) : (
                <Image source={require("./assets/imgs/UserIcon.png")} />
              );
            }
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#ff0000",
            border: 15,
            borderColor: "#000",
            shadowColor: "black",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            height: 60,
          },
        })}
      >
        <Tab.Screen
          name="User"
          component={User}
          options={{
            title: "User",
            headerShown: false,
            headerStyle: {
              backgroundColor: "#32B768",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          name="Second"
          component={Second}
          options={{ tabBarBadge: 3 }}
        />
      </Tab.Navigator>
*/}

      <SafeAreaProvider>
        <FirstScreenStackNavigator />
        {/*
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RestDetail"
            component={RestDetail}
            options={{
              title: "Details Restaurant",
              headerStyle: {
                backgroundColor: "#32B768",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="First"
            component={First}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Second"
            component={Second}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Third"
            component={Third}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Forgot"
            component={Forgot}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotSucces"
            component={ForgotSucces}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChangePass"
            component={ChangePass}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
          */}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#E2E2E2",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter",
  },
});
