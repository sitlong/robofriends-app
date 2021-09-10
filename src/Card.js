import React from "react";

const Card = (props) => {
    // const { name, email ,id} = props;
    return ( 
        <div className="bg-light-green dib br3 pd3 ma2 tc bw2 grow shadow-3" style={{
            width: '250px'
        }}>
            <img src="X4E.png" alt="robot"   />
            <div>
                <h2>{props.name}</h2>
                
                <p>{props.email}</p>
            </div>

            
        </div>
     );
}
 
export default Card;