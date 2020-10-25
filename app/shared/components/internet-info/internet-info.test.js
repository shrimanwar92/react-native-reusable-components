import 'react-native';
import React from 'react';
import {render, waitFor} from "@testing-library/react-native";
import OfflineIndicator from "./internet-info.component";
import NetInfo from '@react-native-community/netinfo';

jest.mock('@react-native-community/netinfo', () => {
    return {
        addEventListener: jest.fn()
    };
});

test('test online and offline functionality', async () => {
    const listeners = [];
    NetInfo.addEventListener = ((fn) => { listeners.push(fn) });
    const component = render(<OfflineIndicator></OfflineIndicator>);

    // isConnected is true so we should not be able to see the "No internet connection" text
    expect(component.queryByTestId("trn-internet-info__status")).toBeNull();

    // update the event listener so that isConnected becomes false
    setTimeout(() => {
        listeners[0]({ isConnected: false });
    }, 1);
    await waitFor(() => component);
    expect(component.queryByTestId("trn-internet-info__status").props.children).toBe("No Internet Connection");

    // update the event listener so that isConnected becomes true and "No internet connection" text should not be visible
    setTimeout(() => {
        listeners[0]({ isConnected: true });
    }, 1);
    await waitFor(() => component);
    expect(component.queryByTestId("trn-internet-info__status")).toBeNull();
});
