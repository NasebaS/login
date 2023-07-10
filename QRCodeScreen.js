// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import QRCodeScanner from 'react-native-qrcode-scanner';

// const QRCodeScreen = () => {
//   return (
//     <QRCodeScanner
//         onRead={({data})=>alert(data)}
//         flashMode={RNCamera.Constants.FlashMode.torch}
        
//       />
//   )
// }

// export default QRCodeScreen

// const styles = StyleSheet.create({})

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';

const QRCodeScreen = () => {
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    startScanning();
  }, []);

  const startScanning = () => {
    setScanning(true);
  };

  const handleBarCodeRead = (event) => {
    if (!scanning) {
      return;
    }
    setScanning(false);

    // Access the scanned data from event.data
    const scannedData = event.data;
    Alert.alert('Scanned QR Code', scannedData);
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        onBarCodeRead={handleBarCodeRead}
        captureAudio={false}
      />
      <TouchableOpacity style={styles.button} onPress={startScanning}>
        <Text style={styles.buttonText}>Start Scanning</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '80%',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default QRCodeScreen;
