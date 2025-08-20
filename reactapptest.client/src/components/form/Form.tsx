import { observer } from "mobx-react-lite";
import { useFormContext } from "./FormContext";

type FormProps = React.PropsWithChildren;

function Form({ children }: FormProps) {
	const store = useFormContext();

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				store.handleSubmit(() => {
					console.log("Form submitted with data:", store.formData);
				});
			}}
		>
			{/* Form fields go here */}
			{children}
		</form>
	);
}

const ObserverForm = observer(Form);

ObserverForm.displayName = "Form";

export default ObserverForm;
