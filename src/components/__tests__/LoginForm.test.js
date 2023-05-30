import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from "../Login/LoginForm";

describe('LoginForm', () => {
    it('checks the existence of input fields in the form', () => {
        const { getByLabelText,getByTestId,getByRole } = render(<LoginForm />);

        const usernameInput = getByTestId ( 'test-username-input');
        const passwordInput = getByTestId ( 'test-password-input');
        expect(getByLabelText('UserName')).toBeInTheDocument();
        expect(getByLabelText('Password')).toBeInTheDocument();
        expect(getByRole('button', { name: 'Login' })).toBeInTheDocument();
        expect(usernameInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });
    it('renders the login form correctly', () => {
        const { container} = render(<LoginForm />);
        //check how many input and label into Login Form
        expect(container.getElementsByTagName("input").length).toBe(2);
        expect(container.getElementsByTagName("label").length).toBe(2);
        expect(container.getElementsByTagName("button").length).toBe(1);

    });

    it('updates state on input change', () => {
        const { getByTestId } = render(<LoginForm />);

        const usernameInput = getByTestId('test-username-input');
        const passwordInput = getByTestId('test-password-input');

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        expect(usernameInput.value).toEqual('testuser');

        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
        expect(passwordInput.value).toEqual('testpassword');
    });
    it('disallows special characters and spaces in username', async () => {
        const { getByTestId, getByText } = render(<LoginForm />);

        const usernameInput = getByTestId('test-username-input');
        const submitButton = getByText('Login');

        fireEvent.change(usernameInput, { target: { value: 'test@user' } });
        fireEvent.click(submitButton);

        expect(getByText('Username cannot contain special characters or spaces')).toBeInTheDocument();
    });

    it('submits the form with correct data', async () => {
        const { getByTestId, getByRole,getByText } = render(<LoginForm />);

        const usernameInput = getByTestId('test-username-input');
        const passwordInput = getByTestId('test-password-input');
        const submitButton = getByRole('button', { name: 'Login' });

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

        fireEvent.click(submitButton);

        await waitFor(() =>
            expect(getByText(/Login successful!/i)).toBeInTheDocument()
        );
    });
});
