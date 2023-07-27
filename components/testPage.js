import React from 'react';
import {View, Text, StyleSheet, Image, Linking, FlatList, Button, Platform, Pressable, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class TestPage extends React.Component {

    render() {

        return <LinearGradient
        pointerEvents="box-none"
        colors={['#2b6ef2', '#103276']}
        style={styles.background}
        //style={[styles.background, {width: this.state.wWidth, height: this.state.wHeight}]}
        end = {[1, 0]}  
    >

        <ScrollView showsVerticalScrollIndicator ={false} contentOffset={{ x: 0, y: 0 }}>
                    <View style={styles.pageContainer}>
                        <React.Fragment>
                            <Text selectable={true}>Hello Test</Text>
                        </React.Fragment>
                    </View>
                </ScrollView>
    </LinearGradient>   

        }
    
    }
    

const styles = StyleSheet.create({
    //Full container
    container: {
        flex: 1,
    },
    //Image box
    captionBox: {
        backgroundColor: '#ffffff',
        width: 800,
        height: 600,
        //paddingBottom: 18,
        alignSelf: "center",
        borderRadius: 20,
    },
    //Gradient Background
    background: {
        flex:1,
    },
    smallText: {
        //flex: 1,
        fontSize: 18,
        //numberOfLines: 5,
        //adjustFontSizeToFit: true,
        color: "#F4F4F4",
        fontWeight: "standard",
        textAlign: 'justify'
    },
    captionText: {
        //flex: 1,
        fontSize: 18,
        //numberOfLines: 5,
        //adjustFontSizeToFit: true,
        color: "#000",
        fontWeight: "standard",
        textAlign: 'center'
    },
    linkText: {
        //flex: 1,
        fontSize: 22,
        //numberOfLines: 5,
        //adjustFontSizeToFit: true,
        color: "#88B3FF",
        fontWeight: "bold",
        textDecorationLine: "underline",
        //borderRadius: 15,
        //backgroundColor: "white",
        //borderWidth: 8,
        //borderColor: "white"
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
    invisText: {
        //flex: 1,
        fontSize: 22,
        //numberOfLines: 1,
        //adjustFontSizeToFit: true,
        color: "#000",
        fontWeight: "bold",
        //textAlign: 'justify',
        
    },
    boldText: {
        //flex: 1,
        fontSize: 50,
        color: "#ffffff",
        fontWeight: "bold",
        alignSelf: 'center'
    },
    pageContainerTop: {
        flex: .1,
        //flexDirection: 'row',
    },
    //Container below nav bar
    pageContainer: {
        flex: 1,
        //flexDirection: 'row',
        marginLeft: '5%',
        marginRight: '5%',
    },
    imageLogo: {
        flex: 1,
        //width: 600,
        //height: 500,
        borderRadius: 20,
        
    },
    imageTextParent: {
        //flex: 1,
        flexDirection: 'row',

    },
    imageTextParentColumn: {
        //flex: 1,
        flexDirection: 'column',

    },
    alignRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }

      
})
