import { EProjects } from "../enums/projects";

export const projectsParsed: Record<
	EProjects,
	{
		value: EProjects;
		link: string;
		tecnologies: string[];
	}
> = {
	[EProjects.PROJECT_01]: {
		value: EProjects.PROJECT_01,
		link: "https://fernandakagami.github.io/spiderman-multiverse/",
		tecnologies: ["HTML", "CSS", "JavaScript"],
	},
};

export const allProjects = Object.values(projectsParsed);
