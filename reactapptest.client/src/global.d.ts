declare module "*.css" {
	const content: { [className: string]: string };
	export default content;
}

declare module "*.module.css";

declare module "*.svg" {
	import * as React from "react";
	export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}

declare module "*.png" {
	const value: string;
	export default value;
}

declare module "*.jpg" {
	const value: string;
	export default value;
}

declare module "*.jpeg" {
	const value: string;
	export default value;
}

declare module "*.gif" {
	const value: string;
	export default value;
}

declare module "*.bmp" {
	const value: string;
	export default value;
}

declare module "*.tiff" {
	const value: string;
	export default value;
}

// Permite importar archivos JSON como módulos
declare module "*.json" {
	const value: unknown;
	export default value;
}

// Declaraciones para variables de entorno personalizadas
interface ImportMetaEnv {
	readonly VITE_API_URL: string;
	// Añade aquí otras variables de entorno si es necesario
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
