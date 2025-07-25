import { ELanguages } from "../enums/languages";

export const languagesParsed: Record<
	ELanguages,
	{
		value: ELanguages;
		label: string;
	}
> = {
	[ELanguages.EN]: {
		value: ELanguages.EN,
		label: "English",
	},
	[ELanguages.PT]: {
		value: ELanguages.PT,
		label: "Português",
	},
};

export const allLanguages = Object.values(languagesParsed);
