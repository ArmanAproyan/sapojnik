'use client'
import MainPage from "./components/complex/mainPage/page"
import Reviews from "./components/complex/reviews/Reviews"
import ReviewsPerson from "./components/complex/reviewsPerson/ReviewsPerson"
import { useState } from "react"
import { IreviewData } from "./types/types"

const Home = () => {
    const [reviewData, setReviewData] = useState<IreviewData[]>([]);

  return (
    <div>
      <MainPage/>
      <ReviewsPerson reviewData={reviewData} setReviewData={setReviewData}/>
      <Reviews setReviewData={setReviewData}/>
    </div>
  )
}

export default Home
