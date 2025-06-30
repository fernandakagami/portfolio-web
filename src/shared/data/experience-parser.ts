import { EExperience } from "../enums/experience";

export const experienceParsed: Record<
	EExperience,
	{
		value: EExperience;
		company: string;
		label: string;
		period: string;
		description: string[];
	}
> = {
	[EExperience.PLAN]: {
		value: EExperience.PLAN,
		company: "Grupo Plan Marketing",
		label: "Desenvolvedora Frontend",
		period: "junho de 2025 - presente",
		description: [
			"Experiência com React.js e Next.js",
			"Experiência com Vue 2",
			"Experiência com React Native",
			"Noções sólidas de JavaScript",
			"Experiência com gerenciamento de estado com Context API e Vuex",
			"Conhecimentos de componentização e boas práticas de código",
			"Conhecimento em ferramentas de estilização como CSS e Tailwind",
			"Experiência com consumo e integração de API REST",
			"Familiaridade com Git, GitHub e fluxo de versionamento (branches, PRs, code review)",
		],
	},
	[EExperience.BNP]: {
		value: EExperience.BNP,
		company: "BNP - Soluções em TI",
		label: "Desenvolvedora Frontend",
		period: "fevereiro de 2024 - junho de 2025",
		description: [
			"Experiência com React.js e Next.js",
			"Noções sólidas de JavaScript e Typescript",
			"Experiência com gerenciamento de estado com Context API",
			"Conhecimentos de componentização e boas práticas de código",
			"Conhecimento em ferramentas de estilização como SASS, Tailwind e ANTD",
			"Experiência com consumo e integração de API REST",
			"Familiaridade com Git, Azure DevOps e fluxo de versionamento (branches, PRs, code review)",
		],
	},
	[EExperience.PLUS]: {
		value: EExperience.PLUS,
		company: "3C Plus",
		label: "Desenvolvedora Frontend",
		period: "junho de 2023 - fevereiro de 2024",
		description: [
			"Experiência com Vue 3",
			"Noções sólidas de JavaScript",
			"Experiência com gerenciamento de estado com Vuex",
			"Conhecimentos de boas práticas de código",
			"Conhecimento em ferramentas de estilização como CSS e Bootstrap",
			"Experiência com consumo e integração de API REST",
			"Familiaridade com Git e fluxo de versionamento (branches, PRs, code review)",
			"Conhecimento em Websocket para atualização de dados em tempo real",
			"Gerenciamento de trabalho com Scrum e Kanban",
			"Trabalho conjunto com profissionais UX e UI",
		],
	},
	[EExperience.PLURAL]: {
		value: EExperience.PLURAL,
		company: "Instituição Sociedade Plural",
		label: "Desenvolvedora Frontend",
		period: "novembro de 2022 - junho de 2023",
		description: [
			"Experiência com React.js",
			"Noções sólidas de JavaScript",
			"Familiaridade com Git e fluxo de versionamento (branches, PRs, code review)",
			"Trabalho conjunto com profissionais UX e UI",
		],
	},
	[EExperience.LIBRING]: {
		value: EExperience.LIBRING,
		company: "Libring",
		label: "Estagiária de Desenvolvimento",
		period: "agosto de 2018 - novembro de 2018",
		description: [
			"Experiência com Ruby on Rails em aplicação monolítica",
			"Noções sólidas de Javascript",
			"Experiência com arquitetura em MVC",
			"Conhecimento em ferramentas de estilização como CSS e Bootstrap",
			"Familiaridade com Git e fluxo de versionamento (branches, PRs, code review)",
		],
	},
};

export const allExperience = Object.values(experienceParsed);
