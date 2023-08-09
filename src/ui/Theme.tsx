import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		idle: '#79818c',
		idleBlue: '#2775fc',
		hover: 'black',
		hoverBlue: '#6d18f5',
		active: '#79818c',
	},
	borders: {
		gray: '#dce1e6',
	},
	BGcolors: {
		gray: '#edeef0',
		white: '#ffffff',
		hover: '#f5f6f8',
		active: '#e6e7eb',
	},
	fonts: { sans: 'sans-serif', verdana: 'Verdana', roboto: 'Roboto' },
	fontWeights: {
		light: '300',
		normal: '400',
		bold: '700',
	},
};

const Theme = ({ children }: React.PropsWithChildren) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
