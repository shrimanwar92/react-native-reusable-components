import React from "react";
import {
    Card,
    CardItem,
    Text,
} from 'native-base';
import {StyleSheet, Image} from "react-native";
import QuantityCounter from "../quantity-counter/quantity-counter.component";

export interface CardProp {
    imageUrl: string,
    heading: {
        title: string,
        subtitle: string
    },
    subheading: {
        title: string,
        subtitle: string
    },
    quantityUpdated: (count: number) => void
}

export default function CustomCardComponent(props: CardProp) {

    return(
        <Card>
            <CardItem style={styles.cardItem}>
                <Image style={styles.image} source={{uri: props.imageUrl}} resizeMode='cover' />
            </CardItem>
            <CardItem footer bordered style={styles.cardItemFooter}>
                <Text style={styles.text1}>{props.heading.title}</Text>
                <Text style={styles.text1}>{props.heading.subtitle}</Text>
            </CardItem>
            <CardItem footer style={styles.cardItemFooter}>
                <Text style={styles.text1} note={true}>{props.subheading.title}</Text>
                <QuantityCounter onQuantityUpdate={props.quantityUpdated}></QuantityCounter>
            </CardItem>
        </Card>
    );
}

const styles = StyleSheet.create({
    image: {
        width: undefined,
        height: 200,
        borderWidth: 1,
        borderColor: 'grey',
        flex: 1,
        resizeMode: 'cover'
    },
    cardItem: {
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
        flexDirection: 'column',
        alignItems: undefined
    },
    cardItemFooter: {
        width: '100%',
        justifyContent: 'space-between',
        fontSize: 24
    },
    text1: {
        fontSize: 24,
    },
    text2: {
        fontSize: 20
    }
});