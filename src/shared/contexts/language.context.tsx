"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { pt } from "@/locale/pt";
import { en } from "@/locale/en";

import { ELanguages } from "../enums/languages";

type TLanguageContextProps = {
	language: ELanguages;
	toggleLanguage: () => void;
	getLocale: () => string | undefined;
	handleTranslatedText: (key: string, value: string) => string;
};

const LanguageContext = createContext<TLanguageContextProps | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [language, setLanguage] = useState<ELanguages>(ELanguages.PT);

	const toggleLanguage = () => {
		const newLanguage = language === ELanguages.EN ? ELanguages.PT : ELanguages.EN;
		localStorage.setItem("locale", newLanguage);
		setLanguage(newLanguage);
	};

	function getLocale() {
		if (typeof window !== "undefined") {
			return localStorage.getItem("locale") || ELanguages.PT;
		}
	}

	function handleTranslatedText(key: string, value: string): string {
		const translations: any = language === ELanguages.EN ? pt : en;

		const result: any = translations[key][value];

		console.log(result);

		return result as string;
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
