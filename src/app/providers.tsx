"use client";

import { LanguageProvider } from "@/shared/contexts/language.context";

type TProviderProps = {
	children: React.ReactNode;
};

export const Providers = ({ children }: TProviderProps) => {
	return <LanguageProvider>{children}</LanguageProvider>;
};
