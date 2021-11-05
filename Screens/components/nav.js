import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from '../cart';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import HomeScreen from '../home'
import Login from '../login'

const Tab = createBottomTabNavigator();

export default function MyTabs() {

  return (

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
        name=" "
        component={Login}
        options={{

          // tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size }) => (
            
            <Ionicons name="mic" size={size} color={color} 
            style ={{backgroundColor: 'black', 
            padding: 10,
            borderRadius: 50,
            marginBottom: 10,
          }}/>

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
  );
}