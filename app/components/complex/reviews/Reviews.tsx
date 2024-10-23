"use client";
import style from './style.module.scss';
import axios from 'axios';
import { useState } from 'react';
import { Ierror } from '@/app/types/types';

interface ReviewsProps {
    reviewData?: any[];
    setReviewData: React.Dispatch<React.SetStateAction<any[]>>;
}

const Reviews: React.FC<ReviewsProps> = ({ setReviewData }) => {
    const [email, setEmail] = useState<string>('');
    const [review, setReview] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<Ierror>({
        email: '',
        review: ''
    });

    const handleChangeReview = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReview(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new Date();
        const day = data.getDate();          
        const month = data.getMonth() + 1;    
        const hours = data.getHours();        
        let minutes: number | string = data.getMinutes();    
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        
        const sendTimeData = `${day}.${month}.${hours}:${minutes}`;

        // Проверка на некорректные данные
        if (email.length >= 30) {
            setErrorMessage((prevState) => ({
                ...prevState,
                email: 'некоректный email'
            }));
            return;
        }

        if (review.length >= 550) {
            setErrorMessage((prevState) => ({
                ...prevState,
                review: 'Очень много текста'
            }));
            return;
        }

        const request = { email, review, sendTime: sendTimeData }; 
        try {
            const response = await axios.post('/api/reviews', request);
            // Убедитесь, что сервер возвращает корректный ответ
            if (response.data.success) {
                setReviewData((prevState) => [
                    ...prevState,
                    { email, review, sendTime: sendTimeData }
                ]);
                setErrorMessage({ email: '', review: '' });
            } else {
                console.error('Ошибка:', response.data.message);
            }
        } catch (error: any) {
            console.error('Отзыв не отправлен, причина:', error.response?.data || error.message);
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
                    {errorMessage.email}
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
                    onChange={handleChangeReview}
                />
            </div>
            <small id="reviewHelp" className={style.error_text}>
                {errorMessage.review}
            </small>
            <br />
            <button type="submit" className={style.btn_primary}>
                Submit
            </button>
        </form>
    );
};

export default Reviews;
