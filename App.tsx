import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Connection from './src/page/connection';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Maitre from './src/page/Home/maître';
import Choisir from './src/page/Home/choisir';

import Home from './src/page/Home';
// import InscriptionApprenat from './src/page/Home/InscriptionApprenant';
import Accueil from './src/page/Home/Accueil';
import login from './src/page/Home/Login';
import Login from './src/page/Home/Login';
import Signup from './src/page/Home/Signup';
import Tabs from './navigation/Tabs';
import accueil from './navigation/accueil';
import menuscrol from './navigation/menuscrol';
import Python from './src/page/Home/Python';
import Profil from './src/page/Home/profil';
import Php from './src/page/Home/Php';
import AccueilMaitre from './src/page/Home/AccueilMaitre';
import accueilMaitre from './navigationMaitre/AccueilMaitres';
import tabsMaitre from './navigationMaitre/TabsMaitre';
import TabsMaitre from './navigationMaitre/TabsMaitre';
import AccueilMaitres from './navigationMaitre/AccueilMaitres';
import Menuscrol from './navigationMaitre/Menuscrol';
import DrawerNavigation from './navigationMaitre/DrawerNavigation';
import loginmaitre from './src/page/Home/loginmaitre';
import signupmaitre from './src/page/Home/singupmaitre';
import maitrelogsing from './src/page/Home/maitrelogsing';






const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
             
      <Stack.Screen
              name="Maitre"
              component={Maitre}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Choisir"
              component={Choisir}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            /> 
           
             <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: true, headerTitle: 'Login', headerTitleAlign: 'center' }}
            />
             <Stack.Screen
              name="menuscrol"
              component={menuscrol}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Accueil"
              component={Accueil}
              // options={{ headerShown: true }}
            />
             <Stack.Screen
              name="accueil"
              component={accueil}
              // options={{ headerShown: true }}
            />
             <Stack.Screen 
              name="Php"
              component={Php}
              options={{ headerShown: true, headerTitle: 'Python', headerTitleAlign: 'center' }}
            />
             <Stack.Screen
              name="AccueilMaitre"
              component={AccueilMaitre}
                 // options={{ headerShown: true }}

              
            />
              <Stack.Screen
              name="Menuscrol"
              component={Menuscrol}
              options={{ headerShown: false }}
            />
          
             {/* <Stack.Screen
              name="Python"
              component={Python}
              options={{ headerShown: true }}
            /> */}
      
              <Stack.Screen name="Tabs" component={Tabs} />
              <Stack.Screen name="TabsMaitre" component={TabsMaitre} />
             
              <Stack.Screen
              name="loginmaitre"
              component={loginmaitre}
              options={{ headerShown: false }}
            /> 
            
            <Stack.Screen
              name="maitrelogsing"
              component={maitrelogsing}
              options={{ headerShown: false }}
            /> 
<Stack.Screen
              name="singupmaitre"
              component={signupmaitre}
              options={{ headerShown: false }}
            /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
 
});

export default App;

