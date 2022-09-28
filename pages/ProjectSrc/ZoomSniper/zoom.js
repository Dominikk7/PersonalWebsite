import React from 'react';
import {View, Text, StyleSheet, Image, Button, Platform} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TextPage from "../../../components/textPage.js";
import { ZoomData } from './zoomData.js';


export default class Zoom extends React.Component {

    static path = "projects/zoomSniper";

    render() {
    
        return <View style={styles.container}>
            
            <TextPage pageData={ZoomData}></TextPage>

        </View>

    }
    

}

const styles = StyleSheet.create({
    //Full container
    container: {
        flex: 1,
    },

      
})

