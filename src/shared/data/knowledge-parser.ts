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
		label: "Desenvolvedora Frontend",
		icon: "flowbite:html-solid",
	},
	[EKnowledge.CSS]: {
		value: EKnowledge.CSS,
		label: "Desenvolvedora Frontend",
		icon: "flowbite:css-solid",
	},
	[EKnowledge.SASS]: {
		value: EKnowledge.SASS,
		label: "Desenvolvedora Frontend",
		icon: "fa6-brands:sass",
	},
	[EKnowledge.JAVASCRIPT]: {
		value: EKnowledge.JAVASCRIPT,
		label: "Desenvolvedora Frontend",
		icon: "bi:javascript",
	},
	[EKnowledge.REACT]: {
		value: EKnowledge.REACT,
		label: "Desenvolvedora Frontend",
		icon: "simple-icons:react",
	},
	[EKnowledge.NEXT]: {
		value: EKnowledge.NEXT,
		label: "Desenvolvedora Frontend",
		icon: "skill-icons:nextjs-light",
	},
	[EKnowledge.NATIVE]: {
		value: EKnowledge.NATIVE,
		label: "Desenvolvedora Frontend",
		icon: "simple-icons:react",
	},
	[EKnowledge.TAILWIND]: {
		value: EKnowledge.TAILWIND,
		label: "Desenvolvedora Frontend",
		icon: "lineicons:tailwindcss",
	},
	[EKnowledge.TYPESCRIPT]: {
		value: EKnowledge.TYPESCRIPT,
		label: "Desenvolvedora Frontend",
		icon: "bi:typescript",
	},
	[EKnowledge.VUE]: {
		value: EKnowledge.VUE,
		label: "Desenvolvedora Frontend",
		icon: "devicon:vuejs",
	},
};

export const allKnowledge = Object.values(knowledgeParsed);
