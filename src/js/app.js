export default class Validator {
  constructor(number) {
    this.number = number;

    this.validatePhoneNumber();
  }

  validatePhoneNumber() {
    const validateNumber = this.number.replace(/\s|-/g, '').replace(/\((\d*)\)/g, '$1');
    if (!/\d{12}/.test(validateNumber)) {
      const validateRusNumber = validateNumber.replace(/^\d/, '+7');
      return validateRusNumber;
    }
    const validateChNumber = validateNumber.replace(/^(\d)/, '+$1');
    return validateChNumber;
  }
}
