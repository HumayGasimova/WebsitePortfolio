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

import './leaveComment.scss';

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
    leaveCommentInputForm
} from '../../../constants/leaveCommentInputsForm';

/**
* LeaveComment component definition and export
*/

export const LeaveComment = (props) => {

    /**
    * Methods
    */

    useEffect(() => {
        props.initLeaveCommentForm(leaveCommentInputForm);
    }, [])

    const onClickHandler = () => {
        props.postComment();
        if(props.leaveCommentForm.formIsValid){
            clearInputValue("inputLeaveComment1");
            clearInputValue("inputLeaveComment2");
            clearInputValue("inputLeaveComment3");
            clearInputValue("textareaLeaveComment1");
        }
        props.leaveCommentForm.inputsArray.map(el => {
            if(!el.validField){
                clearInputValue(el.inputID);
            }
        })
    }

    const inputChangeHandler = (e, inputFieldId) => {
        props.setInputFiledValueAndCheckValidation(props.leaveCommentForm, e, inputFieldId, 'leaveCommentForm');
    }

    const clearInputValue = (fieldId) => {
        document.getElementById(fieldId).value = '';
    }

    const renderLeaveCommentInputs = () => {
        if(props.leaveCommentForm.inputsArray){
            return(
                <div className="leave-comment-form-inputs">
                    {props.leaveCommentForm.inputsArray.map((el, i)=>{
                        return(
                            <div key={i} className="leave-comment-form-input">
                                <div className="leave-comment-form-input-name">{el.inputFieldName}</div>
                                <Input
                                    className="leave-comment-input"
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
        <div className="leave-comment">
            <div className="leave-comment-text">Leave a comment</div>
            <div className="leave-comment-form">
                {renderLeaveCommentInputs()}
                <Button 
                    className="post-comment-button"
                    text={"Post Comment"}
                    onClick={onClickHandler}
                />
            </div>
          
        </div>
    );
}

export default connect(
    (state) => {
        return {
            leaveCommentForm: Selectors.getLeaveCommentFormState(state),
        };
    },
    (dispatch) => {
        return {
            initLeaveCommentForm: bindActionCreators(Actions.initLeaveCommentForm, dispatch),
            setInputFiledValueAndCheckValidation: bindActionCreators(Actions.setInputFiledValueAndCheckValidation, dispatch),
            postComment: bindActionCreators(Actions.postComment, dispatch),
        };
    }
)(LeaveComment);
 