import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FootballDetail from '../FootballlDetail/FootballDetail';

const Football = () => {
    const footballs=useLoaderData()
   
    return (
      <>
      <h1 className='text-center text-4xl font-extrabold text-slate-600 mt-6'>Profile of Football Players</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-6'>
          
           {
             footballs.map(football=> <FootballDetail key={football.id}football={football}></FootballDetail>)
           }
        </div>
        </>
    );
};

export default Football;