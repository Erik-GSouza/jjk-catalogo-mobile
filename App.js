import { StatusBar } from 'expo-status-bar';
import { PaperProvider, MD3DarkTheme } from 'react-native-paper';

import {
  NavigationContainer,
  DarkTheme
} from '@react-navigation/native';

import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';

import Lista from './src/screens/Lista';
import Formulario from './src/screens/Formulario';

// Cria o navegador em pilha
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <PaperProvider theme={MD3DarkTheme}>

      <StatusBar style="light" />

      <NavigationContainer theme={DarkTheme}>

        <Stack.Navigator
          initialRouteName="Lista"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#222222'
            },
            headerTintColor: '#ffffff'
          }}
        >

          <Stack.Screen
            name="Lista"
            component={Lista}
            options={{ title: 'Catálogo JJK' }}
          />

          <Stack.Screen
            name="Formulario"
            component={Formulario}
            options={{ title: 'Personagem' }}
          />

        </Stack.Navigator>

      </NavigationContainer>

    </PaperProvider>
  );
}