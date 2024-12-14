export interface Root {
  statusCode: number
  message: string
  content: Movie
  dateTime: string
  messageConstants: any
}

export interface Movie {
  currentPage: number
  count: number
  totalPages: number
  totalCount: number
  items: Item[]
}

export interface Item {
  maPhim: number
  tenPhim: string
  biDanh: string
  trailer: string
  hinhAnh: string
  moTa: string
  maNhom: string
  ngayKhoiChieu: string
  danhGia: number
  hot: boolean
  dangChieu: boolean
  sapChieu: boolean
}
