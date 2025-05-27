import React from 'react'
import ReviewCard from './ReviewCard'
import avatar1 from '../../images/avatar1.png' 
import avatar2 from '../../images/avatar2.png' 
import avatar3 from '../../images/avatar3.png' 

function ReviewsSection() {
    return (
        <div className="reviews w-full min-h-[510px] flex justify-center items-start py-15">
            <div className="w-[90%] min-h-[450px] bg-gray-100 rounded-lg p-6">
                
                {/* Заголовок */}
                <div className="w-full min-h-[70px] grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-6">
                    <div className="flex items-center">
                        <h2 className="font-semibold text-3xl text-gray-800">
                            What our customers say!
                        </h2>
                    </div>
                    <div className="flex md:justify-end items-center text-sm text-gray-600">
                        <span className="bg-white px-4 py-2 rounded shadow-sm">
                            ⭐ Rated <strong>4.7 / 5</strong> based on <strong>28,370</strong> reviews
                        </span>
                    </div>
                </div>

                {/* Сетка отзывов */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ReviewCard
                        title="Great Work"
                        text="Amazing design and super easy to customize. The team exceeded our expectations with exceptional support and feedback. The platform's performance optimization was impressive and made a real difference in user experience."
                        name="Leslie Alexander"
                        platform="Facebook"
                        avatar={avatar1}
                    />
                    <ReviewCard
                        title="Fantastic Support"
                        text="Customer service was top-notch and incredibly responsive. They helped with every detail, and their proactive approach helped me implement the solution quickly. Highly recommend!"
                        name="John Smith"
                        platform="Google Reviews"
                        avatar={avatar2}
                    />
                    <ReviewCard
                        title="Top Quality"
                        text="Loved the clean UI and how simple it was to implement. The design was intuitive, easy to navigate, and visually appealing. The team's attention to detail was impressive, and they handled challenges without sacrificing quality."
                        name="Sofia Davis"
                        platform="Trustpilot"
                        avatar={avatar3}
                    />
                </div>
            </div>
        </div>
    )
}

export default ReviewsSection;