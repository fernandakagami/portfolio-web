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
	const { handleTranslatedText, toggleLanguage } = useLanguage();

	return (
		<div className="sticky left-0 flex h-24 w-screen flex-row items-center justify-between bg-black py-0 ps-10 pe-10 text-white lg:top-0 lg:h-screen lg:w-72 lg:flex-col lg:items-start lg:py-24 lg:ps-12 lg:pe-12 xl:pe-0">
			<div className={pacifico.className}>
				<h1 className="text-5xl">Fer.</h1>
			</div>

			<DropdownMobile />

			<ul className="sr-only mt-10 mb-40 flex flex-col justify-center gap-4 lg:not-sr-only">
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

			<div className="sr-only lg:not-sr-only">
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
								<TooltipTrigger>
									<Icon
										icon="twemoji:flag-brazil"
										width="40"
										height="40"
										className="cursor-pointer"
										onClick={() => toggleLanguage(ELanguages.PT)}
									/>
								</TooltipTrigger>
								<TooltipContent>
									<p>{languagesParsed[ELanguages.PT].label}</p>
								</TooltipContent>
							</Tooltip>

							<Tooltip>
								<TooltipTrigger>
									<Icon
										icon="twemoji:flag-united-states"
										width="40"
										height="40"
										className="cursor-pointer"
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
