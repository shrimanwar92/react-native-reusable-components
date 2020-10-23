import React from "react";
import {
    List,
    ListItem,
} from 'native-base';
import {StyleSheet} from "react-native";
import CustomCardComponent, {CardProp} from "../../../shared/components/custom-card/card.component";

interface CardList {
    items: CardProp[]
}

export default function CardListComponent(props: CardList) {

    return(
        <List contentContainerStyle={styles.list} dataArray={props.items} renderRow={(item) =>
            <ListItem thumbnail style={{justifyContent: 'center', marginLeft: 0}}>
                {/*<CustomCardComponent
                    imageUrl={item.imageUrl}
                    heading={{title: item., subtitle: props.id.toString()}}
                    subheading={{title: props.name, subtitle: props.owner.repos_url}}
                ></CustomCardComponent>*/}
            </ListItem>
        }>
        </List>
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