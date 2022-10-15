import React from 'react';
import {View, Text, StyleSheet, Image, Linking, FlatList, Button, Platform} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class TestPage extends React.Component {



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

        return <LinearGradient
            
                    colors={['#2b6ef2', '#103276']}
                    style={styles.background}
                    //style={[styles.background, {width: this.state.wWidth, height: this.state.wHeight}]}
                    end = {[1, 0]}  
                >
                    <View style={styles.pageContainerTop}></View>
                    <Text style={styles.boldText}>{this.props.pageData[0].title}</Text>
                    <View style={styles.pageContainerTop}></View>
                    
                    
                    <ScrollView showsVerticalScrollIndicator ={false}>
                    
                    
                    
                    <View style={styles.pageContainer}>
                    

                        {this.props.pageData.map((data, index) => {
                            if(index > 0){
                                //Standard text block
                                if(data.type == "block"){
                                    return (
                                        <React.Fragment key={index}>
                                            <Text style={styles.sectionText}>{data.title}</Text>
                                            <Text style={styles.smallText}>{data.text}</Text>
                                        </React.Fragment>
                                    )
                                }
                                //Single image
                                else if(data.type == "image"){
                                    return(
                                        <React.Fragment key={index}>
                                            <View style={[styles.captionBox, {width: this.scaleImage(data.width, data.height).scaledWidth}, {height: this.scaleImage(data.width, data.height).scaledHeight}]}>
                                                <Image source={data.image} style={styles.imageLogo}></Image>
                                                <Text style={styles.captionText}>{data.caption}</Text>
                                            </View>
                                            <Text style={styles.smallText}>{'\n'}</Text>

                                        </React.Fragment> 
                                    )                               
                                    
                                }
                                //Double image
                                else if(data.type == "doubleImage"){
                                    return(
                                        <React.Fragment key={index}>
                                            <Text style={styles.smallText}>{'\n'}</Text>
                                            <View style={[data.width*2 < this.state.wWidth ? styles.alignRow : styles.imageTextParentColumn]}>
                                            <View>
                                                <View style={[styles.captionBox, {width: this.scaleImage(data.width, data.height).scaledWidth}, {height: this.scaleImage(data.width, data.height).scaledHeight}]}>
                                                    <Image source={data.image} style={styles.imageLogo}></Image>
                                                    <Text style={styles.captionText}>{data.caption}</Text>
                                                </View>
                                                <Text style={styles.smallText}>{'\n'}</Text>
                                            </View>
                                            <View>
                                                <View style={[styles.captionBox, {width: this.scaleImage(data.width, data.height).scaledWidth}, {height: this.scaleImage(data.width, data.height).scaledHeight}]}>
                                                    <Image source={data.image2} style={styles.imageLogo}></Image>
                                                    <Text style={styles.captionText}>{data.caption2}</Text>
                                                </View>
                                                <Text style={styles.smallText}>{'\n'}</Text>
                                            </View>
                                            </View>
                                        </React.Fragment> 
                                        ) 
                                }
                                //Triple image
                                else if(data.type == "tripleImage"){
                                    return(
                                        <React.Fragment key={index}>
                                            <Text style={styles.smallText}>{'\n'}</Text>
                                            <View style={[data.width*3 < this.state.wWidth ? styles.alignRow : styles.imageTextParentColumn]}>
                                            <View>
                                                <View style={[styles.captionBox, {width: this.scaleImage(data.width, data.height).scaledWidth}, {height: this.scaleImage(data.width, data.height).scaledHeight}]}>
                                                    <Image source={data.image} style={styles.imageLogo}></Image>
                                                    <Text style={styles.captionText}>{data.caption}</Text>
                                                </View>
                                                <Text style={styles.smallText}>{'\n'}</Text>
                                            </View>
                                            <View>
                                                <View style={[styles.captionBox, {width: this.scaleImage(data.width, data.height).scaledWidth}, {height: this.scaleImage(data.width, data.height).scaledHeight}]}>
                                                    <Image source={data.image2} style={styles.imageLogo}></Image>
                                                    <Text style={styles.captionText}>{data.caption2}</Text>
                                                </View>
                                                <Text style={styles.smallText}>{'\n'}</Text>
                                            </View>
                                            <View>
                                                <View style={[styles.captionBox, {width: this.scaleImage(data.width, data.height).scaledWidth}, {height: this.scaleImage(data.width, data.height).scaledHeight}]}>
                                                    <Image source={data.image3} style={styles.imageLogo}></Image>
                                                    <Text style={styles.captionText}>{data.caption3}</Text>
                                                </View>
                                                <Text style={styles.smallText}>{'\n'}</Text>
                                            </View>
                                            </View>
                                        </React.Fragment> 
                                        ) 
                                }
                                //Text with image
                                else if(data.type == "imageBlock"){
                                    //Move picture down
                                    if(data.width*2 > this.state.wWidth){
                                        return(
                                            <React.Fragment key={index}>
                                            <View style={styles.imageTextParentColumn}>
                                                <Text style={styles.sectionText}>{data.title}</Text>
                                                <Text style={styles.smallText}>{data.text}</Text>
                                                <View style={[styles.captionBox, {width: this.scaleImage(data.width, data.height).scaledWidth}, {height: this.scaleImage(data.width, data.height).scaledHeight}]}>
                                                        <Image source={data.image} style={styles.imageLogo}></Image>
                                                        <Text style={styles.captionText}>{data.caption}</Text>
                                                </View>
                                                
                                            </View>
                                        </React.Fragment> 
                                        )
                                    }
                                    else{
                                        return(
                                            <React.Fragment key={index}>
                                                <View style={styles.imageTextParent}>
                                                    <View style={[{flex: 1}, {minWidth: 200}]}>
                                                        <Text style={styles.sectionText}>{data.title}</Text>
                                                        <Text style={styles.smallText}>{data.text}</Text>
                                                    </View>
                                                    <View style={[{flex: .1}, {marginLeft: this.scaleImage(data.width, data.height).scaledWidth/2}, {marginRight: this.scaleImage(data.width, data.height).scaledWidth/2}]}>
                                                        <Text style={styles.invisText}>{'\n\n'}</Text>
                                                        <View style={[styles.captionBox, {width: this.scaleImage(data.width, data.height).scaledWidth}, {height: this.scaleImage(data.width, data.height).scaledHeight}]}>
                                                            <Image source={data.image} style={styles.imageLogo}></Image>
                                                            <Text style={styles.captionText}>{data.caption}</Text>
                                                        </View>
                                                    </View>
                                                    
                                                </View>
                                            </React.Fragment> 
                                        )     
                                    }
                                    
                                }
                                //Text with image, no caption
                                else if(data.type == "imageBlockCaptionless"){
                                    //Move picture down
                                    if(data.width*2 > this.state.wWidth){
                                        return(
                                            <React.Fragment key={index}>
                                            <View style={styles.imageTextParentColumn}>
                                                <View style={[styles.captionBox, {width: this.scaleImage(data.width, data.height).scaledWidth}, {height: this.scaleImage(data.width, data.height).scaledHeight}]}>
                                                        <Image source={data.image} style={styles.imageLogo}></Image>
                                                </View>
                                                <Text style={[styles.sectionText, {fontSize: data.titleSize}]}>{data.title}</Text>
                                                <Text style={[styles.smallText, {fontSize: data.textSize}]}>{data.text}</Text>
                                                
                                                
                                            </View>
                                        </React.Fragment> 
                                        )
                                    }
                                    else{
                                        return(
                                            <React.Fragment key={index}>
                                                <View style={styles.imageTextParent}>
                                                    <View style={[{flex: 1}, {minWidth: 200}]}>
                                                        <Text style={[styles.sectionText, {fontSize: data.titleSize}]}>{data.title}</Text>
                                                        <Text style={[styles.smallText, {fontSize: data.textSize}]}>{data.text}</Text>
                                                    </View>
                                                    <View style={[{flex: .1}, {marginLeft: this.scaleImage(data.width, data.height).scaledWidth/2}, {marginRight: this.scaleImage(data.width, data.height).scaledWidth/2}]}>
                                                        <Text style={styles.invisText}>{'\n\n'}</Text>
                                                        <View style={[styles.captionBox, {width: this.scaleImage(data.width, data.height).scaledWidth}, {height: this.scaleImage(data.width, data.height).scaledHeight}]}>
                                                            <Image source={data.image} style={styles.imageLogo}></Image>
                                                        </View>
                                                    </View>
                                                    
                                                </View>
                                            </React.Fragment> 
                                        )     
                                    }
                                    
                                }
                                //Link
                                else if(data.type == "link"){
                                    return(
                                        <React.Fragment key={index}>
                                            <View style={{flexDirection:'row'}}>
                                                <Text style={styles.sectionText}
                                                    onPress={() => Linking.openURL(data.url)}>
                                                    {data.preText}
                                                </Text>
                                                <Text style={styles.linkText}
                                                    onPress={() => Linking.openURL(data.url)}>
                                                    {data.linkText}
                                                </Text>
                                            </View>
                                            
                                        </React.Fragment> 
                                        ) 
                                }
                               
                            }
                        })}
                    </View>
                    
                    </ScrollView>
                    
                    {/**/}
                    
                    
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
