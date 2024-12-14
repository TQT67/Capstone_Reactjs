import { ApiResponse } from "../interfaces/api.interface"
import { Content } from "../interfaces/ticketRoom.interface"
import fetcher from "./fetcher"

export const ticketRoomApi = {
    getTicket: async(id: string) : Promise<Content> =>{
        try{
            const response = await fetcher.get<ApiResponse<Content>>(
                `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
            );
        return response.data.content;

        }catch (error) {
            throw error;
        }
    }
}