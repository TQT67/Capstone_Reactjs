import { ApiResponse } from '../interfaces/api.interface';
import { Movie } from '../interfaces/movie.interface';
import fetcher from './fetcher';

export const movieApi = {
  getListMovie: async (): Promise<Movie[]> => {
    try {
      const response = await fetcher.get<ApiResponse<Movie[]>>(
        `/QuanLyPhim/LayDanhSachPhim`,
      );
      return response.data.content;
    } catch (error) {
      throw error;
    }
  },
};
