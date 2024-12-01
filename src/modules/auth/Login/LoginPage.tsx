import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { userApi } from "../../../apis/user.api";
import { useAppDispatch } from "../../../store/hooks";
import { setCurrentUser } from "../../../store/slices/user.slice";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../routes/path";
const schema = yup.object().shape({
	taiKhoan: yup.string().required("Tài khoản không được để trống"),
	matKhau: yup.string().required("Mật khẩu không được để trống"),
});

type FormValues = yup.InferType<typeof schema>;

const LoginPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
		defaultValues: {
			taiKhoan: "",
			matKhau: "",
		},
	});
	const { mutate: handleLogin, isPending } = useMutation({
		mutationFn: (body: FormValues) => userApi.login(body),
		onSuccess: (currentUser) => {
			toast.success("Đăng nhập thành công");
			dispatch(setCurrentUser(currentUser));
			if (currentUser.maLoaiNguoiDung == "KhachHang") {
				navigate(PATH.HOME);
			}
			console.log("success", currentUser);
		},
		onError: (error: any) => {
			toast.error(error.message);
			console.log("error", error);
		},
	});

	const onSubmit = (formValues: FormValues) => {
		handleLogin(formValues);
	};

	return (
		<div
			className="h-screen flex justify-center items-center "
			style={{
				backgroundImage: `url('/movie.jpg')`,
			}}
		>
			<Stack
				justifyItems="center"
				alignItems="center"
				spacing={4}
				width={500}
				className="p-8 border border-gray-300 rounded-xl shadow-xl bg-white"
			>
				<Typography
					component="h1"
					fontWeight={700}
					align="center"
					variant="h4"
				>
					Đăng nhập
				</Typography>

				<form onSubmit={handleSubmit(onSubmit)} className="w-full">
					<Stack spacing={4} width="100%">
						<TextField
							{...register("taiKhoan")}
							label="Tài Khoản *"
							placeholder="Nhập tài khoản"
							fullWidth
							variant="outlined"
							error={!!errors.taiKhoan}
							helperText={errors.taiKhoan?.message}
							InputProps={{
								className: "rounded-lg",
							}}
						/>

						<TextField
							{...register("matKhau")}
							label="Mật khẩu *"
							type="password"
							placeholder="Nhập mật khẩu"
							fullWidth
							variant="outlined"
							error={!!errors.matKhau}
							helperText={errors.matKhau?.message}
							InputProps={{
								className: "rounded-lg",
							}}
						/>

						<LoadingButton
							loading={isPending}
							variant="contained"
							color="primary"
							type="submit"
							fullWidth
							disabled={isPending}
							className="rounded-lg py-2"
						>
							Đăng nhập
						</LoadingButton>
					</Stack>
				</form>
				<Link href="/auth/register" variant="body2" align="center">
					Bạn chưa có tài khoản? Đăng ký
				</Link>
			</Stack>
		</div>
	);
};

export default LoginPage;
