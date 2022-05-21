import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import WebViewScreen from "../screens/WebViewScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cidades">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Cidades" }}
        />
        <Stack.Screen
          name="WebViewScreen"
          component={WebViewScreen}
          options={{ title: "Rotas" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
