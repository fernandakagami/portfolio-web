"use client";

import { allKnowledge } from "@/shared/data/knowledge-parser";

import { KnowledgeModal } from "../KnowledgeModal";

export function Knowledge() {
	return (
		<section className="flex w-full flex-col items-start justify-center gap-10 px-10 pb-10 md:pb-16">
			<h2 className="text-4xl">
				Conhecimentos{" "}
				<span className="inline-block bg-gradient-to-r from-pink-500 via-indigo-400 to-orange-500 bg-clip-text text-3xl font-bold text-transparent">
					.
				</span>
			</h2>

			<div className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-4">
				{allKnowledge.map((knowledge, index) => (
					<KnowledgeModal knowledge={knowledge} key={index} />
				))}
			</div>
		</section>
	);
}
