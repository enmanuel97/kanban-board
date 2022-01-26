import moment from "moment";

export async function validateFormAndGetErrors(data) {
    let fields = Object.keys(data);
    let errors = {};

    fields.forEach(field => {
        if(data[field] === '') {
            errors[field] = `${field} is required`;
        }
    });

    return [Object.keys(errors).length > 0 ? false : true, errors];
}
