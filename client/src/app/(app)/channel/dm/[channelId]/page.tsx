import React from 'react'

export default function page({ params }: { params: { channelId: string } }) {
    return (
        <div>
            DM Channel: {params.channelId}
        </div>
    )
}
