import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json'; // Import the data

const HomePage = () => {
  const { name, tagline, professionalPhoto, ctaViewWork, ctaDownloadResume, resumeUrl } = data.home;

  return (
    <div>
      <h1>{name}</h1>
      <p>{tagline}</p>
      <img src={professionalPhoto} alt={name} />
      <Link to="/projects">{ctaViewWork}</Link>
      <a href={resumeUrl} download>{ctaDownloadResume}</a>
    </div>
  );
};

export default HomePage;
