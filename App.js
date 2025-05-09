import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyle } from './constant/styles';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyle.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyle.colors.primary500 },
        tabBarActiveTintColor: GlobalStyle.colors.accent500,
      }}
    >
      <BottomTabs.Screen 
        name='RecentExpenses' 
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="hourglass" color={color} size={size} />
          )
        }}
      />
      <BottomTabs.Screen 
        name='AllExpenses' 
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="calendar" color={color} size={size} />
          )
        }}
      />
    </BottomTabs.Navigator>
  );
}


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='ExpensesOverview' 
            component={ExpensesOverview} 
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name='ManageExpense' 
            component={ManageExpenses}

          />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}
