"use client";

import { Icon } from "@iconify/react";
import { Pacifico } from "next/font/google";
import Link from "next/link";

import { useLanguage } from "@/shared/contexts/language.context";
import { ELanguages } from "@/shared/enums/languages";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { languagesParsed } from "@/shared/data/languages-parser";

import DropdownMobile from "../DropdownMobile";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

export default function Menu() {
	const { handleTranslatedText, toggleLanguage, language } = useLanguage();

	return (
		<div className="sticky top-0 left-0 z-50 flex h-24 w-screen flex-row items-center justify-between bg-black py-0 ps-10 pe-10 text-white xl:top-0 xl:h-screen xl:w-72 xl:flex-col xl:items-start xl:py-24 xl:ps-12 xl:pe-12 2xl:pe-0">
			<div className={pacifico.className}>
				<h1 className="text-5xl">Fer.</h1>
			</div>

			<DropdownMobile />

			<ul className="sr-only mt-10 mb-40 flex flex-col justify-center gap-4 xl:not-sr-only">
				<li className="cursor-pointer">
					<Link href="#about">{handleTranslatedText("Menu", "About")}</Link>
				</li>
				<li className="cursor-pointer">
					<Link href="#experiences">{handleTranslatedText("Menu", "Experiences")}</Link>
				</li>
				<li className="cursor-pointer">
					<Link href="#projects">{handleTranslatedText("Menu", "Projects")}</Link>
				</li>
				<li className="cursor-pointer">
					<Link href="#services">{handleTranslatedText("Menu", "Services")}</Link>
				</li>
				<li className="cursor-pointer">
					<Link href="#skills">{handleTranslatedText("Menu", "Skills")}</Link>
				</li>
				<li className="cursor-pointer">
					<Link href="#skills">{handleTranslatedText("Menu", "Skills")}</Link>
				</li>
				<li className="cursor-pointer">
					<Link href="#contact">{handleTranslatedText("Menu", "Contact")}</Link>
				</li>
			</ul>

			<div className="sr-only xl:not-sr-only">
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
					<li className="mt-6 flex flex-row items-center gap-2">
						<div className="flex flex-row items-center gap-3">
							<Tooltip>
								<TooltipTrigger
									className={`cursor-pointer rounded-lg border-2 px-2 ${language === ELanguages.PT ? "border-indigo-500/200" : "border-black"}`}
								>
									<Icon icon="twemoji:flag-brazil" width="40" onClick={() => toggleLanguage(ELanguages.PT)} />
								</TooltipTrigger>
								<TooltipContent>
									<p>{languagesParsed[ELanguages.PT].label}</p>
								</TooltipContent>
							</Tooltip>

							<Tooltip>
								<TooltipTrigger
									className={`cursor-pointer rounded-lg border-2 px-2 ${language === ELanguages.EN ? "border-indigo-500/200" : "border-black"}`}
								>
									<Icon
										icon="twemoji:flag-united-states"
										width="40"
										height="40"
										onClick={() => toggleLanguage(ELanguages.EN)}
									/>
								</TooltipTrigger>
								<TooltipContent>
									<p>{languagesParsed[ELanguages.EN].label}</p>
								</TooltipContent>
							</Tooltip>
						</div>
					</li>
				</ul>

				<p className="text-xs">©{`${new Date().getFullYear()}`} Fernanda Lima.</p>
				<p className="text-xs">{handleTranslatedText("Menu", "Rights")}</p>
			</div>
		</div>
	);
}
