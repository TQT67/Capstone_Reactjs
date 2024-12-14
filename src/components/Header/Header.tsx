import { AppBar, Divider, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header: React.FC = () => {
	return (
		<AppBar
			position="static"
			className=" shadow-none border-b border-gray-200"
		>
			<Toolbar className="flex justify-between items-center">
				<div className="flex items-center">
					<img
						src="path/to/logo.png"
						alt="Cybersoft Logo"
						className="h-12"
					/>
					<div className="ml-2">
						<Typography
							variant="h6"
							className="text-black font-bold"
						>
							CYBERSOFT
						</Typography>
						<Typography variant="caption" className="text-gray-500">
							ĐÀO TẠO CHUYÊN GIA LẬP TRÌNH
						</Typography>
					</div>
				</div>

				<div className="hidden md:flex space-x-8">
					<Typography
						variant="body1"
						className="text-black cursor-pointer hover:text-gray-700"
					>
						Lịch Chiếu
					</Typography>
					<Typography
						variant="body1"
						className="text-black cursor-pointer hover:text-gray-700"
					>
						Cụm Rạp
					</Typography>
					<Typography
						variant="body1"
						className="text-black cursor-pointer hover:text-gray-700"
					>
						Tin Tức
					</Typography>
					<Typography
						variant="body1"
						className="text-black cursor-pointer hover:text-gray-700"
					>
						Ứng Dụng
					</Typography>
				</div>

				<div className="flex items-center space-x-4">
					<Typography
						variant="body2"
						className="text-black cursor-pointer hover:text-gray-700"
					>
						Đăng Nhập
					</Typography>
					<Divider orientation="vertical" flexItem className="mx-2" />
					<Typography
						variant="body2"
						className="text-black cursor-pointer hover:text-gray-700"
					>
						Đăng Ký
					</Typography>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
