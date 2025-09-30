import { BookOpenText, Check, CircleUser, ClipboardList, HandPlatter, Mail, Menu, Presentation } from "lucide-react";
import { Icon } from "@iconify/react/dist/iconify.js";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/shared/contexts/language.context";
import { languagesParsed } from "@/shared/data/languages-parser";
import { ELanguages } from "@/shared/enums/languages";

export default function DropdownMobile() {
	const { handleTranslatedText, toggleLanguage, language } = useLanguage();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="not-sr-only lg:sr-only">
				<Button variant="outline" className="text-black">
					<Menu />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="start">
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<a href="#about" className="flex items-center gap-2">
							<CircleUser />
							<p className="">{handleTranslatedText("Menu", "About")}</p>
						</a>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<a href="#experiences" className="flex items-center gap-2">
							<ClipboardList />
							<p>{handleTranslatedText("Menu", "Experiences")}</p>
						</a>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<a href="#projects" className="flex items-center gap-2">
							<Presentation />
							<p>{handleTranslatedText("Menu", "Projects")}</p>
						</a>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<a href="#services" className="flex items-center gap-2">
							<HandPlatter />
							<p>{handleTranslatedText("Menu", "Services")}</p>
						</a>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<a href="#skills" className="flex items-center gap-2">
							<BookOpenText />
							<p>{handleTranslatedText("Menu", "Skills")}</p>
						</a>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<a href="#contact" className="flex items-center gap-2">
							<Mail />
							<p>{handleTranslatedText("Menu", "Contact")}</p>
						</a>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuItem onClick={() => toggleLanguage(ELanguages.PT)}>
					<Icon
						icon="twemoji:flag-brazil"
						width="40"
						height="40"
						className="cursor-pointer"
						onClick={() => toggleLanguage(ELanguages.PT)}
					/>
					<p>{languagesParsed[ELanguages.PT]?.label}</p>
					{language === ELanguages.PT && <Check />}
				</DropdownMenuItem>

				<DropdownMenuItem onClick={() => toggleLanguage(ELanguages.EN)}>
					<Icon
						icon="twemoji:flag-united-states"
						width="40"
						height="40"
						className="cursor-pointer"
						onClick={() => toggleLanguage(ELanguages.EN)}
					/>
					<p>{languagesParsed[ELanguages.EN]?.label}</p>
					{language === ELanguages.EN && <Check />}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
