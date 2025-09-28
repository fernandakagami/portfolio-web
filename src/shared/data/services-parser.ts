import { EServices } from "../enums/services";

export const servicesParsed: Record<
	EServices,
	{
		value: EServices;
		icon: string;
	}
> = {
	[EServices.BACKEND]: {
		value: EServices.BACKEND,
		icon: "gravity-ui:code",
	},
	[EServices.FRONTEND]: {
		value: EServices.FRONTEND,
		icon: "gg:screen",
	},
	[EServices.FULLSTACK]: {
		value: EServices.FULLSTACK,
		icon: "flowbite:code-branch-outline",
	},
};

export const allServices = Object.values(servicesParsed);
