"use client";
import style from './style.module.scss';
import axios from 'axios';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface ReviewsProps {
    reviewData?: any[];
    setReviewData: React.Dispatch<React.SetStateAction<any[]>>;
}

interface Iresponse {
    email: string;
    review: string;
    sendTime?: string;
}

const Reviews: React.FC<ReviewsProps> = ({ setReviewData }) => {
    const getTime = () => {
        const data = new Date();
        const day = data.getDate();
        const month = data.getMonth() + 1;
        const hours = data.getHours();
        let minutes: number | string = data.getMinutes();
        return `${day}.${month}.${hours}:${minutes}`;
    };

    const handleSubmit = async (value: Iresponse, { resetForm }: any) => {
        value.sendTime = getTime();
        try {
            const response = await axios.post('/api/reviews', value);
            if (response.data.success) {
                setReviewData((prevState: any) => [
                    ...prevState,
                    value,
                ]);
                resetForm();
            } else {
                console.error('Ошибка:', response.data.message);
            }
        } catch (error: any) {
            console.error('Отзыв не отправлен, причина:', error.response?.data || error.message);
        }
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Обязательное поле')
            .email('Введите правильный email'),
        review: Yup.string()
            .required('Обязательное поле')
            .max(200, 'Напишите не больше 200 символов')
            .min(10, 'Напишите минимум 10 символов'),
    });

    return (
        <div className={style.form}>
            <Formik
                initialValues={{ email: '', review: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit} 
            >
                {({ resetForm }) => (
                    <Form>
                        <div className={style.form_group}>
                            <label htmlFor="email">Email</label>
                            <Field type='email' name='email' placeholder='email' />
                            <ErrorMessage name="email" component="div" className={style.error} />
                        </div>

                        <div className={style.form_group}>
                            <label htmlFor="review">Отзыв:</label>
                            <Field as="textarea" name="review" placeholder='Напишите ваш отзыв' className={style.input_review} />
                            <ErrorMessage name="review" component="div" className={style.error} />
                        </div>

                        <button type='submit' className={style.btn_primary}>Отправить</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Reviews;
