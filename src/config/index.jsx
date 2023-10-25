import { REACT_APP_API_URL, REACT_APP_STRIPE_KEY } from "@env";

export const API_URL = REACT_APP_API_URL;
export const STRIPE_KEY = REACT_APP_STRIPE_KEY;


export const ROLES = {
  student: "Student",
  seller: "Seller",
  admin: "Admin",
};

export const ROLES_TRANSLATE = {
  Student: "Estudiante",
  Seller: "Vendedor",
  Admin: "Administrador",
};

export const DEGREES = [
  {
    label: "Ingeniería de Software y Sistemas Computacionales",
    value: "Ingeniería de Software y Sistemas Computacionales",
  },
];

export const BUILDINGS = [
  {
    label: "A",
    value: "A",
  },
  {
    label: "B",
    value: "B",
  },
  {
    label: "C",
    value: "C",
  },
  {
    label: "D",
    value: "D",
  },
  {
    label: "E",
    value: "E",
  },
];


export const requiredFieldsTranslate = {
  firstName: "Nombre",
  lastName: "Apellido paterno",
  middleName: "Apellido materno",
  email: "Correo",
  password: "Contraseña",
  registrationNumber: "Matrícula",
  accountNumber: "Número de cuenta",
  profilePicture: "Foto de perfil",
  major: "Carrera",
  building: "Edificio",
};


export const requiredProductFieldsTranslate = {
  name : "Nombre",
  price :"Precio",
  quantity :"Cantidad ",
  image : "Imagen",
  description :"Descripción",
  seller : "Vendedor"
};