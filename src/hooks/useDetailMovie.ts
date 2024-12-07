import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { QueryKeys } from '../constants/queryKeys';
import { movieDetailApi } from '../apis/detailMovie';
import { Content } from '../interfaces/detailMovie.interface';
import { useParams } from 'react-router-dom';

type DetailMovieQueryOptions = Omit<UseQueryOptions<Content>, 'queryKey' | 'queryFn'>;

const useDetailMovie = (options?: DetailMovieQueryOptions) => {
  const { id } = useParams<{ id: string }>();
  const queryResult = useQuery({
    queryKey: [QueryKeys.MOVIE_DETAILS, id],
    queryFn: () => movieDetailApi.getDetailMovie(id!),
    enabled: !!id,
    ...options,
  });
  return queryResult;
};

export default useDetailMovie;
