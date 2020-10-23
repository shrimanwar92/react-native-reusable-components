import React from "react";
import {
    Container,
    Header,
    Body,
    Title,
} from 'native-base';
import {StyleSheet} from "react-native";
import CustomCardComponent from "../../../shared/components/custom-card/card.component";
import {ListItemType} from "../../../shared/components/custom-list/list.component";


export default function GitItemComponent(props: ListItemType) {
    const quantityUpdated = (count: number) => {
        console.log(count);
    };

    return(
        <Container>
            <Header>
                <Body style={styles.body}>
                    <Title>Repo Info</Title>
                </Body>
            </Header>
            <CustomCardComponent
                imageUrl={props.imageUrl}
                heading={{title: props.heading, subtitle: props.subheading}}
                subheading={{title: props.price.toString(), subtitle: props.rating.toString()}}
                quantityUpdated={quantityUpdated}
            ></CustomCardComponent>
        </Container>
    );
}

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
    },
    list: {
        display: 'flex',
        justifyContent: 'center'
    }
});