import React from 'react'

export default function Gallery(url) {
    return (
        <div className='imgbox' style={{backgroundImage: `url(${url})`}} />
    )
}
