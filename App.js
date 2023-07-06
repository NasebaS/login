import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';


const App = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    
    Alert.alert('Successfully logged in');
  };

  return (
    <LinearGradient
      colors={['#E70E79', '#5A36CE']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.container}
    >
      <View style={styles.container}>
      <Image
        source={require('D:/Naseba/login/android/assets/images.jpg')}
        style={{ width: 100, height: 100,marginBottom:20 }}
      />
       <Text style={styles.title}>MobileApp</Text>
       <View style={styles.viewinput}>
       <Icon name="user" size={30} color="#fff" />

       <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUserName(text)}
        />
       </View>
        <View style={styles.viewinput}>
        <Icon name="user" size={30} color="#fff" />        
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.checkbox, rememberMe && styles.checkboxChecked]}
            onPress={() => setRememberMe(!rememberMe)}
          />
          <Text>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.link}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          {/* <LinearTextGradient style={{ fontWeight: "bold", fontSize: 72 }}
  locations={[0, 1]}
  colors={["red", "blue"]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}> */}
    <Text style={styles.gradientText}>Login</Text>
{/* </LinearTextGradient> */}
          </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Not a member?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.text, styles.link]}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  input: {
    width: 250,
    height: 40,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 14,
    padding: 8,
    backgroundColor: 'transparent',
    color: 'white',
    borderColor: 'white',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  link: {
    textDecorationLine: 'underline',
    color: 'white',
  },
  button: {
    width: 250,
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 12,
    alignItems: 'center',
    marginTop: 16,
    color:'blue'
  },
  gradientText: {
    fontWeight: 'bold',
    fontSize: 16,
    overflow:'hidden'
  },
  text: {
    color: 'black',
  },
 
});

export default App;
