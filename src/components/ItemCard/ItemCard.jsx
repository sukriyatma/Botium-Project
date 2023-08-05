import React, { useEffect, useState } from 'react'
import axios from 'axios';
import fs from 'fs';
import './ItemCard.css'

export default function ItemCard({imgUrl}) {
       return (
        <div className='item-card'>
            <span id='item-image'>
                <img src={imgUrl} alt="" style={{width: '90px'}}/>
            </span>
            <p id='item-counter'>5</p>
            <p id='item-name'>{'Laser Grid ( 6556 )'}</p>
        </div>
    )
}