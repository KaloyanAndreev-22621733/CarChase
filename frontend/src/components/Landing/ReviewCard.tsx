import React from 'react';

function ReviewCard({ title, text, name, platform, avatar }: {
    title: string,
    text: string,
    name: string,
    platform: string,
    avatar: string
}) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col transition hover:shadow-xl">
            {/* Заголовок и кавычка */}
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <span className="text-4xl text-indigo-400 leading-none font-serif -mt-1">“</span>
            </div>

            {/* Текст отзыва */}
            <div className="text-gray-600 min-h-[170px] font-medium text-sm leading-relaxed mb-4 flex items-center">
                {text}
            </div>

            {/* Автор */}
            <div className="flex items-center gap-3 pt-3 border-t border-gray-100 mt-auto">
                <img
                    src={avatar}
                    alt={name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
                <div>
                    <p className="text-sm font-medium text-gray-900">{name}</p>
                    <p className="text-xs text-gray-500">{platform}</p>
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;