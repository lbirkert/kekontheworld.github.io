import type { LICENSES } from "./config";

export type Project = {
	title: string;
	description: string;
	repo: string;
	license: keyof typeof LICENSES;
	demo?: string;
	archive?: boolean;
	fork?: string;
};

export type License = {
	name: string;
	short: string;
};
