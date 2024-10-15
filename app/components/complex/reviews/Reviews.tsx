"use client";
import style from './style.module.scss';
import axios from 'axios';
import { useState } from 'react';
import { NextResponse } from 'next/server';
import { Ierror } from '@/app/types/types';


interface ReviewsProps {
    reviewData?: any[];
    setReviewData: React.Dispatch<React.SetStateAction<any[]>>;
}


export function middleware(request: any) {
    const fdprocessedid = generateUniqueId();

    request.headers.set('X-FD-Processed-ID', fdprocessedid);

    return NextResponse.next();
}

function generateUniqueId() {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}


const Reviews: React.FC<ReviewsProps> = ({setReviewData }) => {
    const [email, setEmail] = useState<string>('');
    const [review, setReview] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<Ierror>({
        email: '',
        review: ''
    });


    const handleChangeReview = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReview(e.target.value)
    
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email.length >= 30) {
            setErrorMessage((prevState) => {
                return {
                    ...prevState,
                    email: 'некоректный email'
                }
            });
            return;
        }


        if(review.length >= 550) {
            setErrorMessage((prevState) => {
                return {
                    ...prevState,
                    review: 'Очень много текста'
                }
            })
            return
        }

        const request = { email, review }; 
        try {
            await axios.post('/api/reviews', request);
            setReviewData((prevState) => [
                ...prevState,
                { email, review }
            ]);
          setErrorMessage({email: '', review:''});
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
            <small id="reviewlHelp" className={style.error_text}>
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
