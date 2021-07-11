import * as yup from "yup";

import { INVALID_EMAIL, REQUIRED_EMAIL, REQUIRED_PASSWORD} from '../../constants/errors';

// Login Verification
export const loginValidation = yup.object().shape({
  email: yup.string()
    .email(INVALID_EMAIL)
    .required(REQUIRED_EMAIL),
  
  password: yup.string()
    .required(REQUIRED_PASSWORD)
});