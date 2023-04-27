import React, { useEffect, useState } from 'react';
import CricketDetails from '../CricketDetail/CricketDetails';

const Cricket = () => {
    const[crickets,setCrickets]=useState([]);
    console.log(crickets)
    
    useEffect(()=>{
        fetch('cricket.json')
        .then(res=>res.json())
        .then(data=>setCrickets(data))
    },[])

    return (
        <>
         <h1 className='text-center text-4xl font-extrabold text-slate-600 mt-6'>Profile of Cricket Players</h1>
          <div className='grid grid-cols-1 lg:grid-cols-2 mt-6'>
            {
                crickets.map(cricket=><CricketDetails key={cricket.id}cricket={cricket}></CricketDetails>)
            }
            
         </div>  
            
        </>
    );
};

export default Cricket;