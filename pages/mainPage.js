// MainPage screen

import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions, Button, Platform} from 'react-native';
import NavigationBar from "../components/navigationbar.js";
import NavStyle from "../styles/navStyle";
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

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


    
    render() {
        
        return <View style={styles.container}>
            
            <View style={NavStyle.navBarParent}>
                <NavigationBar navigateTo={this.navigateTo} currentPage='MainPage'/>
            </View>

            <LinearGradient
                colors={['#2b6ef2', '#103276']}
                style={styles.background}
                end = {[1, 1]}>               
                
                <View style={styles.pageContainerTop}>
                
                </View>

                <View style={styles.pageContainer}>
                    <View style={styles.viewLeftContainer}>                      
                            <Text style={[styles.boldText, {fontSize: this.scaleSize(50)}]}>Hello, I am Dominik.</Text> 
                            <Text style={[styles.smallText, {fontSize: this.scaleSize(30)}]}>{'\n'}I am currently studying Computer Engineering at the University of Florida. 
                            I am always coming up with ideas and working on projects to learn about different technologies, and applying 
                            them to solve problems. My passions are robotics, computers, programming, and crypto, and my
                            favorite outdoor activity is mountain biking. At UF I am a part of the Polish Student Association, ACM, GAITOR Club
                            and the Machine Intelligence Lab.{'\n\n'}My goal is to work on projects that I enjoy in a team environment. I value
                            other’s skills as much as my own, and I know with the right team, there are no limits to what can be 
                            accomplished . I hope to work on projects that require developing new solutions to a problem or automating
                            and improving an existing one. I also want to continue to work on my own projects because I like the challenge
                            of creating something by myself and bringing my ideas to life.
                            </Text>
                    </View>
                    
                    <View style={styles.viewRightContainer}>
                        <Image 
                        source={require('../assets/2_4.jpg')}
                        style={[styles.imageLogo, {width: this.scaleSize(600), height: this.scaleSize(600)}]}
                        onPress={() => console.log('hello') }></Image>

                    </View>

                    
                </View>

                
                

            </LinearGradient>

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
        flex: .25,
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