import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './Screens/MainScreen';
import AddItems from './Screens/AddItems';
import ResolveWatchListItems from './Screens/ResolveWatchListItems';
import WatchList from './Screens/WatchList';
import DetailResolveWatchListItems from './Screens/DetailResolveWatchListItems';
import EditResolveWatchListItems from './Screens/EditResolveWatchListItems';
import DetailWatchListItems from './Screens/DetailWatchListItems';
import EditWatchListItems from './Screens/EditWatchListItems';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
          
        }}
        initialRouteName="MainScreen"
      >
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}

        />
        <Stack.Screen
          name="AddItems"
          component={AddItems}

        />
          <Stack.Screen
          name="ResolveWatchListItems"
          component={ResolveWatchListItems}

        />
        <Stack.Screen
          name="WatchList"
          component={WatchList}

        />
        <Stack.Screen
          name="DetailResolveWatchListItems"
          component={DetailResolveWatchListItems}

        />
         <Stack.Screen
          name="EditResolveWatchListItems"
          component={EditResolveWatchListItems}

        />
         <Stack.Screen
          name="DetailWatchListItems"
          component={DetailWatchListItems}

        />
         <Stack.Screen
          name="EditWatchListItems"
          component={EditWatchListItems}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}