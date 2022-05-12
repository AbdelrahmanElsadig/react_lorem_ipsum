import React from 'react'
import { Form } from './Form'

const Project = () => {
    return (
        <div className='mt-16 w-full flex flex-col gap-4 items-center'>
            <h1 className="text-4xl font-bold text-center pb-3 relative
            after:absolute after:h-1 after:w-1/2 after:left-1/4 
            after:bg-green-600 after:bottom-0">Lorem Generator</h1>
            <Form />
        </div>
    )
}

export { Project }
