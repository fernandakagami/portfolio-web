import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import Menu from "../shared/components/Menu";

import { Providers } from "./providers";

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
			<body className={`flex ${open.className} flex-col xl:flex-row`}>
				<Providers>
					<Menu />
					<main className="mx-auto w-full max-w-screen px-0 xl:max-w-5xl xl:px-10">{children}</main>
				</Providers>
			</body>
		</html>
	);
}
