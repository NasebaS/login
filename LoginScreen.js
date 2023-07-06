// import React,{useState} from 'react';
// import {
//   Alert,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//    View,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import ForgotPassword from './ForgotPassword';
// import CreateAccount from './CreateAccount';
// import Home from './Home';
// // import AsyncStorage from '@react-native-community/async-storage';

// const LoginScreen=({navigation})=> {
//  const [username,setUserName]=useState('')
//  const [password,setPassword]=useState('')
//  const [rememberMe,setRememberMe]=useState(false)

//  const handleLogin = () => {
//   if(username&&password){
//     fetch(api+"userlogin", {
//       method: "POST",
//       headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//           "Username": username,
//           "Password": password
//       })
//   })
//       .then(res => res.json())
//       .then(async data => {
//             setUserName(null);
//             setPassword(null);
//           // await AsyncStorage.setItem('user_name', data.Username.toString());
//           // await AsyncStorage.setItem('user_email', data.Password.toString());
//           navigation.navigate('Home');
//         })
//     navigation.navigate('Home',Home)
//   }
//   else{
//     Alert.alert('Fill all details')
//   }
   
// };


//   return (
//     <LinearGradient
//     colors={['#5A36CE', '#E70E79']}
//     start={{ x: 0, y: 0.5 }}
//     end={{ x: 1, y: 0.5 }}
//     style={styles.container}
//   >
//         <View style={styles.container}>
//           <Text>MobileApp</Text>
//           <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={username}
//         onChangeText={text => setUserName(text)}
//       />
      
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={text => setPassword(text)}
//       />

// <View style={styles.checkboxContainer}>
//         <TouchableOpacity
//           style={[styles.checkbox, rememberMe && styles.checkboxChecked]}
//           onPress={() => setRememberMe(!rememberMe)}
//         />
//         <Text>Remember me</Text>
//       </View>
//       <TouchableOpacity  onPress={() => navigation.navigate('Forgot Password',ForgotPassword)}>
//         <Text style={styles.link}>Forgot password?</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Create An Account',CreateAccount)}>
//         <Text style={styles.text}>Not a member? </Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Create An Account',CreateAccount)}>
//         <Text style={[styles.text, styles.link]}>Create Account</Text>
//       </TouchableOpacity>
//       </View>
//      </LinearGradient>
     
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//  flex:1,
//  justifyContent:'center',
//  alignContent:'center',
//  padding: 16,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     marginBottom: 16,
//     borderWidth: 1,
//     borderRadius: 4,
//     padding: 8,
//     backgroundColor: 'transparent',
//   color: 'white',
//   },
//   checkboxContainer:{
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   checkbox:{
//     width: 20,
//     height: 20,
//     borderRadius: 4,
//     borderWidth: 1,
//     marginRight: 8,
//   },
//   checkboxChecked:{
//     backgroundColor: 'blue',
//     borderColor: 'blue',
//   },
//   checkboxText: {
//     color: 'white',
//   },
//   link:{
//     textDecorationLine: 'underline',
//   },
//   button:{
//     width: '100%',
//     backgroundColor: 'blue', 
//     borderRadius: 4,
//     padding: 12,
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   buttonText:{
//     color: 'white', 
//     fontWeight: 'bold',
//   },
//   text:{
//     color: 'black',
//   },

// });

// export default LoginScreen;
