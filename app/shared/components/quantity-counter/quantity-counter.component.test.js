import 'react-native';
import React from 'react';
import {render, fireEvent} from "@testing-library/react-native";
import QuantityCounter, {CounterLimit} from "./quantity-counter.component";

const DISABLED_BUTTON_COLOR = "#b5b5b5";

test('should load the quantity counter component with initial state', () => {
    const mockFn = jest.fn();
    const component = render(<QuantityCounter onQuantityUpdate={mockFn}></QuantityCounter>);

    const decrement = component.getByTestId("trn-quantity-counter__remove");
    const increment = component.getByTestId("trn-quantity-counter__add");
    const counter = component.getByText("0");

    // check id decrement counter button is disabled. Disabled button should not fire press event.
    expect(decrement.props.style.backgroundColor).toBe(DISABLED_BUTTON_COLOR);
    fireEvent.press(decrement);
    expect(mockFn).not.toBeCalled();
    expect(counter.props.children).toBe(0);

    // check if increment counter button is enabled. Enable button should fire press event.
    fireEvent.press(increment);
    expect(mockFn).toBeCalled();
    expect(counter.props.children).toBe(1);
});

test('increment button should be disabled on reaching max limit', async () => {
    const mockFn = jest.fn();
    const component = render(<QuantityCounter onQuantityUpdate={mockFn}></QuantityCounter>);

    const increment = component.getByTestId("trn-quantity-counter__add");
    const counter = component.getByText("0");

    // increment count till max limit and see the function is getting called
    for(let i=1; i<=CounterLimit.MAX; i++) {
        fireEvent.press(increment);
        expect(counter.props.children).toBe(i);
        expect(mockFn).toBeCalled();
    }

    // check if increment button is disabled
    fireEvent.press(increment);
    expect(increment.props.style.backgroundColor).toBe(DISABLED_BUTTON_COLOR);
    expect(counter.props.children).toBe(10);
    expect(mockFn).toBeCalledWith(10);
});
