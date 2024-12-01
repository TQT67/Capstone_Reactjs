import React from "react";
import Header from "../../components/Header/Header";

interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default AuthLayout;
