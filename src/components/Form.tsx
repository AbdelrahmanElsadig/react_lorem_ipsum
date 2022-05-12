import { stringify } from 'querystring';
import React, { InputHTMLAttributes, useEffect, useState } from 'react'
import { texts } from '../data/texts';
const Form = () => {
    const [quantity, setQuantity] = useState('');
    const [paragraphs, setParagraphs] = useState([]);
    let list = (): any => {
        let arr: string[] = [];
        for (let i = 0; i < parseInt(quantity); i++) {
            arr.push(texts[Math.round(Math.random() * (texts.length - 1))])
        }
        return arr
    }

    useEffect(() => {
        if (Number(quantity) > 10) return setQuantity('10');
        if (Number(quantity) < 0) return setQuantity('0');
    })


    const inputHandler = (element: HTMLInputElement) => {
        if (element.value == '') return setQuantity('')
        const value = parseInt(element.value);
        if (value == NaN) return

        return setQuantity((value).toString());
    }
    return (
        <>
            <form action="#">
                <div className="flex gap-1 items-center">
                    <label htmlFor="quantity text-xl">Quantity: &nbsp;&nbsp;</label>
                    <input onChange={(e) => inputHandler(e.target)} className='bg-slate-100 p-2 focus:border-none focus:outline-none'
                        value={quantity} type="number" id='quantity' name='quantity' />
                    <button onClick={(e) => {
                        e.preventDefault();
                        setParagraphs(list());
                    }} className="px-3 py-1 text-white text-2xl font-semibold bg-green-600 border-2
                    border-solid border-green-600 duration-300 ease-out rounded-lg
                    hover:text-green-600 hover:bg-white">Generate</button>
                </div>
            </form>
            <div className="flex max-w-[768px] flex-col gap-4 mb-8">
                {paragraphs.map((paragraph, i) => {
                    return (
                        <OutputList key={i} text={paragraph} order={i + 1} />
                    )
                })}
            </div>
        </>


    )
}

function OutputList({ order, text }: { order: number, text: string }) {
    return (
        <>
            <p><span className='text-3xl font-bold text-green-600'>{order} &nbsp;</span>
                {text}</p>
        </>
    )
}

export { Form } 
