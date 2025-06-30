"use client";

import { AboutMe } from "@/shared/components/AboutMe";
import Experiences from "@/shared/components/Experiences";
import FooterMobile from "@/shared/components/FooterMobile";
import { MyImage } from "@/shared/components/MyImage";
import { Projects } from "@/shared/components/Projects";
import { Services } from "@/shared/components/Services";

export default function Home() {
	return (
		<>
			<main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-evenly gap-10">
				<AboutMe />
				<Experiences />
				<Projects />
				<Services />
			</main>

			<MyImage className="not-sr-only p-10 md:sr-only" />

			<FooterMobile />
		</>
	);
}
