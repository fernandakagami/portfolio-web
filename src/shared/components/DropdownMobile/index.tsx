import { BookOpenText, CircleUser, ClipboardList, HandPlatter, Menu, Phone, Presentation } from "lucide-react";
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
	const { handleTranslatedText, toggleLanguage } = useLanguage();

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
						<CircleUser />
						<p className="">{handleTranslatedText("Menu", "About")}</p>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<ClipboardList />
						<p>{handleTranslatedText("Menu", "Experiences")}</p>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Presentation />
						<p>{handleTranslatedText("Menu", "Projects")}</p>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<HandPlatter />
						<p>{handleTranslatedText("Menu", "Services")}</p>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<BookOpenText />
						<p>{handleTranslatedText("Menu", "Skills")}</p>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Phone />
						<p>{handleTranslatedText("Menu", "Contact")}</p>
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
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
