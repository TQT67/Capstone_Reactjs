import { ApiResponse } from '../interfaces/api.interface';
import { Movie } from '../interfaces/movie.interface';
import fetcher from './fetcher';

export const movieApi = {
  getListMovie: async () => {
    try {
      const response = await fetcher.get<ApiResponse<Movie[]>>('/QuanLyPhim/LayDanhSachPhim', {
        params: {
          maNhom: 'GP01',
        },
      });
      return response.data.content;
    } catch (error) {
      throw error;
    }
  },
};
