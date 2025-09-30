"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, SquareArrowOutUpRight } from "lucide-react";

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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
			className="flex w-full scroll-mt-[100px] flex-col items-start justify-center gap-10 px-10 pb-10 md:px-20 lg:scroll-mt-0 lg:px-0 lg:pb-16"
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
				className="m-0 h-full w-full lg:m-auto lg:max-w-3xl"
				setApi={setApi}
			>
				<CarouselContent className="-mt-1 h-full lg:h-[400px]">
					{allProjects.map((project, index) => (
						<CarouselItem key={index}>
							<div className="h-full p-1">
								<Card className="flex h-full items-center justify-center px-1">
									<CardContent className="flex h-full w-full flex-col items-center justify-center gap-8 px-5 py-5 lg:flex-row">
										<div className="w-full lg:w-3/5">
											<Image
												src={handleImage(project.value)}
												alt={project.value}
												width={1000}
												height={1000}
												className="rounded-2xl shadow-lg group-hover:opacity-20"
											/>
										</div>

										<div className="flex w-full flex-col gap-6 lg:w-2/5">
											<h3 className="text-center text-xl font-bold lg:text-left lg:text-3xl">
												{handleTranslatedText("Projects", project.value, "Label")}
											</h3>

											<div className="mb-6">
												<p className="mb-2 text-lg font-bold text-gray-600">
													{handleTranslatedText("Projects", "Technologies")}
												</p>

												<ul className="flex flex-wrap gap-2">
													{project.tecnologies.map((tech, techIndex) => (
														<li key={techIndex}>
															<Badge variant="outline">{tech}</Badge>
														</li>
													))}
												</ul>
											</div>

											<div className="flex flex-col gap-3 lg:flex-row">
												<Button size="lg" asChild>
													<Link href={project.link} target="_blank" className="cursor-pointer">
														<SquareArrowOutUpRight size={20} />
														{handleTranslatedText("Projects", "SeeProject")}
													</Link>
												</Button>

												<Button size="lg" variant="outline" asChild>
													<Link href={project.github} target="_blank" className="cursor-pointer">
														<Github size={20} />
														{handleTranslatedText("Projects", "Code")}
													</Link>
												</Button>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="sr-only cursor-pointer lg:not-sr-only" />
				<CarouselNext className="sr-only cursor-pointer lg:not-sr-only" />
			</Carousel>
			<div className="text-muted-foreground -mt-6 w-full text-center text-sm">
				{handleTranslatedText("Projects", "Subtitle")} {current} {handleTranslatedText("Projects", "Of")} {count}
			</div>
		</section>
	);
}
