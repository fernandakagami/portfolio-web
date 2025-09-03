"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/shared/contexts/language.context";

export default function Contact() {
	const { handleTranslatedText } = useLanguage();

	return (
		<section
			id="contact"
			className="flex w-full flex-col items-start justify-center gap-10 px-10 pb-10 xl:px-0 xl:pb-16"
		>
			<h2 className="text-4xl">
				{handleTranslatedText("Contact", "Title")}{" "}
				<span className="inline-block bg-gradient-to-r from-pink-500 via-indigo-400 to-orange-500 bg-clip-text text-3xl font-bold text-transparent">
					.
				</span>
			</h2>

			<Card className="mx-auto w-full max-w-xl">
				<CardHeader className="text-center">
					<CardTitle className="text-lg font-semibold md:text-3xl">
						{handleTranslatedText("Contact", "Reach")}
					</CardTitle>

					<CardDescription className="mt-1 text-base">{handleTranslatedText("Contact", "Caption")}</CardDescription>
				</CardHeader>

				<CardContent>
					<form className="w-full space-y-2" action="https://formsubmit.co/fernandalikadev@gmail.com" method="POST">
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="name">{handleTranslatedText("Contact", "Name")}</Label>
								<Input type="text" id="name" name="name" required></Input>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">{handleTranslatedText("Contact", "Email")}</Label>
								<Input type="email" id="email" name="email" required></Input>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="description">{handleTranslatedText("Contact", "Message")}</Label>
								<Textarea id="description" name="description" rows={5} cols={33} required />
							</div>
						</div>

						<div className="mt-6 flex-col gap-2">
							<Button type="submit" className="w-full cursor-pointer shadow-lg hover:shadow-indigo-500/50">
								{handleTranslatedText("Contact", "Button")}
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</section>
	);
}
