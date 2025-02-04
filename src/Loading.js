import React from 'react';
import './styles/Loading.css';

const NetflixIntro = ({ letter }) => {
  return (
    <div className="helper-container">
      <div className="helper-1">
        <div className="effect-brush">
          {[...Array(31).keys()].map((_, index) => (
            <span key={index} className={`fur-${31 - index}`}></span>
          ))}
        </div>
        <div className="effect-lumieres">
          {[...Array(28).keys()].map((_, index) => (
            <span key={index} className={`lamp-${index + 1}`}></span>
          ))}
        </div>
      </div>
      <div className="helper-2">
        <div className="effect-brush">
          {[...Array(31).keys()].map((_, index) => (
            <span key={index} className={`fur-${31 - index}`}></span>
          ))}
        </div>
      </div>
      <div className="helper-3">
        <div className="effect-brush">
          {[...Array(31).keys()].map((_, index) => (
            <span key={index} className={`fur-${31 - index}`}></span>
          ))}
        </div>
      </div>
      <div className="helper-4">
        <div className="effect-brush">
          {[...Array(31).keys()].map((_, index) => (
            <span key={index} className={`fur-${31 - index}`}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <div id="container">
      {/* Change the letter attribute to: N, E, T, F, L, I or X */}
      <NetflixIntro letter="N" />
    </div>
  );
};

export default Loading;
