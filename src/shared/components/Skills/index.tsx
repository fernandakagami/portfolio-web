"use client";

import { allSkills } from "@/shared/data/skills-parser";
import { useLanguage } from "@/shared/contexts/language.context";

import { SkillsModal } from "../SkillsModal";

export function Skills() {
	const { handleTranslatedText } = useLanguage();

	return (
		<section className="flex w-full flex-col items-start justify-center gap-10 px-10 pb-10 md:pb-16">
			<h2 className="text-4xl">
				{handleTranslatedText("Skills", "Title")}{" "}
				<span className="inline-block bg-gradient-to-r from-pink-500 via-indigo-400 to-orange-500 bg-clip-text text-3xl font-bold text-transparent">
					.
				</span>
			</h2>

			<div className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-4">
				{allSkills.map((skill, index) => (
					<SkillsModal skill={skill} description={handleTranslatedText("Skills", skill.label) as string} key={index} />
				))}
			</div>
		</section>
	);
}
