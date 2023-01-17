import React from 'react';
import {View, Text, StyleSheet, Image, Button, Platform} from 'react-native';

import Web from '../ZoomSniper/webarchitecture.jpg';
import Cover from '../ZoomSniper/zs2.png';


export const ZoomData = [
    {
        title: "Zoom Sniper",

    },
    {
        type: "link",
        linkText: "zoom.sourcehex.com",
        url: "https://zoom.sourcehex.com",
        preText: "Link to project :  "
    },
    {
        type: "link",
        linkText: "github.com/Dominikk7/Zoom-Sniper",
        url: "https://github.com/Dominikk7/Zoom-Sniper",
        preText: "Link to GitHub :  "
    },
    {
        type: "block",
        title: <>
        {'\n'}Inspiration
        </>,
        text: <>
        I participated in the UF Swamphacks VIII hackathon where hundreds of participants from all over the country team up to create a project and compete for awards. I worked with a partner to create the Zoom Sniper app. We wanted to create something that would be relevant, useful for students, and unique. The issue we identified was looking for my online lecture links every day before joining. In less than three days, we believe we fully solved the problem by creating Zoom Sniper. Our team was awarded the First Time Hacker Award.
        {'\n'}</>,
    },
    {
        type: "block",
        title: <>
        {'\n'}Functionality
        </>,
        text: <>
        The application allows users to organize links onto a list and opens them on a user defined schedule. For example, I can make my programming lecture open every Monday, Wednesday, and Friday at a certain time. The UI displays the list with details like the name, link, weekday, and time. Links can easily be added and removed. 
        {'\n\n'}</>,
    },
    {
        type: "image",
        image: Cover,
        width: 600,
        height: 500,
        caption: <>
        App Screenshot</>
    },
    {
        type: "block",
        title: <>
        {'\n'}Technical Details
        </>,
        text: <>
         The app was made in C# Windows Form App .NET 4.6. Visual studio makes is simple to create a user interface and quickly create an app. .NET 4.6 is preinstalled on Windows 10 so the end user would not need to install any more dependencies to run the app. The links are represented as object that we store in a list. When a link is added or deleted, the list is serialized and saved in AppData for persistent storage. Upon opening the app the file is deserialized and the data is restored. The link checking system works by running an async task to compare the current date and time to the time set by the user. One of the most challenging parts of the project was the time comparison algorithm in the async task. Eventually we fixed all the issues and submitted the project within the deadline. I still run the app today without any problems. The source code is available on my GitHub page.
         {'\n'}</>,
    },
    {
        type: "block",
        title: <>
        {'\n'}Web Server
        </>,
        text: <>
          Another goal we had for the project was to have it be accessible for everyone through a public website. I have experience with servers, virtual machines and routing so self-hosting a server was a reachable goal within the time frame. The website was a simple HTTP file with a download button. It was run on my server inside a virtual machine. To have the server visible on the web I used a port forwarded kemp load balancer. I got a free .tk domain and used Cloudflare to mask my IP address and make the connection secure. When the user types the domain, Cloudflare forwards the request to my load balancer. The load balancer looks at the domain and forwards it to the appropriate server, in this case the web server inside the VM. The main function of the load balancer is to only port forward one port. It makes it easy to route multiple servers based on the incoming domain. It is easier to take care of all the routing internally instead of forwarding all the servers separately. 
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