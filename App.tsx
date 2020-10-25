import React, {useRef} from 'react';
import {View} from "react-native";
import { Router, Scene, Drawer, Stack, Tabs } from 'react-native-router-flux';
import WelcomeComponent from './app/components/welcome/welcome.component';
import GitListComponent from './app/components/git-list/git-list.component';
import GitItemComponent from './app/components/git-list/git-item/git-item.component';
import OfflineIndicator from "./app/shared/components/internet-info/internet-info.component";

export default function App() {
    return (
        <View>
            <OfflineIndicator></OfflineIndicator>
            <Router>
                <Scene key="root">
                    <Scene key="Welcome" component={WelcomeComponent} title="Welcome" initial={true} />
                    <Scene key="GitList" component={GitListComponent} title="Git list" />
                    <Scene key="GitItem" component={GitItemComponent} title="RepoInfo" />
                </Scene>
            </Router>
        </View>
    );
}
