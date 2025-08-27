import { AboutMe } from "@/shared/components/AboutMe";
import Experiences from "@/shared/components/Experiences";
import FooterMobile from "@/shared/components/FooterMobile";
import { Skills } from "@/shared/components/Skills";
import { MyImage } from "@/shared/components/MyImage";
import { Projects } from "@/shared/components/Projects";
import { Services } from "@/shared/components/Services";

export default function Home() {
	return (
		<>
			<main className="flex flex-col items-center justify-evenly gap-2 xl:gap-0">
				<AboutMe />
				<Experiences />
				<Projects />
				<Services />
				<Skills />
			</main>

			<MyImage className="not-sr-only p-10 xl:sr-only" />

			<FooterMobile />
		</>
	);
}
