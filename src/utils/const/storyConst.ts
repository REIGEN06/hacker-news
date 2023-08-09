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
	dead?: boolean;
};

export type StoryTypeProps = {
	data: StoryType;
	source?: boolean;
	text?: boolean;
};

export type ArrayStoryType = StoryType[] | undefined;
