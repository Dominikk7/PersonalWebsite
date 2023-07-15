import React from 'react';
import {View, Text, StyleSheet, Image, Button, Platform} from 'react-native';

//import Cover from '../assets/2_4.jpg';
import Cover from '../assets/test10.jpg';


export const MainData = [
    {
        title: "",

    },
    {
        type: "imageBlockCaptionless",
        image: Cover,
        width: 400,
        height: 550,
        caption: <>
        test</>,
        title: <>  
        {'\n\n'}Hello, I am Dominik.</>,
        titleSize: 30,
        textSize: 22,
        text: <>
        I am currently studying Computer Engineering at the University of Florida. 
                            I am always coming up with ideas and working on projects to learn about different technologies, and applying 
                            them to solve problems. My passions are robotics, computers, programming, and crypto, and my
                            favorite outdoor activity is mountain biking. At UF I am a part of the Polish Student Association, ACM, GAITOR Club
                            and the Machine Intelligence Lab.{'\n\n'}My goal is to work on projects that I enjoy in a team environment. I value
                            other’s skills as much as my own, and I know with the right team, there are no limits to what can be 
                            accomplished. I hope to work on projects that require developing new solutions to a problem or automating
                            and improving an existing one. I also want to continue to work on my own projects because I like the challenge
                            of creating something by myself and bringing my ideas to life.
        {'\n\n'}</>,
    },

];