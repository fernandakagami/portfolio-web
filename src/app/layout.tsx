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
			<body className={`flex ${open.className} flex-col lg:flex-row`}>
				<Providers>
					<Menu />
					<main
						id="about"
						className="mx-auto w-full max-w-screen scroll-mt-[250px] !overflow-x-scroll px-0 lg:max-w-5xl lg:px-10"
					>
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}
