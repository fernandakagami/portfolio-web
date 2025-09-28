import { EExperiences } from "@/shared/enums/experiences";
import { EProjects } from "@/shared/enums/projects";
import { EServices } from "@/shared/enums/services";

export const en = {
	Menu: {
		About: "About Me",
		Experiences: "Experiences",
		Projects: "Projects",
		Services: "Services",
		Skills: "Skills",
		Contact: "Contact",
		Rights: "All rights reserved.",
	},
	AboutMe: {
		Title: "Front-end Developer",
		Description:
			"I am a passionate front-end developer dedicated to creating amazing user experiences. I primarily work with Vue, React, Next, TypeScript, and Tailwind.",
	},
	Experiences: {
		Title: "Experiences",
		[EExperiences.PLAN]: {
			Company: "Grupo Plan Marketing",
			Label: "Front-end Developer",
			Period: "june de 2025 - present",
			Description: [
				"Experience with React.js and Next.js",
				"Experience with Vue 2",
				"Experience with React Native",
				"Solid understanding of JavaScript and TypeScript",
				"Experience with state management using Context API and Vuex",
				"Knowledge of componentization and coding best practices",
				"Familiarity with styling tools such as CSS and Tailwind",
				"Experience with consuming and integrating REST APIs",
				"Familiarity with Git, GitHub, and versioning workflows (branches, PRs, code review)",
			],
		},
		[EExperiences.BNP]: {
			Value: EExperiences.BNP,
			Company: "BNP - Soluções em TI",
			Label: "Front-end Developer",
			Period: "february 2024 - june 2025",
			Description: [
				"Experience with React.js and Next.js",
				"Solid understanding of JavaScript and TypeScript",
				"Experience with state management using Context API",
				"Knowledge of componentization and coding best practices",
				"Familiarity with styling tools such as SASS, Tailwind, and ANTD",
				"Experience with consuming and integrating REST APIs",
				"Familiarity with Git, Azure DevOps, and versioning workflows (branches, PRs, code review)",
			],
		},
		[EExperiences.PLUS]: {
			Value: EExperiences.PLUS,
			Company: "3C Plus",
			Label: "Front-end Developer",
			Period: "june 2023 - february 2024",
			Description: [
				"Experiência com Vue 3",
				"Noções sólidas de JavaScript",
				"Experience with state management using Vuex",
				"Knowledge of coding best practices",
				"Familiarity with styling tools such as CSS and Bootstrap",
				"Experience with consuming and integrating REST APIs",
				"Familiarity with Git and versioning workflows (branches, PRs, code review)",
				"Knowledge of WebSocket for real-time data updates",
				"Experience with Scrum and Kanban methodologies",
				"Collaboration with UX and UI professionals",
			],
		},
		[EExperiences.PLURAL]: {
			Value: EExperiences.PLURAL,
			Company: "Instituição Sociedade Plural",
			Label: "Front-end Developer",
			Period: "november 2022 - june 2023",
			Description: [
				"Experience with React.js",
				"Solid understanding of JavaScript",
				"Familiarity with Git and versioning workflows (branches, PRs, code review)",
				"Collaboration with UX and UI professionals",
			],
		},
		[EExperiences.LIBRING]: {
			Value: EExperiences.LIBRING,
			Company: "Libring",
			Label: "Intern Web Developer",
			Period: "august 2018 - november 2018",
			Description: [
				"Experience with Ruby on Rails in a monolithic application",
				"Solid understanding of JavaScript",
				"Experience with MVC architecture",
				"Knowledge of styling tools such as CSS and Bootstrap",
				"Familiarity with Git and versioning workflows (branches, PRs, code review)",
			],
		},
	},
	Projects: {
		Title: "Projects",
		Subtitle: "Project",
		Of: "of",
		SeeProject: "See Project",
		Code: "Code",
		Technologies: "Technologies",
		[EProjects.PROJECT_01]: {
			Label: "Spider-man Multiverse Fan Page",
		},
	},
	Services: {
		Title: "Serviços",
		[EServices.BACKEND]: {
			Label: "Backend Development",
			Description:
				"Creation of robust and scalable systems, focusing on business logic and integration with databases, APIs, and servers.",
		},
		[EServices.FRONTEND]: {
			Label: "Frontend Development",
			Description: "Building modern, responsive, and intuitive interfaces that guarantee the best user experience.",
		},
		[EServices.FULLSTACK]: {
			Label: "Fullstack Development",
			Description:
				"Complete solutions that bring together frontend and backend in a seamless flow. Perfect for projects that require end-to-end development, from UI design to business logic and infrastructure implementation.",
		},
	},
	Skills: {
		Title: "Skills",
		HTML5: "Markup language used to structure web content.",
		CSS: "Style sheet language used to describe the presentation of web content.",
		SASS: "CSS preprocessor that allows the use of variables, nesting, and mixins.",
		JAVASCRIPT: "Programming language used to create interactivity and dynamism on the web.",
		REACT: "JavaScript library for building user interfaces declaratively.",
		NEXT: "React framework for building web applications with optimized frontend, server-side components, client and server-side rendering, among others.",
		REACTNATIVE: "Framework for developing mobile applications.",
		TAILWIND: "Utility-first CSS framework for rapid and responsive interface styling.",
		TYPESCRIPT: "Superset of JavaScript that adds static typing and advanced language features.",
		VUE: "JavaScript framework for building web interfaces for the user.",
	},
	Contact: {
		Title: "Contact",
		Reach: "Reach out to me",
		Caption: "Fill out the form and let's get started on your project",
		Name: "Name",
		Email: "Email",
		Message: "Message",
		Button: "Send Message",
	},
};
