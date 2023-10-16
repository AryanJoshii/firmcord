'use client'
import React, { useEffect } from 'react'

export default function TextArea() {
    return (
        <div className='sticky z-20 pb-4 bottom-0'>
            <form
                className='relative'
                onSubmit={e => { e.preventDefault(); console.log(e); }}>
                <input
                    type="text"
                    className='w-full p-3 rounded-lg bg-zinc-600 active:outline-none focus:outline-none'
                    placeholder='Enter your message here...'
                />
                {/* <button className='absolute top-1/2 translate-y-[-50%] right-0'>
                    SEND
                </button> */}
            </form>
        </div>
    )
}
