"use client";

import { FolderCode } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
	return (
		<section className="flex w-full flex-col items-start justify-center gap-10 px-10 pb-10">
			<h2 className="text-4xl">
				Serviços{" "}
				<span className="inline-block bg-gradient-to-r from-pink-500 via-indigo-400 to-orange-500 bg-clip-text text-3xl font-bold text-transparent">
					.
				</span>
			</h2>

			<div className="mx-auto max-w-xs">
				<Card className="w-full max-w-sm">
					<CardHeader>
						<CardTitle>
							<FolderCode />
						</CardTitle>
						<CardDescription>Desenvolvimento</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm">
							Desenvolvimento frontend de sites profissionais, blogs, SaaS, landing pages, ecommerce. sistemas, entre
							outros.
						</p>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
