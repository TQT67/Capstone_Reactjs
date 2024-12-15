import { Grid, Typography, Button, Box, CardContent, Card, CardMedia} from "@mui/material";
import React from "react";
import useDetailMovie from "../../../../hooks/useDetailMovie";
import { useNavigate } from "react-router-dom";

const DetailMovie: React.FC = () => {
    const { data, jsx } = useDetailMovie();

    const navigate = useNavigate();

    const goToTicketRoom = (id:string) => {
        navigate(`/ticketRoom/${id}`)
    }


   if(jsx) return jsx

    return (
        <Box sx={{ backgroundColor: "#1c1c1e", margin: "60px" }}>
            <Grid container spacing={3}>
                {/* Poster */}
                <Grid item xs={12} md={3}>
                    <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                        <CardMedia
                            component="img"
                            image={data?.hinhAnh}
                            alt={data?.tenPhim}
                            sx={{ borderRadius: "10px" }}
                        />
                    </Card>
                </Grid>

                {/* Details */}
                <Grid item xs={12} md={8}>
                    <Card sx={{ backgroundColor: "transparent", boxShadow: "none", color: "#fff" }}>
                        <CardContent>
                            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                                {data?.tenPhim}
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3 }}>
                                <strong>Khởi chiếu:</strong>{" "}
                                {data?.ngayKhoiChieu ? new Date(data.ngayKhoiChieu).toLocaleDateString("vi-VN") : "N/A"}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 3 }}>
                                {data?.moTa}
                            </Typography>
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <Button variant="contained" color="primary"
                                href="#seat-map-section"
                                sx={{ 
                                    textTransform: 'none',
                                    scrollBehavior: 'smooth'
                                }}>
                                    Đặt vé
                                </Button>
                                <Button variant="outlined" color="primary" sx={{ textTransform: "none" }}>
                                    Xem trailer
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Box sx={{ backgroundColor: "#1c1c1e", padding: "20px" }} id="seat-map-section">
                {data?.heThongRapChieu.map((cinema) => (
                    <Box
                        key={cinema.maHeThongRap}
                        sx={{
                            borderRadius: "8px",
                            padding: "15px",
                            marginBottom: "20px",
                        }}
                    >
                        <Typography variant="h6" sx={{ color: '#fff', fontWeight: "bold", marginBottom: "10px" }}>
                            {cinema.tenHeThongRap}
                        </Typography>
                        <Grid container spacing={2}>
                            {cinema.cumRapChieu.map((rap) => (
                                <Grid item xs={12} key={rap.maCumRap}>
                                    <Typography variant="body1" sx={{ color: "#fff", mb: 1 }}>
                                        {rap.tenCumRap} - {rap.diaChi}
                                    </Typography>
                                    <Grid container spacing={1}>
                                        {rap.lichChieuPhim.map((lich) => (
                                            <Grid item key={lich.maLichChieu}>
                                                <Button onClick={() => goToTicketRoom(lich.maLichChieu)}
                                                    variant="outlined"
                                                    sx={{
                                                        borderColor: "#ccc",
                                                        color: "#fff",
                                                        textTransform: "none",
                                                        borderRadius: "5px",
                                                        padding: "5px 15px",
                                                        "&:hover": {
                                                            borderColor: "#555",
                                                            color: "#555",
                                                            backgroundColor: "#fff",
                                                        },
                                                    }}
                                                >
                                                    {new Date(lich.ngayChieuGioChieu).toLocaleTimeString("vi-VN", {
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                    })}
                                                </Button>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default DetailMovie;
