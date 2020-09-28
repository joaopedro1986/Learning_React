import React from 'react'

export default function Parameter (params) {
   
    const avaliation = params.rate > 4 ? 'Good' : 'Bad';

    return (
    <div>
        <h2> {params.title} </h2>
        <p> <strong>{params.subtitle} </strong> 
             has rate
            <strong> {params.rate} and is a   </strong>
            <strong> {avaliation} </strong>  game
        </p>
    </div>
    )
}