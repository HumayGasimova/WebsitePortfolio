/**
* Libraries
*/

import React, {
    useState,
    useEffect
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

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Icons
*/

import { 
    faSearch,
    faLink
} from '@fortawesome/free-solid-svg-icons';

/**
* Components
*/

import Input from '../../../../library/Input/input';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Styles
*/

import './leaveAComment.scss';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* Utility
*/

import {
    H2,
    H3,
    H4,
    H5,
    H6,
    EH1,
    EH2,
    EH4,
    EW1,
    EW2,
    Line1
} from '../../../UtilityComponents';

/**
* Constants
*/

import {
    leaveACommentInputForm
} from '../../../../constants/leaveACommentInputForm';

/**
* LeaveAComment component definition and export
*/

export const LeaveAComment = (props) => {

    /**
    * Methods
    */

    useEffect(() => {
        props.initLeaveACommentForm(leaveACommentInputForm);
    }, [])

    const onClickHandler = () => {
        // props.postComment();
        if(props.leaveACommentInputForm.formIsValid){
            clearInputValue("inputLeaveComment1");
            clearInputValue("inputLeaveComment2");
            clearInputValue("inputLeaveComment3");
            clearInputValue("textareaLeaveComment1");
        }
        props.leaveACommentInputForm.inputsArray.map(el => {
            if(!el.validField){
                clearInputValue(el.inputID);
            }
        })
    }

    const inputChangeHandler = (e, inputFieldId) => {
        props.setInputFiledValueAndCheckValidation(props.leaveACommentInputForm, e, inputFieldId, 'leaveACommentInputForm');
    }

    const clearInputValue = (fieldId) => {
        document.getElementById(fieldId).value = '';
    }

    const renderLeaveACommentForm = () => {
        if(props.leaveACommentInputForm.inputsArray){
            return(
                <div className="leave-comment-form-inputs">
                    {props.leaveACommentInputForm.inputsArray.map((el, i)=>{
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
        <div className="leave-a-comment">
            <EH2/>
            <H3>LEAVE A COMMENT</H3>
            <EH2/>
            <div className="leave-a-comment-wrapper">
               {renderLeaveACommentForm()}
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            leaveACommentInputForm: Selectors.getLeaveACommentInputFormState(state),
        };
    },
    (dispatch) => {
        return {
            initLeaveACommentForm: bindActionCreators(Actions.initLeaveACommentForm, dispatch),
            setInputFiledValueAndCheckValidation: bindActionCreators(Actions.setInputFiledValueAndCheckValidation, dispatch),
        };
    }
)(LeaveAComment);
 