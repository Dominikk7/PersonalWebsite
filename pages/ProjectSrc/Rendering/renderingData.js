import React from 'react';
import {View, Text, StyleSheet, Image, Button, Platform} from 'react-native';

import Robot1 from '../Rendering/1.jpg';
import Robot2 from '../Rendering/robot2.jpg';
import Robot3 from '../Rendering/slide2.png';
import Robot4 from '../Rendering/slides.png';

import India1 from '../Rendering/line_1.png';
import India2 from '../Rendering/Wed1.jpg';

import Key1 from '../Rendering/Key1.png';
import Key2 from '../Rendering/Key2.png';



export const RenderingData = [
    {
        title: "3D Modelling | Rendering | Animation",

    },
    {
        type: "link",
        linkText: "youtube.com/channel/UCNzpJeHb1WCdrQzMYukMFuw",
        url: "https://www.youtube.com/channel/UCNzpJeHb1WCdrQzMYukMFuw",
        preText: "Link to youtube :  "
    },
    {
        type: "block",
        title: <>
        {'\n'}Inspiration
        </>,
        text: <>
        I started to learn about computer aided design (CAD) after my freshman year of high school. I was in the robotics club and became motivated by all the clever, sophisticated, and clean designs teams from all over the world came up with for the competition. After talking with a world class team, I decided I needed to learn CAD. 
        {'\n'}</>,
    },
    {
        type: "block",
        title: <>
        {'\n'}Main Projects{'\n'} -  FTC Robotics
        </>,
        text: <>
        I participated in the First Tech Challenge in all four years of high school. Once I started using CAD to design major parts before building them, the quality of the robot significantly increased. I learned the importance of CAD which includes design optimization, collaboration, and iterative design.
Overall, I designed the majority of three robots in Autodesk Inventor. Each robot was designed to complete a unique set of tasks, had unique drivetrains, components and 3d printed parts. One of my largest projects was to take the robot 3d models and create an animation that showcases all the parts. 
{'\n\n'}</>,
    },

    {
        type: "image",
        image: Robot1,
        width: 1000,
        height: 500,
        caption: <>
        Animation Preview</>
    },
    {
        type: "link",
        linkText: "youtu.be/R7WQLNoY58g",
        url: "https://youtu.be/R7WQLNoY58g",
        preText: "Link to animation :  "
    },
    {
        type: "block",
        title: <></>,
        text: <>
        To create the animation, I imported the robot files into Cinema 4D. There, I structured all the parts to prepare them to be grouped and animated. Then I began setting up the scenes, keyframes and cameras. Making the animation photorealistic was another goal I set for myself. I found the Redshift GPU rendering plugin and learned all about applying materials, lighting, cameras to simulate the real world. The final product took hundreds of hours to render on multiple GPUs. From start to finish I created everything over the course of around a 1 year. 
        {'\n\n'}</>,
    },
    {
        type: "block",
        title: <>Robot CAD Samples</>,
        text: <></>,
    },
    {
        type: "tripleImage",
        image: Robot2,
        image2: Robot3,
        image3: Robot4,
        width: 400,
        height: 350,
        caption: <>
        2018-2019 Robot</>,
        caption2: <>
        Servo Linear Slider Mechanism</>,
        caption3: <>
        Dual Motor Linear Slider</>
    },
    {
        type: "block",
        title: <>
        {'\n'} -  Line Following Robot
        </>,
        text: <>For one of our robotic team outreach programs, I designed a simple line following robot that is made up of Arduino components and a 3d printed frame. My friend and I travelled to India for a week to teach the robotics program he created there the basics of programming and CAD. They had access to a 3d printer; We printed, assembled and programmed the robot to follow a line on the table. 
        {'\n\n'}</>,
    },
    {
        type: "doubleImage",
        image: India1,
        image2: India2,
        width: 400,
        height: 350,
        caption: <>
        Line Followind Robot Design</>,
        caption2: <>
        Me teaching CAD to a group of students</>,
    },    
    {
        type: "block",
        title: <>
        {'\n'} -  Keychains
        </>,
        text: <>A smaller 3D printing project I designed and printed two motorcycle keychains. I created them when I was learning onshape and scaled them after my motorcycles. I plan to continue making some keychains of cars and other types of motorcycles for fun. 
        {'\n\n'}</>,
    },
    {
        type: "doubleImage",
        image: Key1,
        image2: Key2,
        width: 400,
        height: 300,
        caption: <>
        Suzuki DRZ 400 Keychain</>,
        caption2: <>
        Honda Grom Keychain</>,
    },
    {
        type: "block",
        title: <>
        {'\n'} -  Other Animations
        </>,
        text: <>I created a few other animations such as simulating water, putting a 3D model into a real video and making an explosion simulation.  These are all on my YouTube channel linked at the top of the page.{'\n\n'}</>,
    },
    {
        type: "block",
        title: <>
        {'\n'}Software Summary{'\n'} -  Autodesk Inventor
        </>,
        text: <>The CAD software I am most familiar with is Autodesk Inventor. I used it to design and assemble all the robot parts, as well as design two robots and one fixture during my internship at HyFrontier Technologies. 
        </>
    },
    {
        type: "block",
        title: <>
         -  Fusion 360
        </>,
        text: <>I have used Fusion 360 to collaborate on a few robotics projects, but I prefer Autodesk Inventor for larger assemblies for performance reasons. </>
    },
    {
        type: "block",
        title: <>
         -  Onshape
        </>,
        text: <>I learned how to use onshape at my Engineering Design and Society class at UF. I used it to make the keychain and a robot that automatically opens and closes blinds depending on the time of day
        </>
    },
    {
        type: "block",
        title: <>
         -  Cinema 4D + Redshift Render
        </>,
        text: <>I use these to create animations once I have a part or assembly I want to render. The Redshift Render plugin allows me to use GPU rendering that renders quickly and photorealistically.
        {'\n\n'}
        </>
    },

   

    
    
    

];