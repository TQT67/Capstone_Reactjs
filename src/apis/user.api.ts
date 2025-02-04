import { ApiResponse } from '../interfaces/api.interface';
import { CurrentUser, LoginRequestBody } from '../interfaces/user.inteface';
import fetcher from './fetcher';

export const userApi = {
  login: async (body: LoginRequestBody) => {
    try {
      const response = await fetcher.post<ApiResponse<CurrentUser>>('/QuanLyNguoiDung/DangNhap', body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.content;
    } catch (error) {
      throw error;
    }
  },
};
