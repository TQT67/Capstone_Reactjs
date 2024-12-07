import {
	Grid,
	Typography,
	Button,
	Box,
	CardContent,
	Card,
	CardMedia,
} from "@mui/material";
import React from "react";
// import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
// import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
// import { orange } from "@mui/material/colors";
import useDetailMovie from "../../../../hooks/useDetailMovie";

const DetailMovie: React.FC = () => {
	const { data, isError, isLoading } = useDetailMovie();
	// console.log(data);

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error loading movie details</div>;

	const cinemaSchedules = [
		{
			cinema: "Galaxy Kinh Dương Vương",
			type: "2D Phụ Đề",
			times: [
				"16:15",
				"17:15",
				"18:15",
				"19:15",
				"20:15",
				"21:15",
				"22:00",
				"22:30",
			],
		},
		{
			cinema: "Galaxy Quang Trung",
			type: "2D Phụ Đề",
			times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
		},
		{
			cinema: "Galaxy Bến Tre",
			type: "2D Phụ Đề",
			times: ["18:00", "19:00", "20:00", "21:00"],
		},
		{
			cinema: "Galaxy Mipec Long Biên",
			type: "2D Phụ Đề",
			times: ["17:15", "18:15", "19:15", "20:15", "21:15", "22:15"],
		},
	];
	return (
		<Box sx={{ backgroundColor: "#1c1c1e", padding: "60px" }}>
			<Grid container spacing={3}>
				{/* Poster */}

				<Grid item xs={12} md={3}>
					<Card
						sx={{
							backgroundColor: "transparent",
							boxShadow: "none",
						}}
					>
						<CardMedia
							component="img"
							image={data?.hinhAnh}
							alt="Moana 2 Poster"
							sx={{ borderRadius: "10px" }}
						/>
					</Card>
				</Grid>

				{/* Details */}
				<Grid item xs={12} md={8}>
					<Card
						sx={{
							backgroundColor: "transparent",
							boxShadow: "none",
							color: "#fff",
						}}
					>
						<CardContent>
							<Typography
								variant="h4"
								sx={{ fontWeight: "bold", mb: 2 }}
							>
								{data?.tenPhim}
							</Typography>
							<Typography variant="body1" sx={{ mb: 1 }}>
								<strong>Thể loại:</strong> Hoạt hình Mỹ
							</Typography>
							<Typography variant="body1" sx={{ mb: 1 }}>
								<strong>Thời lượng:</strong> 99 phút
							</Typography>
							<Typography variant="body1" sx={{ mb: 1 }}>
								<strong>Đạo diễn:</strong> David G. Derrick Jr.
							</Typography>
							<Typography variant="body1" sx={{ mb: 1 }}>
								<strong>Diễn viên:</strong> Auli'i Cravalho,
								Dwayne Johnson, Alan Tudyk
							</Typography>
							<Typography variant="body1" sx={{ mb: 3 }}>
								<strong>Khởi chiếu:</strong> 29/11/2024
							</Typography>
							<Typography variant="body2" sx={{ mb: 3 }}>
								Moana bước vào cuộc hành trình đến những vùng
								biển đã mất tích ở châu Đại Dương, theo tiếng
								gọi của tổ tiên.
							</Typography>
							<Typography
								variant="body2"
								sx={{
									color: "red",
									fontWeight: "bold",
									mb: 3,
								}}
							>
								Kiểm duyệt: P - Phim được phép phổ biến đến
								người xem ở mọi độ tuổi.
							</Typography>
							<Box sx={{ display: "flex", gap: 2 }}>
								<Button
									variant="contained"
									color="primary"
									sx={{ textTransform: "none" }}
								>
									Đặt vé
								</Button>
								<Button
									variant="outlined"
									color="primary"
									sx={{ textTransform: "none" }}
								>
									Xem trailer
								</Button>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>

			{/* Schedule */}
			<Box
				sx={{
					marginTop: "30px",
					display: "flex",
					justifyContent: "space-around",
					padding: "10px",
					backgroundColor: "#2b2b2d",
					borderRadius: "10px",
				}}
			>
				{["05 Thứ năm", "06 Thứ sáu", "07 Thứ bảy"].map(
					(date, index) => (
						<Box
							key={index}
							sx={{
								textAlign: "center",
								color: "#fff",
							}}
						>
							<Typography
								variant="body2"
								sx={{ fontWeight: "bold" }}
							>
								Th. {date.split(" ")[0]}
							</Typography>
							<Typography variant="body2">
								{date.split(" ")[1]}
							</Typography>
						</Box>
					)
				)}
			</Box>
			<Box sx={{ backgroundColor: "#1c1c1e", padding: "20px" }}>
				{cinemaSchedules.map((cinema, index) => (
					<Box
						key={index}
						sx={{
							borderRadius: "8px",
							padding: "15px",
							marginBottom: "20px",
						}}
					>
						{/* Cinema Name */}
						<Typography
							variant="h6"
							sx={{
								color: "#fff",
								fontWeight: "bold",
								marginBottom: "10px",
							}}
						>
							{cinema.cinema}
						</Typography>
						{/* Type */}
						<Typography
							variant="body1"
							sx={{
								color: "#fff",
								fontSize: "14px",
								marginBottom: "15px",
							}}
						>
							{cinema.type}
						</Typography>
						{/* Showtimes */}
						<Grid container spacing={2}>
							{cinema.times.map((time, idx) => (
								<Grid item key={idx}>
									<Button
										variant="outlined"
										sx={{
											borderColor: "#ccc",
											color: "#fff",
											textTransform: "none",
											borderRadius: "5px",
											padding: "5px 15px",
											"&:hover": {
												borderColor: "#555",
												color: "#000",
											},
										}}
									>
										{time}
									</Button>
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
