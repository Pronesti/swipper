import React from 'react'

export default function Gallery({photo}) {
    return (
        <div className='imgbox2' style={{backgroundImage: `url(${photo})`}} />
    )
}
