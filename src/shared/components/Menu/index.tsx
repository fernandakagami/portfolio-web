"use client";

import { Icon } from "@iconify/react";
import { Pacifico } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/shared/contexts/language.context";
import { languagesParsed } from "@/shared/data/languages-parser";

import DropdownMobile from "../DropdownMobile";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

export default function Menu() {
	const { handleTranslatedText, toggleLanguage, language } = useLanguage();

	return (
		<div className="sticky left-0 flex h-24 w-screen flex-row items-center justify-between bg-black py-0 ps-10 pe-10 text-white md:top-0 md:h-screen md:w-72 md:flex-col md:items-start md:py-24 md:ps-12 md:pe-0">
			<div className={pacifico.className}>
				<h1 className="text-5xl">Fer.</h1>
			</div>

			<DropdownMobile />

			<ul className="sr-only mt-10 mb-40 flex flex-col justify-center gap-4 md:not-sr-only">
				<li className="cursor-pointer">
					<Link href="/">{handleTranslatedText("Menu", "About")}</Link>
				</li>
				<li className="cursor-pointer">
					<Link href="/about">{handleTranslatedText("Menu", "Experiences")}</Link>
				</li>
				<li className="cursor-pointer">
					<Link href="/rooms">{handleTranslatedText("Menu", "Projects")}</Link>
				</li>
				<li className="cursor-pointer">
					<Link href="/rooms">{handleTranslatedText("Menu", "Services")}</Link>
				</li>
				<li className="cursor-pointer">
					<Link href="/rooms">{handleTranslatedText("Menu", "Skills")}</Link>
				</li>
				<li className="cursor-pointer">
					<Link href="/rooms">{handleTranslatedText("Menu", "Contact")}</Link>
				</li>
			</ul>

			<div className="sr-only md:not-sr-only">
				<ul className="mb-10">
					<li className="mb-2 flex flex-row items-center gap-2">
						<a href="https://github.com/fernandakagami" target="_blank">
							<Icon icon="bi:github" width="30" height="30" />
						</a>
						<p>Github</p>
					</li>
					<li className="mb-2 flex flex-row items-center gap-2">
						<a href="https://www.linkedin.com/in/fernanda-lima-94b60b229/" target="_blank">
							<Icon icon="entypo-social:linkedin-with-circle" width="30" height="30" />
						</a>
						<p>Linkedin</p>
					</li>
				</ul>

				<Button
					className="mb-10 w-full cursor-pointer bg-transparent bg-gradient-to-r from-pink-300 via-indigo-200 to-orange-300 text-black hover:bg-gradient-to-r hover:from-pink-400 hover:via-purple-500 hover:to-yellow-500 hover:font-bold hover:text-white"
					onClick={() => toggleLanguage()}
				>
					<span>{languagesParsed[language]?.label}</span>
					<ArrowUpRight />
				</Button>

				<p className="text-xs">©{`${new Date().getFullYear()}`} Fernanda Lima.</p>
				<p className="text-xs">{handleTranslatedText("Menu", "Rights")}</p>
			</div>
		</div>
	);
}
