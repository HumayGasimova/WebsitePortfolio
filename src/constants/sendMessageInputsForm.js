export const sendMessageInputForm = {
    formIsValid: false,
    inputsArray: [
        {
            id: 1,
            inputFieldName: "Your Name",
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your name'
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
            inputID: 'inputSendMessage1',
            controlName: "name"
        },
        { 
            id: 2,
            inputFieldName: "Email",
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
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
            inputID: 'inputSendMessage3',
            controlName: "email"
        },
        {
            id: 3,
            inputFieldName: "Subject",
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Subject'
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
            inputID: 'inputSendMessage2',
            controlName: "subject"
        },
        {
            id: 4,
            inputFieldName: "Message",
            elementType: 'textarea',
            elementConfig: {
                type: 'text',
                placeholder: 'Your message',
                rows: "5"
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
            inputID: 'textareaSendMessage1',
            controlName: "message"
        }
    ]
}
