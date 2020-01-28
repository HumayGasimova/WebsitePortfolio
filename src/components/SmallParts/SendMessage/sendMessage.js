/**
* Libraries
*/

import React, {
    useEffect,
    useState
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';


/**
* Styles
*/

import './sendMessage.scss';

/**
* Components
*/

import Button from '../../../library/Button/button';
import Input from '../../../library/Input/input';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Constants
*/

import {
    sendMessageInputForm
} from '../../../constants/sendMessageInputsForm';

/**
* SendMessage component definition and export
*/

export const SendMessage = (props) => {

    /**
    * Methods
    */

    useEffect(() => {
        props.initSendMessageForm(sendMessageInputForm);
    }, [])

    const onClickHandler = () => {
        props.postMessage();
        clearInputValue("inputSendMessage1");
        clearInputValue("inputSendMessage2");
        clearInputValue("inputSendMessage3");
        clearInputValue("textareaSendMessage1");
    }

    const inputChangeHandler = (e, inputFieldId) => {
        props.setInputFiledValueAndCheckValidation(props.sendMessageForm, e, inputFieldId, 'sendMessageForm');
    }

    const clearInputValue = (fieldId) => {
        document.getElementById(fieldId).value = '';
    }

    const renderLeaveCommentInputs = () => {
        if(props.sendMessageForm.inputsArray){
            return(
                <div className="send-message-form-inputs">
                    {props.sendMessageForm.inputsArray.map((el, i)=>{
                        return(
                            <div key={i} className="send-message-form-input">
                                <div className="send-message-form-input-name">{el.inputFieldName}</div>
                                <Input
                                    className="send-message-input"
                                    onChange={(event) => inputChangeHandler(event, el.id)}
                                    elementType={el.elementType}
                                    rows={el.elementConfig.rows}
                                    validField={el.validField}
                                    touched={el.touched}
                                    erroeMessages={el.errorMessage}
                                    inputID={el.inputID}
                                    textareaID={el.textareaID}
                                    placeholder={el.elementConfig.placeholder}
                                />
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    /**
    * Markup
    */

    return(
        <div className="send-message">
            {renderLeaveCommentInputs()}
            <Button 
                className="post-comment-button"
                text={"Post Comment"}
                onClick={onClickHandler}
                disabled={!props.sendMessageForm.formIsValid}
            />
        </div>
    );
}

export default connect(
    (state) => {
        return {
            sendMessageForm: Selectors.getSendMessageFormState(state),
        };
    },
    (dispatch) => {
        return {
            initSendMessageForm: bindActionCreators(Actions.initSendMessageForm, dispatch),
            setInputFiledValueAndCheckValidation: bindActionCreators(Actions.setInputFiledValueAndCheckValidation, dispatch),
            postMessage: bindActionCreators(Actions.postMessage, dispatch),
        };
    }
)(SendMessage);
 