import React from 'react';
import { useListMovie } from '../hooks/useListMovie';
import MovieCard from './MovieCard';

const MovieList = () => {
  const { currentItems, currentPage, itemsPerPage, totalItems, paginate } = useListMovie();

  return (
    <div>
      {/* Hiển thị danh sách phim */}
      {currentItems.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}

      {/* Phân trang */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieList; 