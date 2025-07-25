import {
	ArrowUpRight,
	BookOpenText,
	CircleUser,
	ClipboardList,
	HandPlatter,
	Menu,
	Phone,
	Presentation,
} from "lucide-react";

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

export default function DropdownMobile() {
	const { handleTranslatedText, toggleLanguage, language } = useLanguage();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="not-sr-only md:sr-only">
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

				<DropdownMenuItem onClick={() => toggleLanguage()}>
					<ArrowUpRight size={25} />
					<p>{languagesParsed[language]?.label}</p>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
