import * as React from 'react';

function CardService(props) {
    return (
        <div className="card">
            <img src={props.img} alt={props.title} />
            <div className="typografy">
               <h2>{props.title}</h2>
               <p>
                 {props.description}
               </p>
            </div>
         </div>
    )
}

export default CardService;