import React from 'react'
import data from '../data/data';
import Card from './Card';

const FirstVarient = () => {

    let box = document.querySelector('.product-container');

    const prev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }

    const next = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }

    return (
        <>
            <div className="relative overflow-hidden px-6 py-3">
                    <button className="absolute border-none bg-lime-200 rounded-full p-4 text-black font-bold text-xl bottom-0 left-0 cursor-pointer" onClick={prev}>&lt;</button>
                    <button className="absolute border-none bg-lime-200 rounded-full p-4 text-black font-bold text-xl bottom-0 right-0 cursor-pointer" onClick={next}>&gt;</button>
        
                <div className="product-container px-3 flex overflow-x-hidden gap-4">
                    {
                        data.map((user, index) => (
                            <Card data={user} key={index} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default FirstVarient