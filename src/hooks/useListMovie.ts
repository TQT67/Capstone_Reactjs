import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { movieApi } from '../apis/movie.api';
import { QueryKeys } from '../constants/queryKeys';
import { Movie } from '../interfaces/movie.interface';
import useQueryStatus from './useQueryStatus';

type ListMovieQueryOptions = Omit<UseQueryOptions<Movie>, 'queryKey' | 'queryFn'>;

const useListMovie = (page: number, options?: ListMovieQueryOptions) => {
  const queryResult = useQuery({
    queryKey: [QueryKeys.LIST_MOVIE, page],
    queryFn: () => movieApi.getListMovie({ page, size: 8 }),
    ...options,
  });

  const status = useQueryStatus({ queryResult });

  return { ...queryResult, ...status };
};

export default useListMovie;
