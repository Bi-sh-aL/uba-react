import React from "react"
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../src/Components/Login/Login';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

describe('Login Component', () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    beforeEach(() => {
        vi.spyOn(console, 'log').mockImplementation(() => {});
      });
    
      afterEach(() => {
        vi.restoreAllMocks();
      });
    

  it('renders login form correctly', () => {
    renderComponent();

    expect(screen.getByRole('heading', {name:/Login/i})).toBeInTheDocument();
    expect(screen.getByLabelText('Login ID')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByText("Don't have an account?").closest('p')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  it('validates form submission with empty fields', () => {
    renderComponent();

    const submitButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(submitButton);

    expect(screen.getByText('Please enter email address')).toBeInTheDocument();
    expect(screen.getByText('Please enter password')).toBeInTheDocument();
  });

  it('validates form submission with invalid email', () => {
    renderComponent();

    const emailInput = screen.getByLabelText('Login ID');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: 'short' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Invalid email address')).toBeInTheDocument();
    expect(screen.getByText('Password must be at least 6 characters')).toBeInTheDocument();
  });

  it('handles form submission with valid data', () => {
    renderComponent();

    const emailInput = screen.getByLabelText('Login ID');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
    expect(console.log).toHaveBeenCalledWith('Form submitted successfully');
  });

  it('shows error message for invalid email format', () => {
    renderComponent();

    const emailInput = screen.getByLabelText('Login ID');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

    const submitButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(submitButton);

    expect(screen.getByText('Invalid email address')).toBeInTheDocument();
  });

  it('shows error message for short password', () => {
    renderComponent();

    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: '123' } });

    const submitButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(submitButton);

    expect(screen.getByText('Password must be at least 6 characters')).toBeInTheDocument();
  });

  it('updates form fields correctly', () => {
    renderComponent();

    const emailInput = screen.getByLabelText('Login ID');
    const passwordInput = screen.getByLabelText('Password');

    fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput).toHaveValue('user@example.com');
    expect(passwordInput).toHaveValue('password123');
  });
});
