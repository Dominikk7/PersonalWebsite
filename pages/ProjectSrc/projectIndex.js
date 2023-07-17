import React from 'react';
import {View, Text, StyleSheet, Image, Button, Platform} from 'react-native';

import Img1 from '../ProjectSrc/Crypto/cover2.JPG';
import Img2 from '../ProjectSrc/ZoomSniper/newCover.png';
import Img3 from '../ProjectSrc/Rendering/LFA_small.png';
import Img4 from '../ProjectSrc/ImageEncoder/cover.png';

import Gif3d from '../ProjectSrc/Rendering/robot.webp';

import Placeholder from '../ProjectSrc/placeholder.png';



export const ProjectIndex = [
    {
        title: "Cryptomining",
        image: Img1,
        path: 'Crypto',
    },
    {
        title: "Zoom Sniper",
        image: Img2,
        path: "Zoom",
    },
    {
        title: "3D Modelling and Rendering",
        image: Gif3d, //Img3
        //rotation: true,
        path: "Rendering",
    },
    {
        title: "Image Steganography",
        image: Img4,
        path: "Image",
    },



];