import React from 'react';

const Book = ({ book }) => {
    const { bookId, bookName, image, author, tags, rating, category  } = book;
    return (
        <div className='mb-10 mt-5'>
            <div className="card  w-96 shadow-xl">
                <figure className='h-96'>
                    <img
                        src={image}
                        className=""
                        alt="books image" />
                </figure>
                <div className="card-body">
                    <div className='flex'>
                        {
                            tags.map((tag, index) => <span key={index} style={{ marginRight: '10px' }}> {tag} </span>)
                        }
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <div>
                        <div>
                            <p>{category}</p>
                        </div>
                        <div>
                            <p>{rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;