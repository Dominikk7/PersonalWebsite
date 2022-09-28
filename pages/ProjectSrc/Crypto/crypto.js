import React from 'react';
import {View, Text, StyleSheet, Image, Button, Platform} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TextPage from "../../../components/textPage.js";
import { CryptoData } from './cryptoData.js';


export default class Crypto extends React.Component {

    static path = "projects/cryptomining";

    render() {
    
        return <View style={styles.container}>
            
            <TextPage pageData={CryptoData}></TextPage>

        </View>

    }
    

}

const styles = StyleSheet.create({
    //Full container
    container: {
        flex: 1,
    },

      
})

