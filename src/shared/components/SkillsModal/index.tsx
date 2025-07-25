import { Icon } from "@iconify/react/dist/iconify.js";

import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type SkillsModalProps = {
	knowledge: {
		color: string;
		icon: string;
		label: string;
		description: string;
	};
};

export function SkillsModal({ knowledge }: SkillsModalProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Card className={`w-full max-w-sm cursor-pointer ${knowledge.color}`} key={knowledge.icon}>
					<CardContent className="flex flex-col items-center justify-center gap-2">
						<Icon icon={knowledge.icon} width="60" height="60" />
						<p>{knowledge.label}</p>
					</CardContent>
				</Card>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<div className="flex flex-col items-start gap-3">
					<h3 className="bg-gradient-to-r from-pink-500 via-indigo-400 to-orange-500 bg-clip-text text-lg text-transparent">
						{knowledge.label}
					</h3>
					<p>{knowledge.description}</p>
				</div>
			</DialogContent>
		</Dialog>
	);
}
