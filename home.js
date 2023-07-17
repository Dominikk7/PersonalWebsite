// Home.js, just a name of the stack navigation

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBrowserApp} from "@react-navigation/web";
import {createSwitchNavigator} from 'react-navigation';

import Projects from "./pages/projects";
import MainPage from "./pages/mainPage";
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import {Platform} from "react-native";

import Crypto from './pages/ProjectSrc/Crypto/crypto.js';
import Zoom from './pages/ProjectSrc/ZoomSniper/zoom.js';
import Rendering from './pages/ProjectSrc/Rendering/rendering.js';
import Image from './pages/ProjectSrc/ImageEncoder/image.js';

import TestPage from "./pages/testPage";
import LeoPage from "./pages/leoPage";
import Skystone3d from "./pages/Robot3d";
import RoverRuckus3d from "./pages/Robot3dRover";
import Diff3d from "./pages/Diff3d";

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
        LeoPage: LeoPage,
        Skystone3d: Skystone3d,
        RoverRuckus3d: RoverRuckus3d,
        Diff3d: Diff3d,
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