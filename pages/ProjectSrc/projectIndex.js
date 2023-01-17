import React from 'react';
import {View, Text, StyleSheet, Image, Button, Platform} from 'react-native';

import Img1 from '../ProjectSrc/Crypto/cover2.jpg';
import Img2 from '../ProjectSrc/ZoomSniper/zs2.png';
import Img3 from '../ProjectSrc/Rendering/LFA_small.png';
import Img4 from '../ProjectSrc/ImageEncoder/3.png';

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
        image: Img3,
        path: "Rendering",
    },
    {
        title: "Image Steganography",
        image: Img4,
        path: "Image",
    },
    {
        title: "Networks",
        image: Placeholder,
        path: "projects/path2",
    },
    {
        title: "PC Building",
        image: Placeholder,
        path: "projects/path2",
    },
    {
        title: "FTC Robotics",
        image: Placeholder,
        path: "projects/path2",
    },
    {
        title: "Web Scraping",
        image: Placeholder,
        path: "projects/path2",
    },
    {
        title: "FTC Robotics",
        image: Placeholder,
        path: "projects/path2",
    },
    {
        title: "Coinbase Exchange Java Connector",
        image: Placeholder,
        path: "projects/path2",
    },


];