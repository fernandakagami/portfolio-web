import { EKnowledge } from "../enums/knowledge";

export const knowledgeParsed: Record<
	EKnowledge,
	{
		value: EKnowledge;
		label: string;
		icon: string;
		color: string;
		description: string;
	}
> = {
	[EKnowledge.HTML]: {
		value: EKnowledge.HTML,
		label: "HTML",
		icon: "devicon-plain:html5",
		color: "hover:text-orange-500",
		description: "Linguagem de marcação utilizada para estruturar o conteúdo da web.",
	},
	[EKnowledge.CSS]: {
		value: EKnowledge.CSS,
		label: "CSS",
		icon: "devicon-plain:css3",
		color: "hover:text-sky-600",
		description: "Linguagem de estilo utilizada para descrever a apresentação do conteúdo da web.",
	},
	[EKnowledge.SASS]: {
		value: EKnowledge.SASS,
		label: "SASS",
		icon: "fa6-brands:sass",
		color: "hover:text-pink-600",
		description: "Pré-processador CSS que permite o uso de variáveis, aninhamento e mixins.",
	},
	[EKnowledge.JAVASCRIPT]: {
		value: EKnowledge.JAVASCRIPT,
		label: "JAVASCRIPT",
		icon: "bi:javascript",
		color: "hover:text-yellow-500",
		description: "Linguagem de programação utilizada para criar interatividade e dinamismo na web.",
	},
	[EKnowledge.REACT]: {
		value: EKnowledge.REACT,
		label: "REACT",
		icon: "simple-icons:react",
		color: "hover:text-cyan-400",
		description: "Biblioteca JavaScript para construir interfaces de usuário de forma declarativa.",
	},
	[EKnowledge.NEXT]: {
		value: EKnowledge.NEXT,
		label: "NEXT",
		icon: "devicon-plain:nextjs",
		color: "hover:text-gray-800",
		description:
			"Framework React para construção de aplicações web com frontend otimizado, componentes serve side, renderização client e server side, entre outros.",
	},
	[EKnowledge.NATIVE]: {
		value: EKnowledge.NATIVE,
		label: "REACT NATIVE",
		icon: "simple-icons:react",
		color: "hover:text-cyan-400",
		description: "Framework para desenvolvimento de aplicativos móveis usando React.",
	},
	[EKnowledge.TAILWIND]: {
		value: EKnowledge.TAILWIND,
		label: "TAILWIND",
		icon: "lineicons:tailwindcss",
		color: "hover:text-cyan-500",
		description: "Framework CSS utilitário para estilização rápida e responsiva de interfaces.",
	},
	[EKnowledge.TYPESCRIPT]: {
		value: EKnowledge.TYPESCRIPT,
		label: "TYPESCRIPT",
		icon: "bi:typescript",
		color: "hover:text-blue-600",
		description: "Superset do JavaScript que adiciona tipagem estática e recursos avançados de linguagem.",
	},
	[EKnowledge.VUE]: {
		value: EKnowledge.VUE,
		label: "VUE",
		icon: "fa6-brands:vuejs",
		color: "hover:text-teal-600",
		description: "Framework JavaScript para construção de interfaces web para o usuário.",
	},
};

export const allKnowledge = Object.values(knowledgeParsed);
