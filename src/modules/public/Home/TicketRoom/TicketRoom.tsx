import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import * as Yup from "yup";
import useTicketRoom from "../../../../hooks/useTicketRoom";
import { useSelector } from "react-redux";
import { CurrentUser } from "../../../../interfaces/user.inteface";

const TicketRoom: React.FC = () => {
  const { data, jsx } = useTicketRoom();
  const { currentUser } = useSelector((state:CurrentUser)=> state.user)
  const info = data?.thongTinPhim;
  const seat = data?.danhSachGhe;

  const validationSchema = Yup.object().shape({
    total: Yup.number()
      .min(1, "Bạn chưa chọn ghế nào!")
      .required("Tổng không được để trống"),
  });

  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);

  const handleSeatClick = (gheId: number, daDat: boolean, giaVe: number) => {
    if (daDat) return;


    setSelectedSeats((prev) => {
      const isSelected = prev.includes(gheId);
      if (isSelected) {
        setTotal((t) => t - giaVe); 
        return prev.filter((id) => id !== gheId);
      } else {
        setTotal((t) => t + giaVe); 
        return [...prev, gheId];
      }
    });
  };

  const handleSubmit = async () => {
    if (!currentUser) {
      alert("Vui lòng đăng nhập để đặt vé!");
      return;
    }
    try {
      await validationSchema.validate({ total });
      alert("Đặt vé thành công!");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        alert(error.message);
      }
    }
  };

  if (jsx) return jsx;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fff",
        margin: "20px",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid container spacing={2}>
        {/* Cột chứa các ghế */}
        <Grid
          item
          xs={12} md={6} sm={12}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0.7,
            justifyContent: "center",
          }}
        >
          {seat?.map((ghe: any) => (
            <Grid item key={ghe.maGhe}>
              <button
                style={{
                  backgroundColor:
                      ghe.daDat ? "gray"
                      : selectedSeats.includes(ghe.tenGhe) ? "green" 
                      : ghe.loaiGhe === "Vip" ? "orange" : "lightgray",
                  color: ghe.daDat ? "white" : "black",
                }}
                className="w-9 h-10 text-xs p-0 font-medium rounded-md focus:outline-none transition-all duration-300 ease-in-out active:text-white disabled:cursor-not-allowed disabled:bg-gray-300"
                disabled={ghe.daDat} 
                onClick={() => handleSeatClick(ghe.tenGhe, ghe.daDat, ghe.giaVe)}
              >
                {ghe.tenGhe}
              </button>
            </Grid>
          ))}
        </Grid>

        {/* Cột thông tin */}
        <Grid item xs={12} md={6} sm={12}>
          <Typography className="flex justify-between py-6">
            <p>Cụm rạp:</p>
            <p>{info?.tenCumRap}</p>
          </Typography>
          <hr />
          <Typography className="flex justify-between py-6">
            <p>Tên rạp:</p>
            <p>{info?.tenRap}</p>
          </Typography>
          <hr />
          <Typography className="flex justify-between py-6">
            <p>Địa chỉ:</p>
            <p>{info?.diaChi}</p>
          </Typography>
          <hr />
          <Typography className="flex justify-between py-6">
            <p>Tên Phim:</p>
            <p>{info?.tenPhim}</p>
          </Typography>
          <hr />
          <Typography className="flex justify-between py-6">
            <p>Ngày chiếu:</p>
            <p>{info?.ngayChieu}-{info?.gioChieu}</p>
          </Typography>
          <hr />
          <Typography className="flex justify-between py-6">
            <p>Chọn:</p>
            <p>{selectedSeats.join(", ") || "Chưa chọn ghế"}</p>
          </Typography>
          <hr />
          <Typography className="flex justify-between py-6">
            <p>Tổng:</p>
            <p>{total.toLocaleString()} VND</p> 
          </Typography>
          <hr />
          <Typography className="flex justify-center py-6">
            <Button onClick={handleSubmit} variant="contained">
              <span className="px-8 py-4">Đặt vé</span>
            </Button>
          </Typography>
          <hr />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TicketRoom;
