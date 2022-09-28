import React from 'react';
import {View, Text, StyleSheet, Image, Button, Platform} from 'react-native';

import Web from '../ZoomSniper/webarchitecture.jpg';
import Cover from '../ImageEncoder/1.png';


export const ImageData = [
    {
        title: "Image Encoder",

    },
    {
        type: "link",
        linkText: "image.dkapps.tk",
        url: "https://image.dkapps.tk",
        preText: "Link to project :  "
    },
    {
        type: "link",
        linkText: "coming soon",
        url: "https://github.com/Dominikk7",
        preText: "Link to GitHub :  "
    },
    {
        type: "block",
        title: <>
        {'\n'}Inspiration
        </>,
        text: <>
        I wanted to create an app that allows users to hide text and messages in pictures and decode them later. When I first heard of steganography, I was very interested. I wanted to try to make an algorithm that hides text in images myself. I was familiar with Windows Form App from my Zoom Sniper project, so it was easy to design the UI for windows. If I was to remake the project, I would make it a web app in React. Web apps are more accessible on various devices and don’t require installation of additional files. 
        {'\n'}</>,
    },
    {
        type: "block",
        title: <>
        {'\n'}Functionality
        </>,
        text: <>
        The app allows users to select a source image, write text, and save the image with the text. Later, users can select an image and decode it.
        {'\n\n'}</>,
    },
    {
        type: "image",
        image: Cover,
        width: 600,
        height: 300,
        caption: <>
        App Screenshot</>
    },
    {
        type: "block",
        title: <>
        {'\n'}Technical Details
        </>,
        text: <>
         The algorithm that I created to store the word data is simple and does not noticeably change the image. First, I take the image and put all the pixels in an array. To put the text in the image, each letter’s ASCII value is set as the blue value for one pixel. Then the image is reconstructed. The result is a subtle change in a line of pixels in the image starting at the upper left side. To decode an image the value of the blue pixels is taken and converted back to characters. The process of looking through all the pixels in the image takes a long time depending on the size. The first improvement I would make is passing values by reference to optimize the time taken to process an image. 
         {'\n'}</>,
    },
    {
        type: "block",
        title: <>
        {'\n'}Web Server
        </>,
        text: <>
          The web server uses the same architecture as my Zoom Sniper project does. It was simple to host another page using XAMPP, add another virtual server in the load balancer and update the DNS records in Cloudflare so the website is accessible through image.dkapps.tk. 
          {'\n\n'}</>,
    },
    {
        type: "image",
        image: Web,
        width: 1000,
        height: 450,
        caption: <>
        Web Architecture</>
    },

    
    
    

];