import 'react-native';
import React from 'react';
import {render, fireEvent, waitFor} from "@testing-library/react-native";
import Pagination from "./pagination";

test('should load pagination component with default state', () => {
    const mockFn = jest.fn();
    render(<Pagination itemsPerPage={10} onLoadMore={mockFn}></Pagination>);
    expect(mockFn).toBeCalledWith({"beginIndex": 0, "endIndex": 10, "page": 1});
});

test('should change page when Load more is clicked', async () => {
    const mockFn = jest.fn();
    const component = render(<Pagination itemsPerPage={10} onLoadMore={mockFn}></Pagination>);
    const next = component.getByTestId("trn-pagination__load-more");

    expect(mockFn).toBeCalledWith({"beginIndex": 0, "endIndex": 10, "page": 1});
    fireEvent.press(next);
    // wait for updating the component
    await waitFor(() => component);
    expect(mockFn).toBeCalledWith({"beginIndex": 10, "endIndex": 20, "page": 2});

});