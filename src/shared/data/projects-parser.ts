import { EProjects } from "../enums/projects";

export const projectsParsed: Record<
	EProjects,
	{
		value: EProjects;
		link: string;
		github: string;
		tecnologies: string[];
	}
> = {
	[EProjects.PROJECT_01]: {
		value: EProjects.PROJECT_01,
		link: "https://fernandakagami.github.io/spiderman-multiverse/",
		github: "https://github.com/fernandakagami/portfolio-web",
		tecnologies: ["HTML", "CSS", "JavaScript"],
	},
};

export const allProjects = Object.values(projectsParsed);
