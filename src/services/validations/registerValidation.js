import * as yup from "yup";

import { REQUIRED_EMAIL, REQUIRED_LAST_NAME, REQUIRED_NAME, REQUIRED_PASSWORD } from "../../constants/messages";
import { INVALID_EMAIL, INVALID_LENGHT_20, INVALID_PASSWORD } from "../../constants/messages";
import { MAX_LENGTH_20, MIN_LENGTH_6 } from "../../constants/numbers";

export const registerValidation = yup.object({
	name: yup.string()
		.max(MAX_LENGTH_20, INVALID_LENGHT_20)
		.required(REQUIRED_NAME),
  
	lastname: yup.string()
		.max(MAX_LENGTH_20, INVALID_LENGHT_20)
		.required(REQUIRED_LAST_NAME),
  
	email: yup.string()
		.email(INVALID_EMAIL)
		.required(REQUIRED_EMAIL),
  
	password: yup.string()
		.min(MIN_LENGTH_6, INVALID_PASSWORD)
		.required(REQUIRED_PASSWORD),
});