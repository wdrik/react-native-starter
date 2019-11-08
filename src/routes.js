import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/main";
import Product from "./pages/product";

const AppNavigator = createStackNavigator(
  {
    Main,
    Product
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#f4511e"
      }
    },
    navigationOptions: {
      tabBarLabel: "Home!"
    }
  }
);

export default createAppContainer(AppNavigator);
