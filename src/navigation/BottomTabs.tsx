/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import { Colors } from '../utils/colors';
import { SpacingH } from '../utils/size';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs: React.FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            barStyle={{ backgroundColor: Colors.SOFT_WHITE, marginBottom: -SpacingH.s4 }}>
            <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: '', tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={24} /> }} />
            <Tab.Screen name="X" component={Home} options={{ tabBarLabel: '', tabBarIcon: ({ color }) => <MaterialCommunityIcons name="book" color={color} size={24} /> }} />
            <Tab.Screen name="Y" component={Home} options={{ tabBarLabel: '', tabBarIcon: ({ color }) => <MaterialCommunityIcons name="heart" color={color} size={24} /> }} />
            <Tab.Screen name="Z" component={Home} options={{ tabBarLabel: '', tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" color={color} size={24} /> }} />
        </Tab.Navigator>
    );
};

export default BottomTabs;
