import 'react-native';
import React from 'react';
import {render, fireEvent} from "@testing-library/react-native";
import ListComponent from "./list.component";

test('should render list and fire press event with appropriate data', () => {
    const items = [{
        id: 11,
        imageUrl: "image",
        heading: "test",
        subheading: "test",
        price: 123,
        rating: 5,
    }, {
        id: 12,
        imageUrl: "image",
        heading: "test",
        subheading: "test",
        price: 123,
        rating: 5,
    }];
    const mockFn = jest.fn();

    const { queryAllByTestId } = render(<ListComponent items={items} onClick={mockFn}></ListComponent>);

    const listItem = queryAllByTestId("trn-list__list-item");
    expect(listItem.length).toBe(2);

    fireEvent.press(listItem[0]);
    expect(mockFn).toBeCalledWith({
        "heading": "test",
        "id": 11,
        "imageUrl": "image",
        "price": 123,
        "rating": 5,
        "selected": true,
        "subheading": "test"
    });
});

test('should handle empty data with message', () => {
    const component = render(<ListComponent items={[]}></ListComponent>);

    const listItem = component.queryAllByTestId("trn-list__list-item");
    const text = component.getByText("There are no items to show.");
    expect(listItem.length).toBe(0);
    expect(text).toBeTruthy();
});
