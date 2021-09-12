import * as yup from "yup";

import { REQUIRED_EMAIL, REQUIRED_NAME, REQUIRED_FIELD } from "../../constants/messages";
import { INVALID_EMAIL } from "../../constants/messages";

export const contactValidation = yup.object({
	name: yup.string()
		.required(REQUIRED_NAME),

	email: yup.string()
		.email(INVALID_EMAIL)
		.required(REQUIRED_EMAIL),
  
	message: yup.string()
		.required(REQUIRED_FIELD),
});