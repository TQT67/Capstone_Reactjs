import { ApiResponse } from '../interfaces/api.interface';
import { Movie } from '../interfaces/movie.interface';
import fetcher from './fetcher';

export const movieApi = {
  getListMovie: async ({ page, size }: { page: number; size: number }): Promise<Movie> => {
    try {
      const response = await fetcher.get<ApiResponse<Movie>>(
        `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=${size}`,
      );
      return response.data.content;
    } catch (error) {
      throw error;
    }
  },
};
