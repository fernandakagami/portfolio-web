"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
import { allProjects } from "@/shared/data/projects-parser";
import { EProjects } from "@/shared/enums/projects";

export function Projects() {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);
	const { handleTranslatedText } = useLanguage();

	const handleImage = (image: string) => {
		switch (image) {
			case EProjects.PROJECT_01:
				return project01;
			default:
				return project01;
		}
	};

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
					{allProjects.map((project, index) => (
						<CarouselItem key={index}>
							<div className="h-full p-1">
								<Link href={project.link} target="_blank" className="cursor-pointer">
									<Card className="flex h-full items-center justify-center px-1">
										<CardContent className="flex h-full w-full flex-col items-center justify-between px-5 py-0">
											<div className="group text-transparent hover:text-black">
												<Image
													src={handleImage(project.value)}
													alt={project.value}
													width={1000}
													height={1000}
													className="relative rounded-2xl shadow-lg group-hover:opacity-20"
												/>
												<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
													<h3 className="mb-3 text-xl font-bold">
														{handleTranslatedText("Projects", "Technologies")}:
													</h3>

													<ul>
														{project.tecnologies.map((tech, techIndex) => (
															<li key={techIndex}>{tech}</li>
														))}
													</ul>
												</div>
											</div>

											<p>{handleTranslatedText("Projects", project.value, "Label")}</p>
										</CardContent>
									</Card>
								</Link>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="cursor-pointer" />
				<CarouselNext className="cursor-pointer" />
			</Carousel>
			<div className="text-muted-foreground -mt-6 w-full text-center text-sm">
				{handleTranslatedText("Projects", "Subtitle")} {current} {handleTranslatedText("Projects", "Of")} {count}
			</div>
		</section>
	);
}
