import { ApiResponse } from "../interfaces/api.interface";
import { Content } from "../interfaces/banner.interface";
import fetcher from "./fetcher";

export const bannerApi = {
    getBanner: async():Promise<Content[]> =>{
        try {
            const res = await fetcher.get<ApiResponse<Content[]>>(
                `/QuanLyPhim/LayDanhSachBanner`
            );
            return res.data.content
        }
        catch(error){
            throw error
        }
    }
}