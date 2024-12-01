import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { userApi } from "../../../apis/user.api";
import { useAppDispatch } from "../../../store/hooks";
import { setCurrentUser } from "../../../store/slices/user.slice";

const schema = yup.object().shape({
	taiKhoan: yup.string().required("Tài khoản không được để trống"),
	matKhau: yup.string().required("Mật khẩu không được để trống"),
});

type FormValues = yup.InferType<typeof schema>;

const LoginPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const { register, handleSubmit } = useForm<FormValues>({
		defaultValues: {
			taiKhoan: "",
			matKhau: "",
		},
	});
	const { mutate: handleLogin, isPending } = useMutation({
		mutationFn: (body: FormValues) => userApi.login(body),
		onSuccess: (currentUser) => {
			dispatch(setCurrentUser(currentUser));
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
							InputProps={{
								className: "rounded-lg",
							}}
						/>

						<Button
							variant="contained"
							color="primary"
							type="submit"
							fullWidth
							disabled={isPending}
							className="rounded-lg py-2"
						>
							Đăng nhập
						</Button>
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
