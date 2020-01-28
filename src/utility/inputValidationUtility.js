
export const checkValidity = (value, rules) => {
    let validation = [];

    if(rules){
        rules.map((rule) => {
            if(rule.required){
                let isValid = value.trim() !== '' ;
                validation.push({...rule,valid: isValid});
            }
            if(rule.minLength){
                let isValid = value.length >= rule.minLength;
                validation.push({...rule,valid: isValid});
            }
            if(rule.maxLength){
                let isValid = value.length <= rules.maxLength 
                validation.push({...rule,valid: isValid});
            }
            if(rule.isEmail){
                const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                let isValid = pattern.test(value);
                validation.push({...rule,valid: isValid});
            }
            if(rule.isNumeric){
                const pattern = /^\d+$/;
                let isValid = pattern.test(value);
                validation.push({...rule,valid: isValid});
            }
        })
        
        return validation;
    }
}

export const errorMessages = (inputIdentifier, rules) => {
    let errors = []
    if(rules){
        rules.map((rule) => {
            if(rule.required && rule.valid === false){
                errors.push(`Please enter ${inputIdentifier}`)
            }
            if(rule.minLength && rule.valid === false){
                errors.push(`${inputIdentifier.charAt(0).toUpperCase() + inputIdentifier.slice(1)} should be more than 8 charachters!`)
            }
            if(rule.isEmail && rule.valid === false){
                errors.push(`Please enter valid ${inputIdentifier}`)
            }
        })
    }
    return errors;
}

export const checkValidityOfField = (validation) => {
    let checkIfTrue=[]
    validation.map((el) => {
        checkIfTrue.push(el.valid)
    })

    return checkIfTrue.every(x => x === true);
}
