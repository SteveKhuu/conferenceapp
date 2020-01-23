import React from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

HomeScreen.navigationOptions = () => ({
    title: "Derppp"
});

HomeScreen.navigationOptions = () => ({
    headerShown: false
});

ScheduleScreen.navigationOptions = () => ({
    headerLeft: () => null,
    gestureEnabled: false,
});

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Schedule: ScheduleScreen,
        Details: DetailsScreen
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);

// export default function App() {
//   return (
//       <View style={styles.container}>
//         <ScheduleScreen />
//       </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
