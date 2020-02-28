import {
    countriesArray
} from './countriesArray';

import {
    partyArray
} from './partyArray';

export const getInTouchInputForm = {
    formIsValid: false,
    inputsArray: [
        {
            id: 1,
            inputFieldName: "Your Name",
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: ' Your Name'
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
            inputID: 'inputGetInTouch1',
            controlName: "name"
        },
        {
            id: 2,
            inputFieldName: "Your Email",
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: ' YourEmail'
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
            inputID: 'inputGetInTouch2',
            controlName: "email"
        },
        { 
            id: 3,
            inputFieldName: "Phone Number",
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: ' Phone Number'
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
            inputID: 'inputGetInTouch3',
            controlName: "phoneNumber"
        },
        {
            id: 4,
            inputFieldName: "Location",
            elementType: 'select',
            elementConfig: {
                type: 'text',
                placeholder: ' Location',
                options: [...countriesArray]
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
            inputID: 'inputGetInTouch4',
            controlName: "location"
        },
        {
            id: 5,
            inputFieldName: "Party of 2",
            elementType: 'select',
            elementConfig: {
                type: 'text',
                placeholder: 'Party of 2',
                options: [...partyArray]
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
            inputID: 'inputGetInTouch5',
            controlName: "partyOf2"
        },
        { 
            id: 6,
            inputFieldName: "Date",
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'Date'
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
            type: "number",
            inputID: 'inputGetInTouch6',
            controlName: "date"
        },
        {
            id: 7,
            inputFieldName: "Special Notes",
            elementType: 'textarea',
            elementConfig: {
                type: 'text',
                placeholder: ' Special Notes',
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
            inputID: 'textareaGetInTouch7',
            controlName: "specialNote"
        }
    ]
}
