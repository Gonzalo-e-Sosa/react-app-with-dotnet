// Storybook types
import type { Preview } from "@storybook/react-vite";

// MUI core components and styles
import { ThemeProvider, CssBaseline } from "@mui/material";

// Storybook theme addon
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

// Custom themes
import { lightTheme, darkTheme } from "../src/themes";

// Font imports for MUI
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// MSW (Mock Service Worker) for Storybook
import { initialize, mswLoader } from "msw-storybook-addon";

/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
initialize();

const preview: Preview = {
	loaders: [mswLoader],

	parameters: {
		// To mock using global scope
		// msw: {
		//   handlers: []
		// },

		actions: { argTypesRegex: "^on[A-Z].*" }, // For MUI components controls

		controls: {
			expanded: true, // Control panel is expanded by default (in benefit of MUI components)
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: "todo",
		},
	},

	decorators: [
		withThemeFromJSXProvider({
			GlobalStyles: CssBaseline,
			Provider: ThemeProvider,
			themes: {
				light: lightTheme,
				dark: darkTheme,
			},
			defaultTheme: "light",
		}),
	],
};

export default preview;
