import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trusedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import CatCard from '../../components/catCard/CatCard.jsx';
import ProjectCard from '../../components/projectCard/ProjectCard.jsx';
import {cards, projects} from "../../data"

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
      <div className="features dark">
          <div className="container">
            <div className="item">
              <h1>pioniir Business</h1>
              <h1>A business solution designed for Incubators</h1>
              <p>Upgrade to a curated experience packed with tools and benefits,
                dedicated to Incubators & Accelerators.
              </p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                  Connect to experts with proven real life experience
              </div>
              <div className="title">
                <img src="./img/check.png" alt="" />
                  Connect to experts with proven real life experience
              </div>
              <div className="title">
                <img src="./img/check.png" alt="" />
                  Connect to experts with proven real life experience
              </div>
              <button>Explore pioniir Business</button>
            </div>
            <div className="item">
              <img src="https://cdn.dribbble.com/users/3723395/screenshots/17429363/media/92fe914c4dc18d73deb71bff8df1e158.jpg" alt="" />
            </div>
            
          </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>    
    </div>
  )
}

export default Home