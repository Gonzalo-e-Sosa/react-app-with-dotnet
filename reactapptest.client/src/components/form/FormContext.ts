import { createContext, useContext } from "react";
import type FormStore from "./FormStore";

export const FormContext = createContext<FormStore | null>(null);

export function useFormContext() {
	const context = useContext(FormContext);
	if (!context) {
		throw new Error("useFormContext must be used within a FormProvider");
	}
	return context;
}
