import React from 'react';
import Robot from './Card';



const CardList = ({ robots }) => {
   
    return(

            robots.map((user,i)=>{
        return(<div style={{ display:'inline-flex'}} >
            <Robot key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} />
            </div>
        )
             })
       
    )
}

export default CardList;