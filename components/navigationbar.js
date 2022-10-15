// nav bar

import React from 'react';
import {View, Text, StyleSheet, Button, Platform, Pressable, TouchableOpacity } from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import NavStyle from "../styles/navStyle";



export default class NavigationBar extends React.Component {

    render() {
                
        return <View style={NavStyle.navBar}>
            {
                <>
                <View style={styles.viewLeft}></View>
                

                <Text
                    style={styles.nameText}
                
                >Dominik Kapuscinski</Text>

                
                <View style={styles.viewRightText}></View>
                
                
                <TouchableOpacity 
                    style={[this.props.currentPage == "MainPage" ? styles.appButtonContainerSelected : styles.appButtonContainer]}
                    onPress={() => this.props.navigateTo('MainPage')}
                    >
                    <Text style={NavStyle.navBarText}>  Home  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[this.props.currentPage == "Projects" ? styles.appButtonContainerSelected : styles.appButtonContainer]}
                    onPress={() => this.props.navigateTo('Projects')}>
                    <Text style={NavStyle.navBarText}>Projects</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[this.props.currentPage == "Experience" ? styles.appButtonContainerSelected : styles.appButtonContainer]}
                    onPress={() => this.props.navigateTo('Experience')}
                    >
                    <Text style={NavStyle.navBarText}>Experience</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[this.props.currentPage == "Contact" ? styles.appButtonContainerSelected : styles.appButtonContainer]}
                    onPress={() => this.props.navigateTo('Contact')}
                    >
                    <Text style={NavStyle.navBarText}>Contact</Text>
                </TouchableOpacity>
                <View style={styles.viewRight}></View>
                </>

            }
           

        </View>
    }
}
const styles = StyleSheet.create({
    appButtonContainerSelected: {
        elevation: 8,
        backgroundColor: "#256EFF", //5700FF 256EFF
        borderRadius: 0,
        paddingVertical: 50,
        paddingHorizontal: 12
      },
      appButtonContainer: {
        elevation: 8,
        backgroundColor: 'transparent',
        borderRadius: 0,
        paddingVertical: 50,
        paddingHorizontal: 12,
        opacity: 1.0
      },
      textContainer: {
        flex: 1,
      },
      nameText: {
        //flex: 1,
        fontSize: 30,
        color: "#000",
        fontWeight: "bold",
        //minWidth: 200,
        //alignSelf: "center",
        textTransform: "uppercase"  
      },
      viewRight: {
        flex: .2
      },
      viewRightText: {
        flex: 1
      },
      viewLeft: {
        flex: .1
      }
})