"use client";

import { Dot } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { allExperience } from "@/shared/data/experience-parser";
import { EExperience } from "@/shared/enums/experience";

export default function Experiences() {
	return (
		<section className="flex w-full flex-col items-start justify-center gap-10 px-10 pb-10 md:px-0 md:pb-16">
			<h2 className="text-4xl">
				Experiências{" "}
				<span className="inline-block bg-gradient-to-r from-pink-500 via-indigo-400 to-orange-500 bg-clip-text text-3xl font-bold text-transparent">
					.
				</span>
			</h2>

			<Card className="w-full">
				<CardContent className="w-full">
					<Accordion type="single" collapsible className="w-full" defaultValue={EExperience.PLAN}>
						{allExperience.map((experience) => (
							<AccordionItem value={experience.value} key={experience.value}>
								<AccordionTrigger>
									<div className="item-start flex w-full cursor-pointer flex-col justify-between gap-2 md:flex-row md:items-center md:gap-0">
										<span className="text-xl font-bold">{experience.label}</span>
										<span>{experience.period}</span>
									</div>
								</AccordionTrigger>
								<AccordionContent className="flex flex-col gap-4">
									<p className="text-base font-semibold">{experience.company}</p>
									<ul>
										{experience.description.map((item, index) => (
											<li key={index} className="flex flex-row items-center gap-2">
												<Dot />
												<span>{item}</span>
											</li>
										))}
									</ul>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</CardContent>
			</Card>
		</section>
	);
}
