import React from 'react';
import {View, Text, StyleSheet, Image, Button, Platform} from 'react-native';

import Web from '../ZoomSniper/webarchitecture.jpg';
import Cover from '../ImageEncoder/1.png';
import API from '../ImageEncoder/API.png';
import SQL1 from '../ImageEncoder/sql1.png';
import SQL2 from '../ImageEncoder/sql2.png';
import Album from '../ImageEncoder/album.png';
import Album2 from '../ImageEncoder/album2.png';


export const ImageData = [
    {
        title: "Image Encoder",

    },
    {
        type: "link",
        linkText: "photo.sourcehex.com",
        url: "https://photo.sourcehex.com",
        preText: "Link to project :  "
    },
    {
        type: "link",
        linkText: "github.com/Dominikk7/PhotoBomb",
        url: "https://github.com/Dominikk7/PhotoBomb",
        preText: "Link to GitHub : "
    },
    {
        type: "block",
        title: <>
        {'\n'}Inspiration
        </>,
        text: <>
        I wanted to create an app that allows users to hide text and messages in pictures and decode them later. When I first heard of steganography, I was very interested. I wanted to try to make an algorithm that hides text in images myself. I was familiar with Windows Form App from my Zoom Sniper project, so it was easy to design the UI for windows.  
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
        Original Windows Form App Screenshot</>
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
        {'\n'}Web App Project
        </>,
        text: <>
        For my Introduction to Software Engineering class our group of four decided to make a web app for image steganography. The frontend was done using Angular and backend in GoLang. I worked primarily on the backend MySQL database, image storage and API. Additionally, I worked on the frontend image gallery and HTML request to the API. After we finished the project, I made changes to make the app production ready by using an NGINX web server, setting up a reverse proxy to avoid browser CORS errors, setting up Cloudflare, and deploying the app on my Linux server. 
        {'\n\n'}</>,
    },
    {
        type: "block",
        title: <>
        {'\n'}New Functionality
        </>,
        text: <>
        The app supports account creation and login. Each user has their own gallery where they can upload, encode, decode, view, download, and delete images. I learned a lot about software engineering on a team, using GitHub to coordinate work with branches, pull requests, API documentation, and issues. 
        {'\n\n'}</>,
    },
    {
        type: "image",
        image: Album2,
        width: 850,
        height: 420,
        link: 'https://youtu.be/bun86qwzdJM?t=554',
        caption: <>
        Interacting with album (Click to watch)</>
    },
    {
        type: "image",
        image: API,
        width: 600,
        height: 550,
        link: 'https://github.com/Dominikk7/PhotoBomb/blob/main/Sprint4.md',
        caption: <>
        Backend API</>
    },



    
    
    

];