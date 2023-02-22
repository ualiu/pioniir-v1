import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trusedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import CatCard from '../../components/catCard/CatCard.jsx';
import {cards} from "../../data"

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
          <div className="container">
            <div className="item">
              <h1>A whole world of experts at your fingertips</h1>
              <div className="title">
                <img src="./img/check.png" alt="" />
                The best for every budget
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores perspiciatis laborum veritatis similique, natus reiciendis.</p>

              <div className="title">
                <img src="./img/check.png" alt="" />
                The best for every budget
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores perspiciatis laborum veritatis similique, natus reiciendis.</p>

              <div className="title">
                <img src="./img/check.png" alt="" />
                The best for every budget
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores perspiciatis laborum veritatis similique, natus reiciendis.</p>

              <div className="title">
                <img src="./img/check.png" alt="" />
                The best for every budget
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores perspiciatis laborum veritatis similique, natus reiciendis.</p>

              
            </div>
            <div className="item">
              <video src="" controls></video>
            </div>
          </div>
      </div>  
    </div>
  )
}

export default Home