import React from 'react';

const ProjectItems = ({ item }) => {
  if (!item) return null;

  return (
    <div className="pro-all">

    <div className="project__card" key={item.id}>
      <img src={item.image} alt="" className='project__img'/>
      <h3 className="project__title">{item.title}</h3>
      <a href={item.link} className="project__button" target='_blank' rel="noopener noreferrer">
       <h3>Link</h3><i className="bx bx-right-arrow-alt project__button-icon"></i>  
      </a>
    </div>
    </div>
  );
};

export default ProjectItems;
