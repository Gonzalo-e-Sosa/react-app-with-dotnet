import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface InputFieldProps {
	controlProps: React.ComponentProps<typeof Controller>;
	textFieldProps: React.ComponentProps<typeof TextField>;
}

export default function InputField({ controlProps, textFieldProps }: InputFieldProps) {
	return <Controller {...controlProps} render={(props) => <TextField {...props.field} {...textFieldProps} />} />;
}
