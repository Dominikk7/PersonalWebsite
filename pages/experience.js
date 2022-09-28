// Experience screen

import React from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';
import NavigationBar from "../components/navigationbar.js";
import NavStyle from "../styles/navStyle";
import TextPage from "../components/textPage.js";

import { ExperienceData } from './ExperienceSrc/experienceData.js';

const isWeb = Platform.OS === 'web';

export default class Projects extends React.Component {


    //Universal Navigation Function
    navigateTo = (x) => {
        //Check if is already on that page
        if(x != this.props.navigation.state.routeName){
            this.props.navigation.navigate(x);
        }
      };

    static path = "experience";

    render() {
        return <View  style={styles.container}>
            <View style={NavStyle.navBarParent}>
                <NavigationBar navigateTo={this.navigateTo} currentPage='Experience'/>
            </View>

            <TextPage pageData={ExperienceData}></TextPage>
           

        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})