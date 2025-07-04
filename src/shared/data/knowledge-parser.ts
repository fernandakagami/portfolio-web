import { EKnowledge } from "../enums/knowledge";

export const knowledgeParsed: Record<
	EKnowledge,
	{
		value: EKnowledge;
		label: string;
		icon: string;
	}
> = {
	[EKnowledge.HTML]: {
		value: EKnowledge.HTML,
		label: "HTML",
		icon: "flowbite:html-solid",
	},
	[EKnowledge.CSS]: {
		value: EKnowledge.CSS,
		label: "CSS",
		icon: "flowbite:css-solid",
	},
	[EKnowledge.SASS]: {
		value: EKnowledge.SASS,
		label: "SASS",
		icon: "fa6-brands:sass",
	},
	[EKnowledge.JAVASCRIPT]: {
		value: EKnowledge.JAVASCRIPT,
		label: "JAVASCRIPT",
		icon: "bi:javascript",
	},
	[EKnowledge.REACT]: {
		value: EKnowledge.REACT,
		label: "REACT",
		icon: "simple-icons:react",
	},
	[EKnowledge.NEXT]: {
		value: EKnowledge.NEXT,
		label: "NEXT",
		icon: "devicon:nextjs",
	},
	[EKnowledge.NATIVE]: {
		value: EKnowledge.NATIVE,
		label: "REACT NATIVE",
		icon: "simple-icons:react",
	},
	[EKnowledge.TAILWIND]: {
		value: EKnowledge.TAILWIND,
		label: "TAILWIND",
		icon: "lineicons:tailwindcss",
	},
	[EKnowledge.TYPESCRIPT]: {
		value: EKnowledge.TYPESCRIPT,
		label: "TYPESCRIPT",
		icon: "bi:typescript",
	},
	[EKnowledge.VUE]: {
		value: EKnowledge.VUE,
		label: "VUE",
		icon: "devicon:vuejs",
	},
};

export const allKnowledge = Object.values(knowledgeParsed);
