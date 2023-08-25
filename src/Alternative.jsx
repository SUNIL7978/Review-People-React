import { useState } from 'react';
import { data } from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function App() {
  const [index, setIndex] = useState(0);
  const { image, name, info, job } = data[index];

  const nextIndex = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % data.length;
      return newIndex;
    });
  };
  const prevIndex = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + data.length) % data.length;
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * data.length);
    if (randomIndex === index) {
      return (randomIndex = index + 1);
    }

    setIndex(randomIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h5 className="author">{name}</h5>
        <p className="job">{job}</p>
        <p className="info">{info}</p>
        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={prevIndex}>
            <FaChevronLeft />
          </button>
          <button type="button" className="next-btn" onClick={nextIndex}>
            <FaChevronRight />
          </button>
        </div>
        <button
          className="btn btn-hipster"
          type="button"
          onClick={randomPerson}
        >
          Surprise me
        </button>
      </article>
    </main>
  );
}

export default App;
