/**
* Libraries
*/

import React, {
    useEffect,
    useRef
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Components
*/

import Input from '../../../../library/Input/input';
import Button from '../../../../library/Button/button';

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
    EH0,
    H3,
    EH2
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

    const myRef = useRef(null)

    /**
    * Methods
    */

    useEffect(() => {
        props.initLeaveACommentForm(leaveACommentInputForm);
        props.getLeaveACommentsDivRef(myRef.current.offsetTop);
    }, [])

    const onClickHandler = () => {
        props.postComment();
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
                <div className="leave-a-comment-wrapper">
                    {props.leaveACommentInputForm.inputsArray.map((el, i)=>{
                        return(
                            <div key={i} className={`leave-a-comment-form-${el.inputID}`}>
                                <Input
                                    className="leave-a-comment-input"
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
                                <EH0/>
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
        <div className="leave-a-comment"  ref={myRef}>
            <EH2/>
            <H3>LEAVE A COMMENT</H3>
            <EH2/>
            {renderLeaveACommentForm()}
            <Button
                outerDivClassName="load-more-posts-button-wrapper"
                className="load-more-posts"
                text="POST COMMENT"
                onClick={onClickHandler}
            />
        </div>
    );
}

export default connect(
    (state) => {
        return {
            leaveACommentInputForm: Selectors.getLeaveACommentInputFormState(state)
        };
    },
    (dispatch) => {
        return {
            initLeaveACommentForm: bindActionCreators(Actions.initLeaveACommentForm, dispatch),
            setInputFiledValueAndCheckValidation: bindActionCreators(Actions.setInputFiledValueAndCheckValidation, dispatch),
            postComment: bindActionCreators(Actions.postComment, dispatch)
        };
    }
)(LeaveAComment);
 