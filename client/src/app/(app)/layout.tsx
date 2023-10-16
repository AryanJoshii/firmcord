import ServerPanel from "@/components/app/ServerPanel"

export default function AppLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-screen flex flex-row">
            <ServerPanel />
            <div className="w-[15em] bg-zinc-800">working...</div>
            <div className="flex-1 bg-zinc-700">{children}</div>
            <div className="w-[10em] bg-zinc-800">working...</div>
        </div>
    )
}
