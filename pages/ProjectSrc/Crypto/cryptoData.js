import React from 'react';
import {View, Text, StyleSheet, Image, Button, Platform} from 'react-native';

import Img1 from '../Crypto/cover2.jpg';
import PriceChart from '../Crypto/priceChart.png';
import Garage1 from '../Crypto/1.jpg';

import Frame1 from '../Crypto/frame1.jpg';
import Frame2 from '../Crypto/frame2.jpg';
import Riser from '../Crypto/riser.jpg';

import GpuBox1 from '../Crypto/gpuBox1.jpg';
import GpuBox2 from '../Crypto/gpuBox2.jpg';
import Garage2 from '../Crypto/2.jpg';

import Garage3 from '../Crypto/3.jpg';
import Garage4 from '../Crypto/4.jpg';
import Garage5 from '../Crypto/5.png';


export const CryptoData = [
    {
        title: "Cryptomining",

    },
    {
        type: "block",
        title: <>
        {'\n'}Initial Interest
        </>,
        text: <>
        I first heard about crypto mining around 2018. This is when Ethereum and crypto in general had its first major spike in interest
         as seen on the chart. At the time I didn’t have any computer hardware powerful enough to start. My interest in cryptocurrency and
          high-performance computers did not stop though. Over the next few years, I invested myself into learning computer aided design,
           3d rendering, programming and computer hardware. I also began working towards building a high performance GPU centered computer
            to render 3d animations, as well as be ready to start crypto mining if it ever becomes profitable again; I didn’t want to miss the
             chance a second time. {'\n\n'}</>,
    },
    {
        type: "image",
        image: PriceChart,
        width: 1000,
        height: 450,
        caption: <>
        ETH price data</>
    },
    {
        type: "imageBlock",
        image: Garage1,
        width: 350,
        height: 300,
        caption: <>
        Initial Garage Test</>,
        title: <>
        {'\n'}Early Start
        </>,
        text: <>
        Starting late 2020 I started to see a serious potential in GPU mining again as the profitability just began to increase. I built an aluminum frame for the GPUs I had been using for rendering and wanted to collect real-world results for performance, power draw and profitability compared to online calculators. The initial challenges involved software, overclocking stability, and thermal management in the room. Another experiment I tried was moving the computer into the garage to see if it can run at full speed in the higher ambient temperature. With enough airflow in the open cases, the test was a success. The heat and noise problem inside house was solved. The higher ambient temperature did not affect the hashrate and fan speeds were still adequate. Humidity levels were higher but would only be harmful enough to worry if the computers stayed off. While the computers were at much higher temperatures than ambient and had airflow there was minimal risk of corrosion. 
        {'\n\n'} </>,
    },
    {
        type: "imageBlock",
        image: Frame1,
        width: 350,
        height: 300,
        caption: <>
        5 GPU Frame</>,
        title: <>  
        {'\n\n'}GPU Frame</>,
        text: <>
        The next step for me to expand was to start building a graphics card frame and use riser cards. Most computer cases can only comfortably fit 2-3 GPUs and consumer motherboards typically have 2-3 PCIE 16x connectors. Additionally, traditional computer cases don’t provide good airflow for the cards and keep them spaced close together. This can all be overcome by  mounting the cards on a dedicated frame. The cards interface with the motherboard using PCIE 1x connector riser cards. This means there can be up to 6 GPUs per motherboard using the smaller, more abundant connector. PCIE 16x is significantly faster at transferring data than 1x, however hashrate is not affected because there is not enough data send back and forth to the GPU for it to be a bottleneck. 
I designed the GPU frame in Autodesk Inventor before cutting, and assembling it out of aluminum extrusion. The initial design allowed for up to 5 GPUs in the open air. Additional fans also helped lower temperatures .
{'\n\n'}</>,
    },
    {
        type: "doubleImage",
        image: Frame2,
        image2: Riser,
        width: 500,
        height: 300,
        caption: <>
        Full GPU Frame</>,
        caption2: <>
        PCIE Riser Card</>
    },
    {
        type: "block",
        title: <>
        {'\n'}Scaling Hardware
        </>,
        text: <>
        The success of the mining frame, and the results from all my previous tests convinced me to fully invest myself in developing, managing and optimizing the mining farm. To continue, I needed more hardware. At the time I started mining, GPUs with over 4gb of VRAM were required to run efficiently. I also made sure to find high quality power supplies and avoided the wrong types of splitters and overloading the PSU to avoid the most common fire hazards. I secured a very good bulk deal for AMD RX 480 and 580 8gb cards, a few motherboards and power supplies. I bought more cards in bulk than I initially needed to test and resell them to offset some of the cost, reducing my estimated ROI time. 
Over the next few weeks, I spent hours in the garage every day building up more frames, more computers, and more wiring. Initially scaling sounded easy, but I ran into many failures and challenges before everything was functional, stable, and self-sufficient. 
{'\n\n'}</>,
    },
    {
        type: "tripleImage",
        image: GpuBox1,
        image2: GpuBox2,
        image3: Garage2,
        width: 400,
        height: 350,
        caption: <>
        RX 480 4gb</>,
        caption2: <>
        RX 480, RX 580 8gb</>,
        caption3: <>
        Garage Setup</>
    },
    {
        type: "block",
        title: <>
        {'\n'}Challenges: Solutions and growth{'\n'}   - Troubleshooting hardware 
        </>,
        text: <>After putting together all the hardware including GPUs, risers, motherboards, and power for the first time it did not immediately all work together. There are too many components involved and too much untested hardware being put together. The first challenge was getting any display output. I realized the only way to get everything to work is to unit test everything I could and slowly build it up. To get display output I needed to reseat some riser connectors and leave all but one disconnected. Once more GPUs were connected the computer would freeze on the post screen or on the boot screen to the OS. It turns out plugging in six graphics cards requires additional setup. The process of figuring everything out was tedious, but I could see progress. It turns out the BIOS needed to be updated and some settings regarding PCIE lanes needed to be changed, as well as disabling audio controller, built in wifi and some USB ports. The motherboard only has a certain amount of high speed connectivity and it all needed to be allocated to graphics.  
        {'\n'}</>,
    },
    {
        type: "block",
        title: <>
           - Troubleshooting software 
        </>,
        text: <>
        At first I made the mistake of using windows OS to run the mining software; It was what I was most familiar with so it was easy to start with. It worked well with the couple GPUs per computer, but after using six there were issues. The most frustrating issue was installing drivers and getting all the graphics cards to detect without errors. Additionally to maximum performance I needed to modify and flash the GPU BIOS. This further complicated the driver installation process. To further optimize the poer draw and hashrate the core clock needed to be dropped, power limit dropped and memory clock increased. The Ethereum hashing algorithm mainly relies on memory so the cards can be undervolted and run even cooler. One of the issues I ran into is stability. After a few hours if there was any error or crash all the overclocks were reset to stock or windows would freeze. I just lowered the overclock and had to check on the computers frequently through vnc remote desktop to see if there were any issues. 
        {'\n'}</>,
    },
    {
        type: "block",
        title: <>
           - Network
        </>,
        text: <>
        The network signal was very weak in the garage and the network connection was slow and unstable. Additionally, each computer needed to have its own wifi card. Buying a long network cable and wiring it through the attic was an option, but would be tedious. I solved the problem by taking an old router and installing the DDWRT custom firmware on it. This allowed me to have one router in the garage connect to the main router and forward the connection to the computers through short ethernet cables. This increased the network stability and removed the need for wifi cards.  
        {'\n'}</>,
    },
    {
        type: "block",
        title: <>
           - Power
        </>,
        text: <>
        Once I had more cards running on a larger scale I was surprised to find out everything shut down when I turned on the microwave in the kitchen. That’s when I learned about the importance of accounting for exactly how much power devices on a circuit use and circuit breakers. I didn’t consider power being one of the limitations when I first thought of scaling the mining. After that incident I got a new line of wire installed to the garage with more than enough power than I would need in case of future upgrades. 
         {'\n\n'}</>,
    },
    {
        type: "block",
        title: <>
        Evolution
        </>,
        text: <>
        Over time I continued to trade and upgrade the graphics cards and added another motherboard. At this point I was tired of the low stability and checking the overclocks or restarting for another windows update. In my research to solve this I discovered Hive OS. It’s a Linux based system that is designed for multi-GPU computers for mining. After installing and configuring everything, all the computers and GPUs could be managed from a single UI. I could apply better overclocks without crashes, have more advanced fan control, and have much better monitoring. Eventually the computers could run weeks without intervention; they could restart themselves on any rare error and auto power on when there was a brief power outage. It was stable. 
With the added GPUs came added heat. I needed to design a better cooling solution for the computer and for the garage. The solution was to draw air in from the sides and to exhaust it all outside through a chimney like opening in the ceiling. This solution worked very well and the cards and garage stayed cool even on the hottest summer days. All the hot air rose upwards and was expelled allowing fresh air to enter.
{'\n\n'}</>,
    },
    {
        type: "tripleImage",
        image: Garage3,
        image2: Garage4,
        image3: Garage5,
        width: 400,
        height: 400,
        caption: <>
        Cooling solution (closed)</>,
        caption2: <>
        Cooling solution (opened for access)</>,
        caption3: <>
        Ceiling exhaust</>
    },
    {
        type: "imageBlock",
        image: Img1,
        width: 350,
        height: 300,
        caption: <>
        Dell PowerEdge R720</>,
        title: <>  
        {'\n\n'}CHIA Cryptomining</>,
        text: <>
        During the time working on the main GPU mining farm, I learned about another coin, CHIA, where mining was storage based. Instead of Proof of Work, the coin used Proof of Space. Essentially miners need a lot of hard drive space to get mining rewards. I found a good deal on a Dell PowerEdge R720 server with around 60 TB of drive space. In the process of configuring it I learned about many server specific technologies such as the external drive bays, setting up virtual disks, RAID, and the Dell specific iDRAC for remote management. 
        {'\n\n'}</>,
    },
    {
        type: "block",
        title: <>
        Outcomes
        </>,
        text: <>
        I enjoyed managing every part of the project: computers, cooling, power, cost to operate, initial costs, upgrades, and improvements. Eventually it ran stable in its own for months, a big step from checking or fixing something every single day. 
        {'\n\n\n'}</>,
    },

];