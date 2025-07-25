import { ESkills } from "../enums/skills";

export const skillsParsed: Record<
	ESkills,
	{
		value: ESkills;
		label: string;
		icon: string;
		color: string;
		description: string;
	}
> = {
	[ESkills.HTML]: {
		value: ESkills.HTML,
		label: "HTML",
		icon: "devicon-plain:html5",
		color: "hover:text-orange-500",
		description: "Linguagem de marcação utilizada para estruturar o conteúdo da web.",
	},
	[ESkills.CSS]: {
		value: ESkills.CSS,
		label: "CSS",
		icon: "devicon-plain:css3",
		color: "hover:text-sky-600",
		description: "Linguagem de estilo utilizada para descrever a apresentação do conteúdo da web.",
	},
	[ESkills.SASS]: {
		value: ESkills.SASS,
		label: "SASS",
		icon: "fa6-brands:sass",
		color: "hover:text-pink-600",
		description: "Pré-processador CSS que permite o uso de variáveis, aninhamento e mixins.",
	},
	[ESkills.JAVASCRIPT]: {
		value: ESkills.JAVASCRIPT,
		label: "JAVASCRIPT",
		icon: "bi:javascript",
		color: "hover:text-yellow-500",
		description: "Linguagem de programação utilizada para criar interatividade e dinamismo na web.",
	},
	[ESkills.REACT]: {
		value: ESkills.REACT,
		label: "REACT",
		icon: "simple-icons:react",
		color: "hover:text-cyan-400",
		description: "Biblioteca JavaScript para construir interfaces de usuário de forma declarativa.",
	},
	[ESkills.NEXT]: {
		value: ESkills.NEXT,
		label: "NEXT",
		icon: "devicon-plain:nextjs",
		color: "hover:text-gray-800",
		description:
			"Framework React para construção de aplicações web com frontend otimizado, componentes serve side, renderização client e server side, entre outros.",
	},
	[ESkills.NATIVE]: {
		value: ESkills.NATIVE,
		label: "REACT NATIVE",
		icon: "simple-icons:react",
		color: "hover:text-cyan-400",
		description: "Framework para desenvolvimento de aplicativos móveis.",
	},
	[ESkills.TAILWIND]: {
		value: ESkills.TAILWIND,
		label: "TAILWIND",
		icon: "lineicons:tailwindcss",
		color: "hover:text-cyan-500",
		description: "Framework CSS utilitário para estilização rápida e responsiva de interfaces.",
	},
	[ESkills.TYPESCRIPT]: {
		value: ESkills.TYPESCRIPT,
		label: "TYPESCRIPT",
		icon: "bi:typescript",
		color: "hover:text-blue-600",
		description: "Superset do JavaScript que adiciona tipagem estática e recursos avançados de linguagem.",
	},
	[ESkills.VUE]: {
		value: ESkills.VUE,
		label: "VUE",
		icon: "fa6-brands:vuejs",
		color: "hover:text-teal-600",
		description: "Framework JavaScript para construção de interfaces web para o usuário.",
	},
};

export const allSkills = Object.values(skillsParsed);
