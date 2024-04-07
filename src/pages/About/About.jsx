import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About Us</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookStore</h2>
            <p className='fs-17'>Content is the lifeblood of our online book emporium, flowing with diverse narratives, captivating tales, and knowledge waiting to be absorbed. From timeless classics that have withstood the test of time to contemporary masterpieces shaping the literary landscape, our collection caters to every palate and passion. Immerse yourself in the rich tapestry of genres, from spine-tingling thrillers to heartwarming romances, thought-provoking non-fiction to fantastical adventures; there's something for every reader to savor and explore.</p>
            <p className='fs-17'>With carefully curated selections, we ensure that each title resonates with quality, relevance, and significance. Whether you seek enlightenment, entertainment, or escapism, our content promises to transport you to new horizons, broaden your perspectives, and ignite your imagination. Lose yourself in the pages of our virtual shelves, where every book is a gateway to new worlds and endless possibilities.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
