import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  CastCard,
  CastName,
  CastChar,
  Castimg,
  arrowStyles,
} from './MovieCastCarouelStyles';
const MovieCastCarouel = ({ movie }) => {
  const [Cast, setCast] = useState([]);

  const url = `https://api.themoviedb.org/3/movie/tt2527338/credits?api_key=2a5b2bfab3731d2da0e262fb42a86194&language=en-US`;
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const castArray = data.cast;
        //console.log(castArray);
        setCast(castArray);
      })
      .catch(error => console.error(error));
  }, []);

  const imageBaseURL = 'https://image.tmdb.org/t/p/w200';

  const chunkSize = 6;
  const chunks = [];
  for (let i = 0; i < Cast.length; i += chunkSize) {
    chunks.push(Cast.slice(i, i + chunkSize));
  }
  return (
    <div>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 15 }}
            >
              &lt;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 15 }}
            >
              &gt;
            </button>
          )
        }
      >
        {chunks.map((chunk, index) => (
          <div key={index}>
            {chunk.map(element => (
              <div
                key={element.id}
                style={{ display: 'inline-block', margin: '2px' }}
              >
                <Link to="">
                  <CastCard>
                    <Castimg
                      src={`${imageBaseURL}${element.profile_path}`}
                      alt={element.name}
                    />
                    <CastName>{element.name}</CastName>

                    <CastChar>{element.character}</CastChar>
                  </CastCard>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieCastCarouel;
