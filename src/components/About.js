import React from 'react';
import Person from '../img/person.png'
const About = () => {
  return (
    <div className="content-route about">
       <img src={Person} alt="person"></img>
      <div>
        <p className="name">BOUALI KAMEL.</p>
        <p className="title">A FULL STACK DEVELOPER</p>
        <p className="definition">I made a web systems,  and I love what I do.</p>
      </div>


    </div>
  );
};

export default About;