import React from 'react';
import {View, Text, StyleSheet, Image, Button, Platform, Pressable, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Robot3d from "../pages/Robot3d";

export default class ProjectTile extends React.Component {
    
    state = {  
        //Initial width and height states
        wHeight: Dimensions.get('window').height,
        wWidth: Dimensions.get('window').width
    }  

    //Function to keep track of window width/height
    componentDidMount() {
        Dimensions.addEventListener("change", (handler) => 
        {this.setState({wHeight: handler.window.height}); 
        this.setState({wWidth: handler.window.width});})   
    };

    

    scaleImage(width, height) {
        var imgDimension = {
            scaledWidth: width,
            scaledHeight: height,
        }
        var scaleFactor = width/height;

        //If large screen size, scale up images
        if (this.state.wWidth > 1600){
            imgDimension.scaledWidth = (width * this.state.wWidth)/1600;
            imgDimension.scaledHeight = imgDimension.scaledWidth/scaleFactor;;
        }

        
        if (width > this.state.wWidth){
            imgDimension.scaledWidth = this.state.wWidth;
            imgDimension.scaledHeight = this.state.wWidth/scaleFactor;
            console.log(imgDimension.scaledWidth);
        }
        
        return imgDimension;
    }

    
    render() {
        return <View style={styles.container}>
            
            <LinearGradient
                colors={['#ffffff', '#ffffff']}
                style={styles.background}
                end = {[1, 0]}>  
                <TouchableOpacity 
                    style={styles.tile}
                    onPress={() => this.props.navigateTo(this.props.path)}
                    >
                    {true && <Image source={this.props.image} 
                    style={[styles.imageLogo, {width: this.scaleImage(600, 500).scaledWidth}, {height: this.scaleImage(600, 500).scaledHeight}]}>
                    </Image>}
                    {this.props.rotation == true && <Robot3d></Robot3d>}
                    <Text style={styles.tileText}>{this.props.title}</Text>
                  
            </TouchableOpacity>             

            </LinearGradient>
            
            
        </View>
    }
}

const styles = StyleSheet.create({
    //Full container
    container: {
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '5%',
        //flexBasis: '33%'
        //flex: 1,
        
        //backgroundColor: 'white',
    },
    tile: {
        elevation: 8,
        backgroundColor: "transparent", //5700FF 256EFF
        borderRadius: 30,
        //paddingVertical: 50,
        //paddingHorizontal: 12
    },
    tileText: {
        fontSize: 30,
        color: "#000",
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: '5%',
        marginBottom: '5%'
        //textTransform: "uppercase"   
    },
    imageLogo: {
        //width: 600,
        //height: 500,
        alignSelf: "center",
        borderRadius: 30,
    },
    //Gradient Background
    background: {
        flex: 1,
        borderRadius: 30,
    },


      
})