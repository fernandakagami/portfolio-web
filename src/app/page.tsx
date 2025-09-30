import { AboutMe } from "@/shared/components/AboutMe";
import Experiences from "@/shared/components/Experiences";
import FooterMobile from "@/shared/components/FooterMobile";
import { Skills } from "@/shared/components/Skills";
import { MyImage } from "@/shared/components/MyImage";
import { Projects } from "@/shared/components/Projects";
import { Services } from "@/shared/components/Services";
import Contact from "@/shared/components/Contact";

export default function Home() {
	return (
		<>
			<div className="flex flex-col items-center justify-evenly gap-2 lg:gap-0">
				<AboutMe />
				<Experiences />
				<Projects />
				<Services />
				<Skills />
				<Contact />
			</div>

			<MyImage className="not-sr-only p-10 lg:sr-only" />

			<FooterMobile />
		</>
	);
}
