import { cleanup, render, screen } from '@testing-library/react';
import {Form} from '../components/Form/Form';

const result = {
    value: 'KikoXtreme'
};

afterEach(cleanup);

beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(result)
        })
    );
});

test('Show fetched joke', async () => {

    render(<Form />);

    const element = await screen.findByText(result.value);

    expect(element).toBeInTheDocument();
});
