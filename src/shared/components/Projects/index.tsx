"use client";

import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@/components/ui/carousel";
import { useLanguage } from "@/shared/contexts/language.context";

export function Projects() {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);
	const { handleTranslatedText } = useLanguage();

	useEffect(() => {
		if (!api) {
			return;
		}
		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);
		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<section
			id="projects"
			className="flex w-full flex-col items-start justify-center gap-10 px-10 pb-10 xl:px-0 xl:pb-16"
		>
			<h2 className="text-4xl">
				{handleTranslatedText("Projects", "Title")}{" "}
				<span className="inline-block bg-gradient-to-r from-pink-500 via-indigo-400 to-orange-500 bg-clip-text text-3xl font-bold text-transparent">
					.
				</span>
			</h2>

			<div className="mx-auto max-w-[150px] xl:max-w-xs">
				<Carousel setApi={setApi} className="w-full max-w-xs">
					<CarouselContent>
						{Array.from({ length: 5 }).map((_, index) => (
							<CarouselItem key={index}>
								<Card>
									<CardContent className="flex aspect-square items-center justify-center p-6">
										<span className="text-4xl font-semibold">{index + 1}</span>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
				<div className="text-muted-foreground py-2 text-center text-sm">
					Slide {current} of {count}
				</div>
			</div>
		</section>
	);
}
