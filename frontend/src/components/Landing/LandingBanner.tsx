import React from 'react'
import background from '../../images/background.jpg'
import Icon from "../../images/Icon.png"
import Icon1 from "../../images/Icon1.png"
import Icon2 from "../../images/Icon2.png"

function LandingBanner() {
    return (
        <div
            className="w-full relative pt-[56.25%] bg-cover bg-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            {/* Абсолютный контейнер поверх фонового блока */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col">
                {/* Верхняя часть — 40% высоты */}
                <div className="stats basis-[40%] grid grid-cols-12 px-8 py-6">
                    {/* Левая колонка */}
                    <div className="col-span-3 flex justify-center items-end">
                        <h2 className="font-semibold text-4xl text-gray-700 font-sans">35,000$</h2>
                    </div>

                    {/* Правая колонка */}
                    <div className="col-span-9 flex justify-start items-end space-x-8">
                        {/* Первый блок */}
                        <div className="flex items-center space-x-2">
                            <img src={Icon} alt="icon1" className="w-6 h-6" />
                            <span className="text-lg text-gray-600 font-sans">Petrol</span>
                        </div>

                        {/* Второй блок */}
                        <div className="flex items-center space-x-2">
                            <img src={Icon1} alt="icon2" className="w-6 h-6" />
                            <span className="text-lg text-gray-700 font-sans">100 miles</span>
                        </div>

                        {/* Третий блок */}
                        <div className="flex items-center space-x-2">
                            <img src={Icon2} alt="icon3" className="w-6 h-6" />
                            <span className="text-lg text-gray-700 font-sans">Automatic</span>
                        </div>
                    </div>
                </div>

                {/* Нижняя часть — 60% высоты */}
                <div className="title basis-[60%] text-white flex items-start justify-start text-2xl font-semibold font-sans px-8">
                    <div className='w-[1070px] flex flex-col items-start ml-[115px]'>
                        <h1 className='text-7xl text-gray-700'>Mercedes-Benz, C Class</h1>
                        <button
                            className="mt-[50px] px-6 py-3 bg-gray-50 text-gray-700 text-sm font-semibold rounded hover:bg-gray-200 transition rounded-md"
                        >
                            Learn more!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingBanner;