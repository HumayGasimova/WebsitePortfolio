export const leaveACommentInputForm = {
    formIsValid: false,
    inputsArray: [
        {
            id: 1,
            inputFieldName: "Comment",
            elementType: 'textarea',
            elementConfig: {
                type: 'text',
                placeholder: ' Your comment',
                rows: "10"
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: false
                }
            ],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'textareaLeaveComment1',
            controlName: "comment"
        },
        {
            id: 2,
            inputFieldName: "Name",
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Name (required)'
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: false
                }
            ],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'inputLeaveComment1',
            controlName: "firstName"
        },
        { 
            id: 3,
            inputFieldName: "Email",
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Email (required)'
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: false
                },
                {
                    isEmail: true,
                    valid: false
                }
            ],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'inputLeaveComment2',
            controlName: "email"
        },
        {
            id: 4,
            inputFieldName: "Website",
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: ' Website'
            },
            value: '',
            validation: [
                // {
                //     required: true,
                //     valid: false
                // }
            ],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'inputLeaveComment3',
            controlName: "website"
        }
    ]
}
