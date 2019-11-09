import React from 'react'
import { Typography } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel';

export default function SwipeBox({user}) {
    if (!user) return <div className="noPeople">
    <Typography>No people found.</Typography>
    <CancelIcon fontSize="large" color="error"/></div>
    return (
        <div className='imgbox' style={{backgroundImage: `url(${user.photos[0]})`}}>
        <Typography variant="h4" className="nameOnBox">{user.name} {user.age}</Typography>
        <Typography variant="h6" className="descOnBox">{user.desc}</Typography>
        </div>
    )
}

SwipeBox.defaultProps = {
    name: "Sandy",
    age: "0",
    photos: ['https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg']    
}