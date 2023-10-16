import TextArea from '@/components/app/TextArea'
import React from 'react'

export default function page() {
    return (
        <div className='flex flex-col w-full h-screen px-4 justify-between overflow-auto text-white'>
            <div className='flex flex-col justify-end flex-1'>
                <div>Lorem ipsum dolor sit amet.</div>
                <div>Placeat dicta ea dolore quibusdam!</div>
                <div>Suscipit, saepe? Nostrum, aliquam error.</div>
                <div>Quae in molestias fugit obcaecati?</div>
            </div>
            <TextArea />
        </div>
    )
}
