// Import axios hoặc fetcher và ApiResponse
import { ApiResponse } from "../interfaces/api.interface";
import { Content } from "../interfaces/detailMovie.interface";
import fetcher from "./fetcher";

export const movieDetailApi = { 
    getDetailMovie: async (maPhim: string): Promise<Content> => {
        try {
            const response = await fetcher.get<ApiResponse<Content>>(
                `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            );
            return response.data.content;
        } catch (error) {
            throw error;
        }
    },
};
