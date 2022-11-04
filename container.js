
import * as React from "react";

//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Import Bottom Tab Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Import Icon
import { Ionicons } from '@expo/vector-icons';

// Import Screen
import Home from './component/Home.js'
import Login from './component/Login.js'
import Register from './component/Register.js'
import MainPage from './component/MainPage.js'

// Create Stack Navigation
const Stack = createStackNavigator();

//Create Bottom Tab Navigation
const Tab = createBottomTabNavigator()

// Create Component Bottom Tab Navigation
const MyTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerMode: "screen",
                headerTintColor: "indigo",
                headerStyle: { backgroundColor: "pink" },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    if (route.name === "Hello") {
                        iconName = focused ? "home" : "home-outline"
                    } else if (route.name === "Form") {
                        iconName = focused ? "document-text" : "document-text-outline"
                    }

                    return <Ionicons name={iconName} size={20} color="orange" />
                },
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "blue"

            })}

        >

            <Tab.Screen name="MainPage" component={MainPage} />

        </Tab.Navigator>
    )
}



export default function Container() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }}

                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: "Login",
                        headerTintColor: "red",
                        headerMode: "screen",

                    }}
                />

                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        title: "Register",
                        headerTintColor: "red",
                        headerMode: "screen",

                    }}
                />
                <Stack.Screen
                    name="MainPage"
                    component={MainPage}
                    options={{
                        title: "MainPage",
                        headerTintColor: "red",
                        headerShown: false

                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}