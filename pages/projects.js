//Project screen

import React, { useEffect, useRef } from 'react';
import {View, Text, StyleSheet, Image, Button, Platform} from 'react-native';
import NavigationBar from "../components/navigationbar.js";
import ProjectTile from "../components/projectTile.js";
import NavStyle from "../styles/navStyle";
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, ScrollView  } from 'react-native';

import { ProjectIndex } from '../pages/ProjectSrc/projectIndex.js';

const isWeb = Platform.OS === 'web';

export default class Projects extends React.Component {

    //Override scrolling behavior
    scrollViewRef = React.createRef();
    componentDidMount() {
      window.addEventListener('popstate', this.handleNavigation);
    } 
    componentWillUnmount() {
      window.removeEventListener('popstate', this.handleNavigation);
    } 
    handleNavigation = () => {
      if (this.scrollViewRef.current) {
        this.scrollViewRef.current.scrollTo({ y: 0, animated: false });
      }
    };

    static path = "projects";

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
                <NavigationBar navigateTo={this.navigateTo} currentPage='Projects'/>
            </View>

            <LinearGradient
                colors={['#2b6ef2', '#103276']}
                style={styles.background}
                end = {[1, 1]}>               
                
                <View style={styles.pageContainerTop}></View>
                <Text style={styles.boldText}>Projects</Text>
                <View style={styles.pageContainer}>
                    
                    {ProjectIndex.map((project, index) => {
                        return(
                            <ProjectTile style={styles.tileParent} title={project.title} path={project.path} image={project.image} navigateTo={this.navigateTo} rotation={project.rotation}></ProjectTile> 
                        )
                    })}
                 
                </View>

            </LinearGradient>

        </View>
    }
}

const styles = StyleSheet.create({
    //Full container
    container: {
        flex: 1,
        //backgroundColor: 'white',
    },
    tileParent: {
        flex: 1,
        padding: 0,
        
    },
    //Container below nav bar
    pageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: "wrap",
        //alignItems: 'flex-start',
    },
    //Top page space
    pageContainerTop: {
        flex: .01,
        //flexDirection: 'row',
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
        fontWeight: "bold",
        alignSelf: 'center'
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