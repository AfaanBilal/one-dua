/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../utils/colors';
import { SpacingH } from '../utils/size';
import Home from '../screens/Home';
import Checklists from '../screens/Checklists';
import Favorites from '../screens/Favorites';

const Tab = createMaterialBottomTabNavigator();

const TabIcon = ({ name, color, focused }: { name: string; color: string; focused: boolean }) => {
    return <MaterialCommunityIcons name={name} color={color} size={focused ? 30 : 22} style={{ marginTop: focused ? -3 : 0 }} />;
};

const BottomTabs: React.FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            shifting={true}
            barStyle={{ backgroundColor: Colors.SOFT_WHITE, marginBottom: -SpacingH.s2 }}>
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color, focused }) => <TabIcon name="home" color={color} focused={focused} /> }} />
            <Tab.Screen name="Checklists" component={Checklists} options={{ tabBarIcon: ({ color, focused }) => <TabIcon name="check-circle" color={color} focused={focused} /> }} />
            <Tab.Screen name="Favorites" component={Favorites} options={{ tabBarIcon: ({ color, focused }) => <TabIcon name="heart" color={color} focused={focused} /> }} />
            <Tab.Screen name="Book" component={Home} options={{ tabBarIcon: ({ color, focused }) => <TabIcon name="book" color={color} focused={focused} /> }} />
        </Tab.Navigator>
    );
};

export default BottomTabs;
