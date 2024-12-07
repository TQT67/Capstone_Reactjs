import { Outlet, useRoutes } from "react-router-dom";

import { AuthLayout } from "../layouts/AuthLayout";
import { MainLayout } from "../layouts/MainLayout";
import { LoginPage } from "../modules/auth/Login";
import { HomePage } from "../modules/public/Home";
import { PATH } from "./path";
import DetailMovie from "../modules/public/Home/Detail/DetailMovie";

const useRouteElements = () => {
	const routes = useRoutes([
		{
			path: PATH.HOME,
			element: (
				<MainLayout>
					<HomePage />
				</MainLayout>
			),
		},
		{
			path: PATH.DETAILS,
			element: (
				<MainLayout>
					<DetailMovie />
				</MainLayout>
			),
		},
		{
			path: PATH.AUTH.ROOT,
			element: <Outlet />,
			children: [
				{
					path: PATH.AUTH.LOGIN,
					element: (
						<AuthLayout>
							<LoginPage />
						</AuthLayout>
					),
				},
			],
		},
		{
			path: "*",
			element: <div>Not found</div>,
		},
	]);
	return { routes };
};

export default useRouteElements;
