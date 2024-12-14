import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import useListCinema from "../../hooks/useListCinema";
// import {FacebookIcon} from "@mui/icons-material";

const Footer: React.FC = () => {
	const { data: cinemas, isLoading: isLoadingCinemas } = useListCinema();

	return (
		<Box className="bg-[#1C1C1C] text-white py-8">
			<Container maxWidth="lg">
				<Grid container spacing={4}>
					{/* Column 1 - TIX */}
					<Grid item xs={12} sm={3}>
						<Typography variant="h6" className="mb-4 font-bold">
							TIX
						</Typography>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white"
								>
									FAQ
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white"
								>
									Brand Guidelines
								</a>
							</li>
						</ul>
					</Grid>

					{/* Column 2 - ĐỐI TÁC */}
					<Grid item xs={12} sm={3}>
						<Typography variant="h6" className="mb-4 font-bold">
							ĐỐI TÁC
						</Typography>
						<div className="grid grid-cols-4 gap-4">
							{!isLoadingCinemas &&
								cinemas?.map((cinema) => (
									<div
										key={cinema.maHeThongRap}
										className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1"
									>
										<img
											src={cinema.logo}
											alt={cinema.tenHeThongRap}
											className="w-full h-full object-contain"
										/>
									</div>
								))}
						</div>
					</Grid>

					{/* Column 3 - MOBILE APP */}
					<Grid item xs={12} sm={3}>
						<Typography variant="h6" className="mb-4 font-bold">
							MOBILE APP
						</Typography>
						<div className="flex space-x-4">
							{/* <Apple className="text-gray-400 hover:text-white cursor-pointer" />
							<Android className="text-gray-400 hover:text-white cursor-pointer" /> */}
						</div>
					</Grid>

					{/* Column 4 - SOCIAL */}
					<Grid item xs={12} sm={3}>
						<Typography variant="h6" className="mb-4 font-bold">
							SOCIAL
						</Typography>
						<div className="flex space-x-4">
							{/* <FacebookIcon /> */}
							<img
								src="/path/to/zalo-icon.png"
								alt="Zalo"
								className="w-6 h-6 cursor-pointer"
							/>
						</div>
					</Grid>
				</Grid>

				{/* Company Information */}
				<Box className="mt-8 pt-8 border-t border-gray-700">
					<Grid container spacing={2}>
						<Grid item xs={12} sm={3}>
							<img
								src="/path/to/zion-logo.png"
								alt="ZION"
								className="w-24 h-auto"
							/>
						</Grid>
						<Grid item xs={12} sm={7}>
							<Typography
								variant="h6"
								className="mb-2 text-sm font-bold"
							>
								TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
							</Typography>
							<Typography
								variant="body2"
								className="text-gray-400 mb-2"
							>
								Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông,
								Quận 7, Tp. Hồ Chí Minh, Việt Nam.
							</Typography>
							<Typography
								variant="body2"
								className="text-gray-400 mb-2"
							>
								Giấy chứng nhận đăng ký kinh doanh số:
								0101659783,
							</Typography>
							<Typography
								variant="body2"
								className="text-gray-400 mb-2"
							>
								đăng ký thay đổi lần thứ 30, ngày 22 tháng 01
								năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ
								Chí Minh cấp.
							</Typography>
							<Typography
								variant="body2"
								className="text-gray-400"
							>
								Số Điện Thoại (Hotline): 1900 545 436
							</Typography>
						</Grid>
						<Grid item xs={12} sm={2}>
							<img
								src="/path/to/verified-badge.png"
								alt="Verified"
								className="w-24 h-auto"
							/>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
