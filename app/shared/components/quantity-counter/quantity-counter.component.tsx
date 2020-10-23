import React, {useEffect, useState} from "react";
import { Container, Text, Button, Icon} from 'native-base';
import {StyleSheet} from "react-native";

export enum CounterLimit {
    MIN = 0,
    MAX = 10
}

interface QuantityCounterProps {
    onQuantityUpdate: (count: number) => void
}

export default function QuantityCounter(props: QuantityCounterProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count > CounterLimit.MIN && count <=              CounterLimit.MAX) {
            props.onQuantityUpdate(count);
        }
    }, [count]);

    const decrementCounter = () => {
        setCount(count - 1);
    };

    const incrementCounter = () => {
        setCount(count + 1);
    };

    return(
        <Container style={styles.container}>
            <Button testID={"trn-quantity-counter__remove"} small disabled={count === CounterLimit.MIN} onPress={decrementCounter}>
                <Text style={styles.counterButtonText}>
                    <Icon style={styles.icon} name='remove'></Icon>
                </Text>
            </Button>
            <Text testID={"trn-quantity-counter__text"} style={styles.counter}>{count}</Text>
            <Button testID={"trn-quantity-counter__add"} small disabled={count === CounterLimit.MAX} onPress={incrementCounter}>
                <Text style={styles.counterButtonText}>
                    <Icon style={styles.icon} name='add'></Icon>
                </Text>
            </Button>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'flex-end',
        paddingTop: 6
    },
    counter: {
        fontSize: 30,
        textAlign: 'center',
        lineHeight: 29,
        width: 50,
        height: 30
    },
    icon: {
        color: 'white'
    },
    counterButtonText: {
        paddingRight: 10,
        paddingLeft: 10
    }
});