import React, { useState } from "react";
import {
	AppBar,
	Divider,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
	Avatar,
	IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CurrentUser } from "../../interfaces/user.inteface";
import { logout } from "../../store/slices/user.slice";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
	const {currentUser} = useSelector((state:CurrentUser)=>state.user)
	const dispatch=useDispatch()
	const navigate = useNavigate()
	const goToLogin = () => {
		navigate(`/auth/login`)
	}
	const goToRegister = () => {
		navigate(`/auth/register`)
	}
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget); // Mở menu
	};

	const handleMenuClose = () => {
		dispatch(logout()); 
		setAnchorEl(null); 
	};

	return (
		<AppBar position="static" className="shadow-none border-b border-gray-200">
			<Toolbar className="flex justify-between items-center">
				<div className="flex items-center">
					<img src="path/to/logo.png" alt="Cybersoft Logo" className="h-12" />
				</div>

				<div className="flex items-center space-x-4">
					{currentUser ? (
						<>
							<IconButton onClick={handleAvatarClick}>
								<Avatar src="path/to/avatar.png" alt="User Avatar" />
							</IconButton>
							<Menu
								anchorEl={anchorEl}
								open={Boolean(anchorEl)}
								onClose={handleMenuClose}
							>
								<MenuItem onClick={handleMenuClose}>Logout</MenuItem>
							</Menu>
						</>
					) : (
						<>
							<Typography
								variant="body2"
								className="text-black cursor-pointer hover:text-gray-700"
								onClick={goToLogin} 
							>
								Đăng Nhập
							</Typography>
							<Divider orientation="vertical" flexItem className="mx-2" />
							<Typography
								variant="body2"
								className="text-black cursor-pointer hover:text-gray-700"
								onClick={goToRegister}
							>
								Đăng Ký
							</Typography>
						</>
					)}
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
