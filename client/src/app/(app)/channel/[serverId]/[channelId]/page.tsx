'use client'
import TextArea from '@/components/app/TextArea'
import React, { useEffect } from 'react'

export default function Page({ params }: { params: { serverId: string, channelId: string } }) {
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:3001');

        ws.addEventListener('message', () => {

        })
    }, [])

    return (
        <div className='flex flex-col w-full h-screen px-4 justify-between overflow-auto text-white'>
            <div className='flex flex-col justify-end flex-1'>

            </div>
            <TextArea />
        </div>
    )
}
