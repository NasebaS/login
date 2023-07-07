import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import QRCodeScreen from './QRCodeScreen';
import Scan from './Scan'

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="QRCodeScreen" component={QRCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
