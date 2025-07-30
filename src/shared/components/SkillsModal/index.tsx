import { Icon } from "@iconify/react/dist/iconify.js";

import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type SkillsModalProps = {
	skill: {
		color: string;
		icon: string;
		label: string;
		description: string;
	};
	description: string;
};

export function SkillsModal({ skill, description }: SkillsModalProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Card className={`w-full max-w-sm cursor-pointer ${skill.color}`} key={skill.icon}>
					<CardContent className="flex flex-col items-center justify-center gap-2">
						<Icon icon={skill.icon} width="60" height="60" />
						<p>{skill.label}</p>
					</CardContent>
				</Card>
			</DialogTrigger>
			<DialogContent className="lg:max-w-md" aria-describedby={undefined}>
				<DialogTitle className="DialogTitle">
					<p className="bg-gradient-to-r from-pink-500 via-indigo-400 to-orange-500 bg-clip-text text-lg text-transparent">
						{skill.label}
					</p>
				</DialogTitle>
				<div className="flex flex-col items-start gap-3">
					<p>{description}</p>
				</div>
			</DialogContent>
		</Dialog>
	);
}
