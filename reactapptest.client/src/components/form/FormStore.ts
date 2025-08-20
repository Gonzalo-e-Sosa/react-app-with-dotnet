import { makeAutoObservable } from "mobx";

type FormData = Record<string, unknown>;

class FormStore {
	private _formData: FormData;

	constructor(initialData: FormData) {
		this._formData = initialData;
		makeAutoObservable(this);
	}

	get formData(): FormData {
		return this._formData;
	}

	set formData(data: FormData) {
		this._formData = data;
	}

	getFieldValue(field: keyof FormData) {
		return this._formData[field];
	}

	setFieldValue(field: keyof FormData, value: FormData[keyof FormData]) {
		this._formData[field] = value;
	}

	resetForm() {
		this._formData = {} as FormData;
	}

	validateForm(): boolean {
		// TODO: Implement validation logic
		return true;
	}

	handleSubmit(callback: () => void) {
		if (this.validateForm()) {
			callback();
		}
	}
}

export default FormStore;
