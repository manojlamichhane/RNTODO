import React from "react";
import { Text, View } from "react-native";

import { NavigationContainer, useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllTodos from "../screen/AllTodos";
import CompletedTodos from "../screen/CompletedTodos";
import PriorityTodos from "../screen/PriorityTodos";

const tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  const themecolor = useTheme();

  return (
    <tab.Navigator tabBarOptions={{ showLabel: false }}>
      <tab.Screen
        name="All"
        component={AllTodos}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name="list"
              size={focused ? size * 1.3 : size}
              color={focused ? themecolor.colors.primary : color}
            />
          ),
        }}
      />
      <tab.Screen
        name="Complted"
        component={CompletedTodos}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name="checkmark"
              size={focused ? size * 1.3 : size}
              color={color}
            />
          ),
        }}
      />
      <tab.Screen
        name="Priority"
        component={PriorityTodos}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name="flash"
              size={focused ? size * 1.3 : size}
              color={color}
            />
          ),
        }}
      />
    </tab.Navigator>
  );
};
export default MainNavigator;
