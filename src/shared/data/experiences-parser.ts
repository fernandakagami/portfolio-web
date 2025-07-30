import { EExperiences } from "../enums/experiences";

export const experiencesParsed: Record<
	EExperiences,
	{
		value: EExperiences;
	}
> = {
	[EExperiences.PLAN]: {
		value: EExperiences.PLAN,
	},
	[EExperiences.BNP]: {
		value: EExperiences.BNP,
	},
	[EExperiences.PLUS]: {
		value: EExperiences.PLUS,
	},
	[EExperiences.PLURAL]: {
		value: EExperiences.PLURAL,
	},
	[EExperiences.LIBRING]: {
		value: EExperiences.LIBRING,
	},
};

export const allExperiences = Object.values(experiencesParsed);
