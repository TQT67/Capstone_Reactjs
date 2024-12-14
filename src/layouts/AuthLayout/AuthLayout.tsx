import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";

interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default AuthLayout;
