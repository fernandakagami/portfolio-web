"use client";

import { Dot } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { allExperiences } from "@/shared/data/experiences-parser";
import { EExperiences } from "@/shared/enums/experiences";
import { useLanguage } from "@/shared/contexts/language.context";

export default function Experiences() {
	const { handleTranslatedText } = useLanguage();

	return (
		<section className="flex w-full flex-col items-start justify-center gap-10 px-10 pb-10 md:px-0 md:pb-16">
			<h2 className="text-4xl">
				{handleTranslatedText("Experiences", "Title")}{" "}
				<span className="inline-block bg-gradient-to-r from-pink-500 via-indigo-400 to-orange-500 bg-clip-text text-3xl font-bold text-transparent">
					.
				</span>
			</h2>

			<Card className="w-full">
				<CardContent className="w-full">
					<Accordion type="single" collapsible className="w-full" defaultValue={EExperiences.PLAN}>
						{allExperiences.map((experience) => {
							const description = handleTranslatedText("Experiences", experience.value, "Description") as string[];

							return (
								<AccordionItem value={experience.value} key={experience.value}>
									<AccordionTrigger className="cursor-pointer">
										<div className="item-start flex w-full flex-col justify-between gap-2 md:flex-row md:items-center md:gap-0">
											<span className="text-xl font-bold">
												{handleTranslatedText("Experiences", experience.value, "Label")}
											</span>
											<span>{handleTranslatedText("Experiences", experience.value, "Period")}</span>
										</div>
									</AccordionTrigger>
									<AccordionContent className="flex flex-col gap-4">
										<p className="text-base font-semibold">
											{handleTranslatedText("Experiences", experience.value, "Company")}
										</p>
										<ul>
											{description.map((item, index) => (
												<li key={index} className="flex flex-row items-center gap-2">
													<Dot />
													<span>{item}</span>
												</li>
											))}
										</ul>
									</AccordionContent>
								</AccordionItem>
							);
						})}
					</Accordion>
				</CardContent>
			</Card>
		</section>
	);
}
