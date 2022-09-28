import React from 'react';
import {View, Text, StyleSheet, Image, Button, Platform} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TextPage from "../../../components/textPage.js";
import { ImageData } from './imageData.js';


export default class Zoom extends React.Component {

    static path = "projects/imageEncoder";

    render() {
    
        return <View style={styles.container}>
            
            <TextPage pageData={ImageData}></TextPage>

        </View>

    }
    

}

const styles = StyleSheet.create({
    //Full container
    container: {
        flex: 1,
    },

      
})

