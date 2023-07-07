import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QRCodeScreen = () => {
  return (
    <QRCodeScanner
        onRead={({data})=>alert(data)}
        flashMode={RNCamera.Constants.FlashMode.torch}
        
      />
  )
}

export default QRCodeScreen

const styles = StyleSheet.create({})