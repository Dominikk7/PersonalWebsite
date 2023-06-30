import React from 'react';
import {View, Text, StyleSheet, Image, Button, Platform} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TextPage from "../../../components/textPage.js";
import { RenderingData } from './renderingData.js';
import { WebView } from 'react-native-web-webview';

export default class Rendering extends React.Component {

    static path = "projects/rendering";

    render() {
    
        return <View style={styles.container}>
        
            <TextPage pageData={RenderingData}></TextPage>

        </View>

    }
    

}

const styles = StyleSheet.create({
    //Full container
    container: {
        flex: 1,
    },

      
})

