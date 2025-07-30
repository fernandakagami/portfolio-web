import { ESkills } from "../enums/skills";

export const skillsParsed: Record<
	ESkills,
	{
		value: ESkills;
		label: string;
		icon: string;
		color: string;
	}
> = {
	[ESkills.HTML]: {
		value: ESkills.HTML,
		label: "HTML",
		icon: "devicon-plain:html5",
		color: "hover:text-orange-500",
	},
	[ESkills.CSS]: {
		value: ESkills.CSS,
		label: "CSS",
		icon: "devicon-plain:css3",
		color: "hover:text-sky-600",
	},
	[ESkills.SASS]: {
		value: ESkills.SASS,
		label: "SASS",
		icon: "fa6-brands:sass",
		color: "hover:text-pink-600",
	},
	[ESkills.JAVASCRIPT]: {
		value: ESkills.JAVASCRIPT,
		label: "JAVASCRIPT",
		icon: "bi:javascript",
		color: "hover:text-yellow-500",
	},
	[ESkills.REACT]: {
		value: ESkills.REACT,
		label: "REACT",
		icon: "simple-icons:react",
		color: "hover:text-cyan-400",
	},
	[ESkills.NEXT]: {
		value: ESkills.NEXT,
		label: "NEXT",
		icon: "devicon-plain:nextjs",
		color: "hover:text-gray-800",
	},
	[ESkills.REACTNATIVE]: {
		value: ESkills.REACTNATIVE,
		label: "REACT NATIVE",
		icon: "simple-icons:react",
		color: "hover:text-cyan-400",
	},
	[ESkills.TAILWIND]: {
		value: ESkills.TAILWIND,
		label: "TAILWIND",
		icon: "lineicons:tailwindcss",
		color: "hover:text-cyan-500",
	},
	[ESkills.TYPESCRIPT]: {
		value: ESkills.TYPESCRIPT,
		label: "TYPESCRIPT",
		icon: "bi:typescript",
		color: "hover:text-blue-600",
	},
	[ESkills.VUE]: {
		value: ESkills.VUE,
		label: "VUE",
		icon: "fa6-brands:vuejs",
		color: "hover:text-teal-600",
	},
};

export const allSkills = Object.values(skillsParsed);
