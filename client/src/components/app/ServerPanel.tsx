'use client'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react'

export default function ServerPanel() {
    const router = useRouter();
    const pathname = usePathname();

    let tooltipRef = useRef<HTMLDivElement>(null);
    let serverListRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const serverList = serverListRef.current;
        const tooltip = tooltipRef.current;

        const navigateServers = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                if (document.activeElement && document.activeElement === e.target && (e.target as HTMLElement).classList.contains('server-icon')) {
                    (e.target as HTMLElement).click();
                }
            }

            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                const elements = document.querySelectorAll('.server-icon');

                const activeElement = document.activeElement;

                if (activeElement && activeElement.classList.contains('server-icon')) {
                    let currentIndex = Array.from(elements).indexOf(activeElement);

                    let newIndex = currentIndex;

                    if (e.key === "ArrowDown") {
                        newIndex = (currentIndex + 1) % elements.length;
                    } else if (e.key === "ArrowUp") {
                        newIndex = (currentIndex - 1 + elements.length) % elements.length;
                    }

                    (elements[newIndex] as HTMLElement).focus();
                }
            }
        }

        const displayToolTip = (e: MouseEvent | FocusEvent) => {
            const element = e.target as HTMLElement;
            if (element.classList.contains('server-icon')) {
                const elementRect = element.getBoundingClientRect();
                tooltip!.style.visibility = "visible";
                tooltip!.style.opacity = "1";
                tooltip!.innerText = element.dataset.serverName!;
                tooltip!.style.top = `${elementRect.top + 8.5}px`;
                tooltip!.style.left = `${elementRect.width + 30}px`;
                return;
            }
            hideTooltip();
        }

        const hideTooltip = () => {
            tooltip!.style.visibility = "hidden";
            tooltip!.style.opacity = "0";
        }

        document.addEventListener("keydown", navigateServers);
        if (serverList && tooltipRef.current) {
            serverList.addEventListener('mouseover', displayToolTip);
            serverList.addEventListener('mouseout', hideTooltip);
            serverList.addEventListener('focusin', displayToolTip);
            serverList.addEventListener('focusout', hideTooltip);
        }

        return () => {
            document.removeEventListener("keydown", navigateServers);
            if (serverList && tooltip) {
                serverList.removeEventListener('mouseover', displayToolTip);
                serverList.removeEventListener('mouseout', hideTooltip);
                serverList.removeEventListener('focusin', displayToolTip);
                serverList.removeEventListener('focusout', hideTooltip);
            }
        }
    }, [])

    useEffect(() => {
        const serverId = pathname.split('/')[2];
        const servers = (serverListRef.current as HTMLUListElement).querySelectorAll('.server-icon');
        const selectedServer = Array.from(servers).findIndex(server => (server as HTMLElement).dataset.serverId === serverId);


        if (selectedServer !== -1) {
            servers.forEach(server => {
                server.closest('.group')?.classList.remove('is-active')
            });
            servers[selectedServer].closest('.group')?.classList.add('is-active');
        }
    }, [pathname])

    return (
        <div id='server-panel' className="select-none overflow-y-scroll w-[72px] bg-zinc-900">
            <ul ref={serverListRef} className="py-3">
                <div className='group'>
                    <div className="relative flex justify-center pointer-events-none before:ease-in-out before:duration-[350ms] before:w-[4px] before:absolute before:rounded-e-full before:h-1/4 before:hover:h-1/2 before:bg-white before:left-0 before:top-1/2 before:translate-y-[-50%] before:z-50 before:block group-[.is-active]:before:h-5/6">
                        <div tabIndex={0} data-server-name="DMs" data-server-id="112" onClick={() => { router.push(`/channel/112/home`) }} className="server-icon pointer-events-auto relative overflow-hidden bg-zinc-700 hover:bg-orange-500 bg-cover bg-center w-[50px] h-[50px] rounded-[50%] hover:rounded-xl transition-all duration-[350ms] focus:outline-8 focus:outline-white active:outline-8 active:outline-white group-[.is-active]:rounded-xl group-[.is-active]:bg-orange-500">
                            <Image fill src="/logo.png" className="pointer-events-none" alt='' />   
                        </div>
                    </div>
                </div>
                <div className="border border-[#4e50587a] w-2/4 mx-auto my-2"></div>
                <div className="flex flex-col gap-5">
                    {Array.from({ length: 5 }).map((v, k) => (
                        <div key={k} className='group'>
                            <div className="relative pointer-events-none flex justify-center before:ease-in-out before:duration-[350ms] before:w-[4px] before:absolute before:rounded-e-full before:h-1/4 before:hover:h-1/2 before:bg-white before:left-0 before:top-1/2 before:translate-y-[-50%] before:z-50 before:block group-[.is-active]:before:h-5/6">
                                <div tabIndex={-1} data-server-name={k} data-server-id={k} onClick={() => { router.push(`/channel/${k}/${k}`) }} className='server-icon pointer-events-auto relative overflow-hidden bg-cover bg-center w-[50px] h-[50px] rounded-[50%] hover:rounded-xl ease-in-out duration-[350ms] focus:outline-8 focus:outline-white active:outline-8 active:outline-white group-[.is-active]:rounded-xl'>
                                    <Image fill src="/people_drinking.svg" className="pointer-events-none" alt='' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ul>
            <div ref={tooltipRef} className="bg-[#111214] font-bold invisible opacity-0 text-white absolute py-1 px-3 rounded-lg transition-[opacity] duration-[350ms]"></div>
        </div>
    )
}
