// MainPage screen

import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions, Button, Platform} from 'react-native';
import NavigationBar from "../components/navigationbar.js";
import NavStyle from "../styles/navStyle";
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import TextPage from "../components/textPage.js";
import { MainData } from './mainData.js';

export default class MainPage extends React.Component {

    static path = "home";

    state = {  
        //Initial width and height states
        wHeight: Dimensions.get('window').height,
        wWidth: Dimensions.get('window').width
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
    };

    //Function to scale text/images based on window size
    scaleSize (size) {
        return (this.state.wWidth)/2543 * size;
    }
    //fontSize: this.scaleSize(50)

    
    render() {
        
        return <View style={styles.container}>
            
            <View style={NavStyle.navBarParent}>
                <NavigationBar navigateTo={this.navigateTo} currentPage='MainPage'/>
            </View>
            
            
            <TextPage pageData={MainData}></TextPage>


        </View>
    }
}


const styles = StyleSheet.create({
    //Full container
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    //Container below nav bar
    pageContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    //Top page space
    pageContainerTop: {
        flex: .2,
        flexDirection: 'row',
    },
    imageLogo: {
        width: 10,
        height: 10,
        borderRadius: 30
    },
    boldText: {
        //flex: 1,
        fontSize: 50,
        color: "#ffffff",
        fontWeight: "bold"  
    },
    smallText: {
        //flex: 1,
        //fontSize: 30,
        //numberOfLines: 5,
        adjustFontSizeToFit: true,
        color: "#ffffff",
        fontWeight: "standard",
        textAlign: 'justify'
    },
    viewLeftContainer: {
        flex: 1,
        marginLeft: '10%',
        marginRight: '10%'
    },
    viewRightContainer: {
        flex: .6,
        //marginLeft: '10%',
    },
    //Gradient Background
    background: {
        flex: 1,
    },

      
})