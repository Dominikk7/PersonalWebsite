// Home.js, just a name of the stack navigation

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBrowserApp} from "@react-navigation/web";
import {createSwitchNavigator} from 'react-navigation';

import Projects from "./pages/Projects";
import MainPage from "./pages/mainPage";
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import {Platform} from "react-native";

import Crypto from './pages/ProjectSrc/Crypto/crypto.js';
import Zoom from './pages/ProjectSrc/ZoomSniper/zoom.js';
import Rendering from './pages/ProjectSrc/Rendering/rendering.js';
import Image from './pages/ProjectSrc/ImageEncoder/image.js';

import TestPage from "./pages/testPage";

const isWeb = Platform.OS === 'web';

const Home = createSwitchNavigator( //or createStackNavigator
    {
        MainPage: MainPage,
        Projects: Projects,
        Experience: Experience,
        Contact: Contact,
        Crypto: Crypto,
        Zoom: Zoom,
        Rendering: Rendering,
        Image: Image,
        TestPage: TestPage,
    },
    {
        navigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000',
            },
            scrollEnabled: false,
        },
    }
);

//const container = createAppContainer(Home);
const container = isWeb ? createBrowserApp(Home): createAppContainer(Home);


export default container;