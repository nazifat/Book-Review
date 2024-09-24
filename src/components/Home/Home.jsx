import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import BookSection from '../BookSection/BookSection'

const Home = () => {
    // const books= useLoaderData();
    // console.log(books.length);
    return (
        <div>
            <Banner></Banner>
            <BookSection></BookSection>
        </div>
    );
};

export default Home;