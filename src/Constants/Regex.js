export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+={}\[\]:;"'<>,.~`|\\/-]).{8,}$/;

export const nameRegex = /^[A-Za-z\s]+$/;

export const phoneRegex = /^[0-9]{11}$/;

export const usernameRegex = /^[A-Za-z0-9_]{3,16}$/;

export const numberRegex = /^[0-9]+$/;

export const specialCharRegex = /[@$!%*?&#^()_+={}\[\]:;"'<>,.~`|\\/-]/;

export const lowercase = /[a-z]/;

export const uppercase = /[A-Z]/;

export const digitRegex = /[0-9]/;
