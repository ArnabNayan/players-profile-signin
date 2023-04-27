import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <>
            <div
                className="bg-cover backdrop-brightness-20 bg-center h-screen w-full"
                style={{
                    backgroundImage:
                        "url('https://media.istockphoto.com/id/525217573/photo/rugby-cricket-and-football-action.jpg?s=612x612&w=0&k=20&c=0_jTwSKXzkhURkUrg4_s44oSBC6iDYA52hbUuAaQZqo=')",
                }}
            >  <div className="w-full h-full  items-center 
        bg-slate-500/30 backdrop-brightness-55">

               <div className='pt-60'> 
                <h1 className='flex justify-center items-center  text-6xl text-white font-extrabold '>Player Profiling </h1></div><hr className='w-2/4 lg:ms-80 mt-8'></hr>
                </div>
            </div>
            <p className='font-semibold text-xl text-gray-500 p-20'>Profiling is a great coaching tool to develop an overview of a player as an individual and as a sports person.  It also assists in identifying strengths and weaknesses.<br></br>
                A player profile can be as basic or as detailed as required to develop a picture and understanding of the player that is appropriate to their age and level. You should undertake player profiling at the start of each season, to begin with a good level of knowledge of each of your players.</p>

            <p className='font-semibold text-xl text-slate-900 mx-16'>A player profile can include:   </p>
            <ol className='font-semibold text-xl text-gray-500 mt-10 px-10'>
                <li className='flex gap-2'><FaArrowRight></FaArrowRight> Personal details, including emergency contact information</li>
                <li className='flex gap-2'><FaArrowRight></FaArrowRight>Physical attributes and parameters</li>
                <li className='flex gap-2'><FaArrowRight></FaArrowRight>General health, illnesses, and allergies</li>
                <li className='flex gap-2'><FaArrowRight></FaArrowRight>Injury screening (past and present)</li>
                <li className='flex gap-2'><FaArrowRight></FaArrowRight>Personality traits and coachability</li>
                <li className='flex gap-2'><FaArrowRight></FaArrowRight>Sporting profile (sports played, including positions if applicable, and sport-specific skills).</li>
            </ol>

            <div
                className="bg-cover border-collapse backdrop-brightness-20 bg-center h-screen w-full mt-10"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                }}
            >
                <p className='font-semibold text-xl text-white mx-16 pt-32'>
                    Profiling your players can help to identify if a player is at risk of injury, overload or burn out and it should be updated for each player throughout the season with any changes, notes or injuries suffered. The level of your players will determine how detailed and in-depth your player profiling and screening is. Community players, junior through to senior, sub-elite players and elite athletes all require different levels and types of screening to create their player profiles.<br /> <br />Fit4Football have developed some player profiles (basic screening tools) for community players, which coaches can download and use with their players and teams at each level. Screening and player profiling should be appropriate to the level and age of the player and specific to the requirements of their football. When screening our footballers at each level, we need to consider and understand how we will use this player’s profile to support the player in their development and to reduce the risk of injury or re-injury in football.<br /><br /> To do this, a coach must have an understanding of the most common, most severe and most debilitating injuries in football at each age group and how to minimise the likelihood of such injuries.
                </p>

            </div>
            <p className='font-semibold text-xl text-slate-900 mx-16 pt-14'>
                Player Profile Sheets below: </p>
            <ol className='font-semibold text-xl text-gray-500 mt-10 px-10'>
                <li className='flex gap-2'><FaArrowRight></FaArrowRight>Junior (12 years and under)</li>
                <li className='flex gap-2'><FaArrowRight></FaArrowRight>Youth (13 – 18 years old)</li>
                <li className='flex gap-2'><FaArrowRight></FaArrowRight>Senior (Over 19 years old)</li>
            </ol>
           <Footer></Footer>
        </>
    );
};

export default Home;