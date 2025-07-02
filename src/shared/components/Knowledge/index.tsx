"use client";

import { Icon } from "@iconify/react/dist/iconify.js";

import { Card, CardContent } from "@/components/ui/card";
import { allKnowledge } from "@/shared/data/knowledge-parser";

export function Knowledge() {
	return (
		<section className="flex w-full flex-col items-start justify-center gap-10 px-10 pb-10">
			<h2 className="text-4xl">
				Conhecimentos{" "}
				<span className="inline-block bg-gradient-to-r from-pink-500 via-indigo-400 to-orange-500 bg-clip-text text-3xl font-bold text-transparent">
					.
				</span>
			</h2>

			<div className="mx-auto max-w-xs">
				{allKnowledge.map((knowledge) => (
					<Card className="w-full max-w-sm" key={knowledge.icon}>
						<CardContent>
							<Icon icon={knowledge.icon} width="60" height="60" />
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
