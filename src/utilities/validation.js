export const required = value => (value ? undefined : "This Field is required");
export const isUrlValid = url => {
  const regx = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  return url.match(regx) ? undefined : "Please enter a valid youtube URL";
};
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const isEmpty = value => {
  const isEmptyObject = a => {
    if (typeof a.length === "undefined") {
      // it's an Object, not an Array
      const hasNonempty = Object.keys(a).some(function nonEmpty(element) {
        return !isEmpty(a[element]);
      });
      return hasNonempty ? false : isEmptyObject(Object.keys(a));
    }

    return !a.some(function nonEmpty(element) {
      // check if array is really not empty as JS thinks
      return !isEmpty(element); // at least one element should be non-empty
    });
  };
  return (
    value === false ||
    typeof value === "undefined" ||
    value == null ||
    (typeof value === "object" && isEmptyObject(value))
  );
};
