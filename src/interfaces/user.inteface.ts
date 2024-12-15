export interface CurrentUser {
  [x: string]: any;
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  accessToken: string;
}

export interface Register{
  taiKhoan: string,
  matKhau: string,
  email: string,
  soDt: string,
  maNhom: string,
  hoTen: string
}

export interface LoginRequestBody {
  taiKhoan: string;
  matKhau: string;
}
