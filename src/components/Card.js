import React from 'react';



const Card = ({name,id,email}) => {
    return(
        <div className='tc bg-light-green dib br3 p3 ma2 grow bw2 shadow-5'  style={{ Width:'200px', Height:'100px'}}>
           
            <img alt='photo' src={`https://robohash.org/${id}?200x200`} style={{height:'200px', width:'200px'}}/>
            <div >
                <h2>{name}</h2>
                <p>{email}</p> 
            </div>
        </div>
    )
}

export default Card;