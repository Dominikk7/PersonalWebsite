// MainPage screen

import React, { Suspense, useRef, useState } from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions, Button, Platform} from 'react-native';
import NavigationBar from "../components/navigationbar.js";
import NavStyle from "../styles/navStyle";
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, ActivityIndicator } from 'react-native';
import TextPage from "../components/textPage.js";
import { MainData } from './mainData.js';
import publicIP from 'react-native-public-ip';

import Robot3d from "./Robot3d.js";

  function Spinner() {
    
    const Spinner = () => <div className="loader"></div>;

    return (
    <div className="pos-center">
        <Spinner />
    </div>
    )
  }

export default class MainPage extends React.Component {

    
  onScreenLoad = () => {
        console.log("Loaded");

    }

    static path = "test";

    state = {  
        //Initial width and height states
        wHeight: Dimensions.get('window').height,
        wWidth: Dimensions.get('window').width,

    }  
    
    //Universal Navigation Function
    navigateTo = (x) => {
        //Check if is already on that page
        if(x != this.props.navigation.state.routeName){
            this.props.navigation.navigate(x);
        }
      };

    //Function to keep track of window width/height
    componentDidMount() {
        Dimensions.addEventListener("change", (handler) => 
        {this.setState({wHeight: handler.window.height}); 
        this.setState({wWidth: handler.window.width});})  
        console.log("Loaded2");              
    };

    //Function to scale text/images based on window size
    scaleSize (size) {
        return (this.state.wWidth)/2543 * size;
    }

    render() {

      
      return (       
        <Robot3d></Robot3d>
      )
    }
}


const styles = StyleSheet.create({
    centered: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }
      
})