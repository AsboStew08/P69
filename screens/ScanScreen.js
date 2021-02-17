import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';



export default class ScanScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'
        }
    }
}
<View>
<TouchableOpacity
onPress={this.getCameraPermission}
style = {styles.scanButton}
title = "Bar Code Scanner">
<Text style={styles.buttonText}>Scan QR Code</Text>
</TouchableOpacity>
</View>


if(buttonState === clicked && hasCameraPermissions){
    return(
        <BarCodeScanner
        onBarCodeScanned ={scanned ? undefined: this.handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        
        />
    );
}

else if(buttonState===normal){
    return(
        <View style = {styles.container}>
            <Text style = {styles.displayText}>{  hasCameraPermissions ===true ? this.state.scannedData:"Request Camera Permission"}
            </Text>
              
        <TouchableOpacity 
         onPress={this.getCameraPermission}
         style={styles.button}
         >
             <Text style = {styles.buttonText}>Scan QR Code</Text>
         </TouchableOpacity>
           
                </View>
    )
}