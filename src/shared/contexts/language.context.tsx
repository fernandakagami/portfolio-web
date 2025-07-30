"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { pt } from "@/locale/pt";
import { en } from "@/locale/en";

import { ELanguages } from "../enums/languages";

type TLanguageContextProps = {
	language: ELanguages;
	toggleLanguage: (newLanguage: ELanguages) => void;
	getLocale: () => string | undefined;
	handleTranslatedText: (key: string, value: string, title?: string) => string | string[];
};

const LanguageContext = createContext<TLanguageContextProps | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [language, setLanguage] = useState<ELanguages>(ELanguages.PT);

	const toggleLanguage = (newLanguage: ELanguages) => {
		console.log("Language changed to:", newLanguage);
		localStorage.setItem("locale", newLanguage);
		setLanguage(newLanguage);
	};

	function getLocale() {
		if (typeof window !== "undefined") {
			return localStorage.getItem("locale") || ELanguages.PT;
		}
	}

	function handleTranslatedText(key: string, value: string, title?: string): string | string[] {
		const translations: any = language === ELanguages.EN ? en : pt;

		if (key === "Experiences" && title) {
			return translations[key][value][title];
		}

		return translations[key][value];
	}

	useEffect(() => {
		const language = getLocale();

		setLanguage(language as ELanguages);
	}, []);

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage, getLocale, handleTranslatedText }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const ctx = useContext(LanguageContext);

	if (ctx == null) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}

	return ctx;
};
