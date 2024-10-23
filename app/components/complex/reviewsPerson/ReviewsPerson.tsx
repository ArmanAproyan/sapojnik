"use client";
import style from './style.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IreviewDataProps } from '@/app/types/types';
import { RiUser3Fill } from "react-icons/ri";
import SkeletonReview from '../../simple/reviewSkeleton/ReviewSkeleton';

const ReviewsPerson: React.FC<IreviewDataProps> = ({ reviewData, setReviewData }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null); 

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('/api/reviews');
                const data: any = response.data;
                setReviewData(data);
            } catch (error) {
                console.error('Ошибка при загрузке отзывов:', error);
                setError('Не удалось загрузить отзывы. Попробуйте позже.'); 
            } finally {
                setLoading(false); 
            }
        };

        getData();
    }, [setReviewData]);

    return (
        <div className={style.reviews_container}>
            <div className={style.review_text}>
                <h1>Наши Отзывы</h1>
            </div>
            <div className={style.reviews}>
                <div className={style.review_block}>
                    {loading && <SkeletonReview />}
                    {error && <p className={style.error_text}>{error}</p>} {/* Отображение ошибки */}
                    {reviewData && reviewData.map((val) => (
                        <div key={val.id} className={style.review}>
                            <div className={style.user_info}>
                                <div className={style.user_image}><RiUser3Fill /></div>
                                <div className={style.user_email}>{val.email}</div>
                                <div className={style.time}>{val.sendTime}</div>
                            </div>
                            <div className={style.user_review}>
                                <p>{val.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewsPerson;
