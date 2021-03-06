import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator(); // createStackNavigator is a function that creates a stack navigator

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor:'#fff',
            contentStyle:{backgroundColor:'3f2f25'},
        }}>
          <Stack.Screen 
          name='MealsCategories' 
          component={CategoriesScreen} 
            options={{
              title: 'All Categories',
            }} />
          <Stack.Screen 
            name='MealsOverview' 
            component={MealsOverviewScreen}/> 
          <Stack.Screen name="Meal Details" component={MealDetailsScreen} options={{
            title: 'Meal Details',
          }}/>  
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
