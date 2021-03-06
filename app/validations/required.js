import Validation from 'ember-stickler/validation';

export default Validation.create({
  validate(value, errors) {
    if (!value || !value.length) {
      const message = this.getWithDefault('requiredMessage', 'This field is required');
      
      errors.push(message);
    }

    return errors;
  }
});
