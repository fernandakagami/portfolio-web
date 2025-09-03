"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
import project01 from "@/assets/images/project01.webp";

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

			<Carousel
				opts={{
					align: "start",
				}}
				className="m-auto h-full w-full max-w-[200px] xl:max-w-2xl"
				setApi={setApi}
			>
				<CarouselContent className="-mt-1 h-[400px]">
					{Array.from({ length: 3 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className="h-full p-1">
								<Card className="flex h-full cursor-pointer items-center justify-center px-6">
									<CardContent className="flex h-full flex-col items-center justify-between p-0">
										<Image src={project01.src} alt={`Project ${index + 1}`} width={630} height={630} />

										<p>teste</p>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="cursor-pointer" />
				<CarouselNext className="cursor-pointer" />
			</Carousel>
			<div className="text-muted-foreground -mt-6 w-full text-center text-sm">
				Slide {current} of {count}
			</div>
		</section>
	);
}
