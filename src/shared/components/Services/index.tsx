"use client";

import { Icon } from "@iconify/react/dist/iconify.js";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/shared/contexts/language.context";
import { allServices, servicesParsed } from "@/shared/data/services-parser";

export function Services() {
	const { handleTranslatedText } = useLanguage();

	return (
		<section
			id="services"
			className="flex w-full scroll-mt-[100px] flex-col items-start justify-center gap-10 px-10 pb-10 md:px-20 lg:scroll-mt-0 lg:px-0 lg:pb-16"
		>
			<h2 className="text-4xl">
				{handleTranslatedText("Services", "Title")}{" "}
				<span className="inline-block bg-gradient-to-r from-pink-500 via-indigo-400 to-orange-500 bg-clip-text text-3xl font-bold text-transparent">
					.
				</span>
			</h2>

			<div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-3">
				{allServices.map((service, index) => (
					<Card key={index} className="w-full">
						<CardHeader>
							<CardTitle>
								<Icon icon={servicesParsed[service.value].icon} width="30" />
							</CardTitle>
							<CardDescription>{handleTranslatedText("Services", service.value, "Label")}</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm">{handleTranslatedText("Services", service.value, "Description")}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
