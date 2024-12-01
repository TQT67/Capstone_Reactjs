import React from "react";
import * as yup from "yup";
import { Button, Stack, TextField, Typography, Link } from "@mui/material";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
	taiKhoan: yup.string().required("Tài khoản không được để trống"),
	matKhau: yup.string().required("Mật khẩu không được để trống"),
	nhaplaimatKhau: yup
		.string()
		.required("Nhập lại mật khẩu không được để trống"),
	hoten: yup.string().required("Họ tên không được để trống"),
	email: yup.string().required("Email không được để trống"),
});

type FormValues = yup.InferType<typeof schema>;

const RegisterPage: React.FC = () => {
	const { register, handleSubmit } = useForm();

	// const { mutate: handleLogin, isPending } = useMutation({
	// 	mutationFn: (body: FormValues) => userApi.login(body),
	// 	onSuccess: (currentUser) => {
	// 		dispatch(setCurrentUser(currentUser));
	// 	},
	// });
	const onSubmit = (formValues: FormValues) => {
		// handleLogin(formValues);
		console.log(formValues);
	};

	return (
		<div
			className="h-screen flex justify-center items-center bg-gray-100"
			style={{
				backgroundImage: `url('/movie.jpg')`,
			}}
		>
			<Stack
				className="p-8 border border-gray-300 rounded-xl shadow-xl bg-white w-[400px]"
				spacing={4}
				alignItems="center"
			>
				<Typography variant="h5" fontWeight="bold" align="center">
					Đăng ký
				</Typography>

				<form onSubmit={handleSubmit(onSubmit)} className="w-full">
					<Stack spacing={3}>
						<TextField
							{...register("taiKhoan")}
							label="Tài Khoản *"
							variant="outlined"
							fullWidth
							InputProps={{
								className: "rounded-lg",
							}}
						/>

						<TextField
							{...register("matKhau")}
							label="Mật Khẩu *"
							type="password"
							variant="outlined"
							fullWidth
							InputProps={{
								className: "rounded-lg",
							}}
						/>

						<TextField
							{...register("nhapLaiMatKhau")}
							label="Nhập lại mật khẩu *"
							type="password"
							variant="outlined"
							fullWidth
							InputProps={{
								className: "rounded-lg",
							}}
						/>

						<TextField
							{...register("hoTen")}
							label="Họ Tên *"
							variant="outlined"
							fullWidth
							InputProps={{
								className: "rounded-lg",
							}}
						/>

						<TextField
							{...register("email")}
							label="Email *"
							type="email"
							variant="outlined"
							fullWidth
							InputProps={{
								className: "rounded-lg",
							}}
						/>

						<Button
							type="submit"
							variant="contained"
							color="primary"
							fullWidth
							// disabled={isPending}
							className="rounded-lg py-2"
						>
							Đăng ký
						</Button>
					</Stack>
				</form>

				<Link href="/auth/login" variant="body2" align="center">
					Bạn chưa có tài khoản? Đăng nhập
				</Link>
			</Stack>
		</div>
	);
};

export default RegisterPage;
