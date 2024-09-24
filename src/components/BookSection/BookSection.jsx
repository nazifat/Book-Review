import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book'

const BookSection = () => {

    const books= useLoaderData();
    // console.log(books.length);
    return (
        <div className=" m-10">
            <h1 className='text-black text-5xl items-center text-center'>Books</h1>
            <div className='grid grid-cols-3'>

                {
                    books.map(book=> <Book book={book} key={book.bookId}></Book>)

                }
            </div>
        </div>
    );
};

export default BookSection;