"use client";

import { useLanguage } from "@/shared/contexts/language.context";

export default function FooterMobile() {
	const { handleTranslatedText } = useLanguage();

	return (
		<footer className="not-sr-only sticky bottom-0 flex w-full flex-col items-center justify-center gap-1 bg-black p-5 text-white xl:sr-only">
			<p className="text-xs">©{`${new Date().getFullYear()}`} Fernanda Lima.</p>
			<p className="text-xs">{handleTranslatedText("Menu", "Rights")}</p>
		</footer>
	);
}
