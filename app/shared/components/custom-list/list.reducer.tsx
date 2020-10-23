import React from "react";
import {ListDispatchEvent, ListItemType} from './list.component'

type Action = {type: ListDispatchEvent.ADD_SELECTED_FLAG, data: ListItemType[]}
                | {type: ListDispatchEvent.SET_SELECTED_ITEM, selectedItem: ListItemType};

type State = ListItemType[] | undefined;

export default function listReducerFn(state: State, action: Action): State {
    switch (action.type) {
        case ListDispatchEvent.ADD_SELECTED_FLAG:
            return action.data.map(item => {
                return { ...item, selected: false }
            });

        case ListDispatchEvent.SET_SELECTED_ITEM:
            return (state as ListItemType[]).map(item => {
                item.selected = item.id === action.selectedItem.id;
                return item;
            });

        default:
            return state;
    }
}