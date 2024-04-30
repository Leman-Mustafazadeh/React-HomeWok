import React, { useEffect, useState } from 'react';
import { deleteOne, getAll } from '../../API/';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "./index.module.scss";

const Section = ({items,setItems}) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getAll().then((res) => {
      setItems(res.data);
    });
  }, []);

  const filterItems = (genre) => {
    if (genre === '') {
      return items;
    } else {
      return items.filter(item => item.genre.toLowerCase().includes(genre.toLowerCase()));
    }
  };

  return (
    <section>
      <div className="container">
        <div className={styled["item-head"]}>
          <h2>Latest Published items</h2>

          <div className={styled["item-all"]}>
            <button className="btn btn-link" onClick={() => setFilter('')}>
              All
            </button>
            <button className="btn btn-link" onClick={() => setFilter('Horror')}>
              Horror
            </button>
            <button className="btn btn-link" onClick={() => setFilter('Thriller')}>
              Thriller
            </button>
            <button className="btn btn-link" onClick={() => setFilter('Science')}>
              Science Fiction
            </button>
            <button className="btn btn-link" onClick={() => setFilter('History')}>
              History
            </button>
          </div>
        </div>

        <div className="row">
          {filterItems(filter).map((el, idx) => (
            <div className={styled["moon-head"]} key={idx}>
              <img src={el.image} alt="" />
              <div className={styled["moon-item"]}>
                <h5>{el.title}</h5>
                <p>{el.author}</p>
                <div className={styled["star-head"]}>
                  <div className={styled["star-item"]}>
                    <div className={styled["star-title"]}>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <span>(<span>120</span>{el.genre})</span>
                  </div>
                  <p>${el.price}</p>
                </div>

                <button className='btn btn-danger' onClick={async () => {
                  await deleteOne(el.id);
                  setItems(items.filter(x => x.id !== el.id));
                  
                }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
