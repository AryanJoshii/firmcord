import Image from 'next/image'
import React from 'react'

export default function ServerPanel() {
    return (
        <div className="server-panel select-none overflow-y-scroll">
            <ul className="flex flex-col gap-5 p-2">
                {Array.from({ length: 20 }).map((v, k) => (
                    <li key={k} className='relative overflow-hidden bg-cover bg-center w-[50px] h-[50px] rounded-[50%] hover:rounded-xl ease-in-out duration-[350ms]'>
                        <Image fill src="/people_drinking.svg" className="pointer-events-none" alt='' />
                    </li>
                ))}
            </ul>
        </div>
    )
}
