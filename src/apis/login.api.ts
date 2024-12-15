import fetcher from "./fetcher";
import { ApiResponse } from "../interfaces/api.interface";
import { LoginData } from "../interfaces/login.interface";

export const loginApi = {
	postLogin: async () => {
		try {
			const response = await fetcher.post<ApiResponse<LoginData[]>>(
				`/QuanLyNguoiDung/DangNhap`
			);
			return response.data.content;
		} catch (error) {
			throw error;
		}
	},
};
