import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Reviews from './Reviews'
import axios from 'axios';

jest.mock('axios');

describe('Reviews Component', () => {
    let setReviewData;

    beforeEach(() => {
        setReviewData = jest.fn(); // Создаем мок для функции setReviewData
        render(<Reviews setReviewData={setReviewData} />);
    });

    test('renders input fields and submit button', () => {
        expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/отзыв/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });

    test('displays error message for invalid email length', async () => {
        const emailInput = screen.getByLabelText(/email address/i);
        const reviewInput = screen.getByLabelText(/отзыв/i);
        const submitButton = screen.getByRole('button', { name: /submit/i });

        fireEvent.change(emailInput, { target: { value: 'a'.repeat(31) } }); // Длинный email
        fireEvent.change(reviewInput, { target: { value: 'Valid review' } });
        fireEvent.click(submitButton);

        expect(await screen.findByText(/некоректный email/i)).toBeInTheDocument();
    });

    test('displays error message for empty review', async () => {
        const emailInput = screen.getByLabelText(/email address/i);
        const reviewInput = screen.getByLabelText(/отзыв/i);
        const submitButton = screen.getByRole('button', { name: /submit/i });

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(reviewInput, { target: { value: '' } }); // Пустой отзыв
        fireEvent.click(submitButton);

        expect(await screen.findByText(/Етот поле не модет бить путим/i)).toBeInTheDocument();
    });

    test('successfully submits review', async () => {
        const emailInput = screen.getByLabelText(/email address/i);
        const reviewInput = screen.getByLabelText(/отзыв/i);
        const submitButton = screen.getByRole('button', { name: /submit/i });

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(reviewInput, { target: { value: 'This is a valid review.' } });
        fireEvent.click(submitButton);

        // Мокаем ответ от сервера
        axios.post.mockResolvedValue({ data: { success: true } });

        await waitFor(() => {
            expect(setReviewData).toHaveBeenCalledWith(expect.any(Function));
            expect(emailInput.value).toBe('');
            expect(reviewInput.value).toBe('');
        });
    });

    test('displays error message on submission failure', async () => {
        const emailInput = screen.getByLabelText(/email address/i);
        const reviewInput = screen.getByLabelText(/отзыв/i);
        const submitButton = screen.getByRole('button', { name: /submit/i });

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(reviewInput, { target: { value: 'This is a valid review.' } });
        fireEvent.click(submitButton);

        // Мокаем ошибку от сервера
        axios.post.mockRejectedValue({ response: { data: { message: 'Ошибка' } } });

        await waitFor(() => {
            expect(screen.queryByText(/некоректный email/i)).not.toBeInTheDocument();
        });
    });
});
