import fetcher from "./fetcher";
import { ApiResponse } from "../interfaces/api.interface";
import { LoginData } from "../interfaces/login.interface";

export const loginApi = {
	postLogin: async () => {
		// eslint-disable-next-line no-useless-catch
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
