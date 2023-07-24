export type StoryType = {
	id: number;
	text: string;
	by?: string;
	descendants?: number;
	score?: number;
	time?: number;
	title?: string;
	type?: string;
	url?: string;
	kids?: number[];
	deleted?: boolean;
};
export type StoryTypeObject = {
	data: StoryType;
};

export type ArrayStoryType = Array<StoryType> | undefined;
