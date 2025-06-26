import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import Menu from "../shared/components/Menu";

const open = Open_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Portfolio - Fernanda",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<body className={`flex ${open.className} w-screen flex-col md:flex-row`}>
				<Menu />
				<main className="w-full">{children}</main>
			</body>
		</html>
	);
}
