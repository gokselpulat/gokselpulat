import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Exporting from './assest/components/Home';
import Liked from './assest/components/Liked';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Detail"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Liked')}
      />
        <Button
        title="Input"
        onPress={() => navigation.navigate('fixo')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        go go
      </Text>
    </View>
  );
}

function MakeClean() {
  return(
    <View>
      <Exporting />
    </View>
  )
}

function GoToHome() {
  return(
    <View>
      <Liked />
    </View>
  )
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Homyy" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="fixo" component={MakeClean} />
        <Stack.Screen name="Liked" component={GoToHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
