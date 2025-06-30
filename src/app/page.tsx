"use client";

import { AboutMe } from "@/shared/components/AboutMe";
import Experience from "@/shared/components/Experience";
import FooterMobile from "@/shared/components/FooterMobile";
import { MyImage } from "@/shared/components/MyImage";

export default function Home() {
	return (
		<>
			<main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-evenly gap-10">
				<AboutMe />
				<Experience />
			</main>

			<MyImage className="not-sr-only p-10 md:sr-only" />

			<FooterMobile />
		</>
	);
}
