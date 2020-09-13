import { IFormField } from "../../utils/types";

export function validateEmailField(email: IFormField){
  email.isValid = (/^[a-z0-9-._]+@[a-z0-9-._]+\.[a-z]{2,}$/gi).test(email.value);
  if(!email.isValid) { email.error = "Le format de l'adresse mail est invalide"; }
}
/*
export function validateFirstNameField(firstname: IFormField){
  firstname.isValid = (/^[a-z0-9-._]+@[a-z0-9-._]+\.[a-z]{2,}$/gi).test(firstname.value);
  if(!firstname.isValid) { firstname.error = "Le format du Firstname mail est invalide"; }
}

export function validateLastNameField(lastname: IFormField){
  lastname.isValid = (/^[a-z0-9-._]+@[a-z0-9-._]+\.[a-z]{2,}$/gi).test(lastname.value);
  if(!lastname.isValid) { lastname.error = "Le format du Lastname mail est invalide"; }
}

export function validatePasswordField(password: IFormField){
  password.isValid = (/^[a-z0-9-._]+@[a-z0-9-._]+\.[a-z]{2,}$/gi).test(password.value);
  if(!password.isValid) { password.error = "Le format du Mot de passe mail est invalide"; }
}
*/