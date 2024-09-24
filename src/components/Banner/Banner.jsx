import React from 'react';
import cover from '../../assets/images/cover.jpeg'

const Banner = () => {
    return (
        <div className='p-20 m-10 flex gap-10 justify-center align-middle items-center bg-[#F5F5F5] border rounded-lg'>
            <div className="bannerleft">
                <h1 className='text-6xl mb-10 text-black font-bold'>Books to freshen up your bookshelf</h1>
                <button className=' text-white font-bold text-xl btn btn-active btn-accent'>View The List</button>
            </div>
            <div className="bannerright">
                <img src={cover} alt="" />

            </div>
        </div>
    );
};

export default Banner;