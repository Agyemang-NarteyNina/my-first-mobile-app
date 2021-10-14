import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/home';
import CartScreen from './Screens/cart';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Shop"
        component={HomeScreen}
        options={{
          tabBarLabel: ' ',
          
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),

          title: <MaterialCommunityIcons name="bicycle-basket" size={24} color="black" />,
          headerTitleAlign: 'center',
          headerLeft: ({ onpressed }) => (
            <TouchableOpacity onpressed={onpressed} style={{ marginLeft: 15 }}>

              <Entypo name="menu" size={24} color='black' />

            </TouchableOpacity>
          ),
          headerRight: ({ onpressed }) => (
            <TouchableOpacity onpressed={onpressed}
              style={{
                marginRight: 15,
                display: 'flex',
                flexDirection: 'row'
              }}>

              <EvilIcons name="search" size={24} color="black" style={{ paddingRight: 10 }} />

              <Ionicons name="notifications-outline" size={24} color="black" />

            </TouchableOpacity>


          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="basket" size={size} color={color} />
          ),

          title: <Text>Cart</Text>
            
          ,
          headerTitleAlign: 'center',
        }}
      />

    </Tab.Navigator>
    </NavigationContainer>
  );
  // return (
  //   <View style={styles.container}>
  //     <Text></Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
