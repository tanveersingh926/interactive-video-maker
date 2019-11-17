export const required = value => (value ? undefined : "This Field is required");
export const urlIsValid = url => {
  const regx = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  return url.match(regx) ? undefined : "Please enter a valid youtube URL";
};
// export const mustBeNumber = value =>
//   isNaN(value) ? "Must be a number" : undefined;
// export const minValue = min => value =>
//   isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);
