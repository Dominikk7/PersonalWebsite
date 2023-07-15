// contact screen

import React from 'react';
import {View, Text, StyleSheet, Linking, Button, Platform} from 'react-native';
import NavigationBar from "../components/navigationbar.js";
import NavStyle from "../styles/navStyle";
import { LinearGradient } from 'expo-linear-gradient';

import TextPage from "../components/textPage.js";
import { ContactData } from './ContactSrc/contactData.js';


export default class Projects extends React.Component {


    //Universal Navigation Function
    navigateTo = (x) => {
        //Check if is already on that page
        if(x != this.props.navigation.state.routeName){
            this.props.navigation.navigate(x);
        }
      };

    static path = "contact";

    render() {
        return <View style={styles.container}>
            <View style={NavStyle.navBarParent}>
                <NavigationBar navigateTo={this.navigateTo} currentPage='Contact'/>
            </View>

            <LinearGradient
                colors={['#2b6ef2', '#103276']}
                style={styles.background}
                end = {[1, 1]}>
                <View style={styles.pageContainer}>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.sectionText}
                        onPress={() => Linking.openURL("https://github.com/Dominikk7")}>
                        {"\nLink to GitHub : "}  
                    </Text>
                    <Text style={styles.linkText}
                        onPress={() => Linking.openURL("https://github.com/Dominikk7")}>
                        {"\ngithub.com/Dominikk7"}
                    </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.sectionText}
                        onPress={() => Linking.openURL("https://www.linkedin.com/in/dominik-kapuscinski/")}>
                        {"\nLinkedIn : "}  
                    </Text>
                    <Text style={styles.linkText}
                        onPress={() => Linking.openURL("https://www.linkedin.com/in/dominik-kapuscinski/")}>
                        {"\nlinkedin.com/in/dominik-kapuscinski"}
                    </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.sectionText}>
                        {"\nEmail : "}  
                    </Text>
                    <Text style={styles.normalText}>
                        {"\ndominik.kapuscinski3@gmail.com"}
                    </Text>
                    </View>
                </View>     
            

            </LinearGradient>
            
           

        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linkText: {
        //flex: 1,
        fontSize: 22,
        //numberOfLines: 5,
        //adjustFontSizeToFit: true,
        color: "blue",
        fontWeight: "bold",
        textDecorationLine: "underline",
        //textAlign: 'center'
    },
    sectionText: {
        //flex: 1,
        fontSize: 22,
        //numberOfLines: 5,
        //adjustFontSizeToFit: true,
        color: "#ffffff",
        fontWeight: "bold",
        textAlign: 'justify'
    },
    normalText: {
        //flex: 1,
        fontSize: 22,
        //numberOfLines: 5,
        //adjustFontSizeToFit: true,
        color: "#ffffff",
        fontWeight: "normal",
        textAlign: 'justify'
    },
    background: {
        flex:1,
    },
    pageContainer: {
        flex: 1,
        //flexDirection: 'row',
        marginLeft: '5%',
        marginRight: '5%',
    },
})