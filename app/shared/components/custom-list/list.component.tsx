import React, {ReactElement, useEffect, useReducer} from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {Container, Left, Body, Text, List, ListItem, Thumbnail, Right, Content} from 'native-base';
import listReducerFn from "./list.reducer";
import Pagination, {PaginationResponse} from "../pagination/pagination";

interface ListItemsProps {
    items: ListItemType[],
    onClick: (item: ListItemType) => void,
}

export interface ListItemType {
    id: number,
    imageUrl: string,
    heading: string,
    subheading: string,
    price: number,
    rating: number,
    selected?: boolean
}

export enum ListDispatchEvent {
    ADD_SELECTED_FLAG,
    SET_SELECTED_ITEM
}

export default function ListComponent(props: ListItemsProps) {
    let [state, dispatch] = useReducer(listReducerFn, []);

    useEffect(() => {
        if (props.items && props.items.length) {
            dispatch({type: ListDispatchEvent.ADD_SELECTED_FLAG, data: props.items});
        }
    }, [JSON.stringify(props.items)]);

    const listItemPressed = (item: ListItemType) => {
        dispatch({type: ListDispatchEvent.SET_SELECTED_ITEM, selectedItem: item});
        props.onClick(item);
    };

    const EmptyListMessage = (): ReactElement => {
        return (
            <Text style={styles.emptyListStyle}>
                There are no items to show.
            </Text>
        );
    };

    const ItemView = ({ item }: { item: ListItemType }): ReactElement => {
        return (
            <ListItem key={item.id.toString()} testID="trn-list__list-item" selected={item.selected} style={item.selected ? styles.selected : styles.listItem} thumbnail noBorder onPress={() => listItemPressed(item)}>
                <Left>
                    <Thumbnail square source={{ uri: item.imageUrl }} style={styles.image}/>
                </Left>
                <Body>
                    <Text style={styles.textMain}>{item.heading}</Text>
                    <Text style={styles.textSub} note>{item.subheading}</Text>
                </Body>
                <Right>
                    <Text>{item.price}</Text>
                    <Text>{item.rating}</Text>
                </Right>
            </ListItem>
        );
    };

    return (
        <Container>
            <SafeAreaView style={{flex: 1}}>
                <FlatList
                    data={state}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={ItemView}
                    ListEmptyComponent={EmptyListMessage}
                />
            </SafeAreaView>
        </Container>
    );
}

const styles = StyleSheet.create({
    textMain: {
        paddingLeft: 60,
        fontSize: 24,
        color: 'rgb(63, 81, 181)'
    },
    textSub: {
        paddingLeft: 60,
        fontSize: 18,
        color: 'rgb(63, 81, 181)',
        opacity: 0.7
    },
    headerText: {
        right: '54px'
    },
    image: {
        borderRadius: 10
    },
    selected: {
        backgroundColor: 'aliceblue',
        marginLeft: 0,
        paddingLeft: 18
    },
    listItem: {
        marginLeft: 0,
        paddingLeft: 18
    },
    emptyListStyle: {
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
    },
});