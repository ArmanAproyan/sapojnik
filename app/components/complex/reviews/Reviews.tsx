"use client";
import style from './style.module.scss';
import axios from 'axios';
import { useState } from 'react';

interface ReviewsProps {
    reviewData?: any[];
    setReviewData: React.Dispatch<React.SetStateAction<any[]>>;
}

const Reviews: React.FC<ReviewsProps> = ({setReviewData }) => {
    const [email, setEmail] = useState<string>('');
    const [review, setReview] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email.length >= 30) {
            setErrorMessage('некоректный email');
            return;
        }

        const request = { email, review }; 
        try {
            await axios.post('/api/reviews', request);
            setReviewData((prevState) => [
                ...prevState,
                { email, review }
            ]);
            setErrorMessage('');
        } catch (error) {
            console.log('Отзыв не отправлен, причина: ' + error);
        } finally {
            setEmail('');
            setReview('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <span>Отзивы</span>
            <div className={style.form_group}>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                    type="email"
                    className={style.input}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <small id="emailHelp" className={style.error_text}>
                    {errorMessage}
                </small>
            </div>
            <div className={style.form_group}>
                <label htmlFor="exampleInputReview1">Отзыв</label>
                <input
                    type="text"
                    className={style.input_review}
                    id="exampleInputReview1"
                    placeholder="Напишите ваш отзыв"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
            </div>
            <button type="submit" className={style.btn_primary}>
                Submit
            </button>
        </form>
    );
};

export default Reviews;
