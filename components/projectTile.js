import React from 'react';
import {View, Text, StyleSheet, Image, Button, Platform, Pressable, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class ProjectTile extends React.Component {

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
                    <Image source={this.props.image} style={styles.imageLogo}></Image>
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
        width: 600,
        height: 500,
        alignSelf: "center",
        borderRadius: 30,
    },
    //Gradient Background
    background: {
        flex: 1,
        borderRadius: 30,
    },


      
})