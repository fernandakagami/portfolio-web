import { BookOpenText, CircleUser, ClipboardList, HandPlatter, Menu, Phone, Presentation } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropdownMobile() {
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
						SOBRE MIM
					</DropdownMenuItem>
					<DropdownMenuItem>
						<ClipboardList />
						EXPERIÊNCIAS
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Presentation />
						PROJETOS
					</DropdownMenuItem>
					<DropdownMenuItem>
						<HandPlatter />
						SERVIÇOS
					</DropdownMenuItem>
					<DropdownMenuItem>
						<BookOpenText />
						CONHECIMENTOS
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Phone />
						CONTATOS
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
