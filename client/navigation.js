import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import CartScreen from "./screens/CartScreen";
import OrderPreparingScreen from "./screens/OrderPreparingScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import { Provider } from "react-redux";
import { store } from "./store";
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ presentation: "modal" }}
          />
          <Stack.Screen
            name="OrderPreparing"
            options={{ presentation: "fullScreenModal" }}
            component={OrderPreparingScreen}
          />
          <Stack.Screen
            name="Delivery"
            options={{ presentation: "fullScreenModal" }}
            component={DeliveryScreen}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
