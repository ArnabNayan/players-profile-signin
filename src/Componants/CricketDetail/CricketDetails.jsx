import React from 'react';

// eslint-disable-next-line react/prop-types
const CricketDetails = ({cricket}) => {
    // eslint-disable-next-line react/prop-types
    const{full_name,id,age,born,image,national_side,playing_style,ranking}=cricket
    return (
        
        <div className="card card-side bg-slate-300  m-10 shadow-xl ">
           
        <figure><img className='w-96 h-full' src={image} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{full_name}</h2>
          <p>Age:{age}</p>
          <p>Nationality:{national_side}</p>
          <p>Position:{playing_style}</p>
          <p>Value:{ranking}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    );
};

export default CricketDetails;