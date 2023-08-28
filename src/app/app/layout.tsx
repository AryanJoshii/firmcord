import ServerPanel from "@/components/app/ServerPanel"

export default function AppLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-screen flex flex-row bg-slate-600 [&>div:nth-child(odd)]:bg-[#1e1f22]">
            <ServerPanel />
            <div className="w-[15em]">Quas, temporibus.</div>
            <div className="flex-1">Aperiam, dolore!</div>
            <div className="w-[10em]">Odit, officiis.</div>
        </div>
    )
}
