import { ApiResponse } from "../interfaces/api.interface";
import { CinemaData } from "../interfaces/cinema.interface";
import { Movie } from "../interfaces/movie.interface";
import fetcher from "./fetcher";

export const movieApi = {
	getListMovie: async () => {
		// eslint-disable-next-line no-useless-catch
		try {
			const response = await fetcher.get<ApiResponse<Movie[]>>(
				`/QuanLyPhim/LayDanhSachPhim`
			);
			return response.data.content;
		} catch (error) {
			throw error;
		}
	},
	getListCinema: async () => {
		// eslint-disable-next-line no-useless-catch
		try {
			const response = await fetcher.get<ApiResponse<CinemaData[]>>(
				`/QuanLyRap/LayThongTinHeThongRap`
			);
			return response.data.content;
		} catch (error) {
			throw error;
		}
	},
};
