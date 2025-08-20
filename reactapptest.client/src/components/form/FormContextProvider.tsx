import { FormContext } from "./FormContext";
import FormStore from "./FormStore";

type FormContextProviderProps = React.PropsWithChildren;

export default function FormContextProvider({ children }: FormContextProviderProps) {
	return <FormContext.Provider value={new FormStore({})}>{children}</FormContext.Provider>;
}
