import React  from 'react';
import { Container, Content, Header,
    Left, Right, Body, Title, Text,
    Button, Card, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Styles from './welcome.css';

export default function WelcomeComponent() {

    const fetchGitList = () => Actions.GitList();
    Actions.drawerOpen();

    return(
        <Container>
            <Header>
                <Left />
                <Body>
                    <Title>Welcome</Title>
                </Body>
                <Right />
            </Header>
            {/*<Content contentContainerStyle ={Styles.contentContainer}>
                <Card>
                    <CardItem>
                        <Text>
                            Welcome to Candy Land Folks ;)
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Press Button to fetch Github Repos
                        </Text>
                    </CardItem>
                </Card>*/}
                <Button dark block
                        onPress= {fetchGitList} style= {{marginTop: 40}}>
                    <Text>{"Fetch Github Repos"}</Text>
                </Button>
            {/*</Content>*/}
        </Container>
    );
}