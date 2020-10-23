import React, {useRef} from 'react';
import { Router, Scene, Drawer, Stack, Tabs } from 'react-native-router-flux';
import WelcomeComponent from './app/components/welcome/welcome.component';
import GitListComponent from './app/components/git-list/git-list.component';
import GitItemComponent from './app/components/git-list/git-item/git-item.component';
import {Button, Text, Content, Form, Item, Label, Input, Icon, Container} from 'native-base'
import SideMenu from "./test";

export default function App() {
    return (
        <>
            <Router>
                <Scene key="root">
                    <Scene key="Welcome" component={WelcomeComponent} title="Welcome" initial={true} />
                    <Scene key="GitList" component={GitListComponent} title="Git list" />
                    <Scene key="GitItem" component={GitItemComponent} title="RepoInfo" />
                </Scene>
            </Router>
        </>
    );
}
