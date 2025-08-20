import type { Meta, StoryObj } from "@storybook/react-vite";

import { http, HttpResponse, delay } from "msw";

import App from "@/App";

const API_URL = "https://localhost:32775/WeatherForecast";

const meta = {
	title: "App",
	component: App,
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

interface Forecast {
	date: string;
	temperatureC: number;
	temperatureF: number;
	summary: string;
}

const TestData = [
	{
		date: "2023-10-01",
		temperatureC: 20,
		temperatureF: 68,
		summary: "Sunny",
	},
	{
		date: "2023-10-02",
		temperatureC: 22,
		temperatureF: 72,
		summary: "Partly cloudy",
	},
] satisfies Forecast[];

// Mocking network requests in Storybook - Story scope
// To mock using components scope or global scope see: https://storybook.js.org/docs/writing-stories/mocking-data-and-modules/mocking-network-requests

export const MockedSuccess: Story = {
	parameters: {
		msw: {
			handlers: [
				http.get(API_URL, () => {
					return HttpResponse.json(TestData);
				}),
			],
		},
	},
};

export const MockedError: Story = {
	parameters: {
		msw: {
			handlers: [
				http.get(API_URL, async () => {
					await delay(800);
					return new HttpResponse(null, {
						status: 403,
					});
				}),
			],
		},
	},
};

export const MockedLongWait: Story = {
	parameters: {
		msw: {
			handlers: [
				http.get(API_URL, async () => {
					await delay(60000); // 1 minute
					return HttpResponse.json(TestData);
				}),
			],
		},
	},
};
