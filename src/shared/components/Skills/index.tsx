"use client";

import { allSkills } from "@/shared/data/skills-parser";

import { SkillsModal } from "../SkillsModal";

export function Skills() {
	return (
		<section className="flex w-full flex-col items-start justify-center gap-10 px-10 pb-10 md:pb-16">
			<h2 className="text-4xl">
				Conhecimentos{" "}
				<span className="inline-block bg-gradient-to-r from-pink-500 via-indigo-400 to-orange-500 bg-clip-text text-3xl font-bold text-transparent">
					.
				</span>
			</h2>

			<div className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-4">
				{allSkills.map((skill, index) => (
					<SkillsModal knowledge={skill} key={index} />
				))}
			</div>
		</section>
	);
}
