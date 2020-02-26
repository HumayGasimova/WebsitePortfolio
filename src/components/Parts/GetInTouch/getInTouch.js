/**
* Libraries
*/

import React, {
    useState,
    useEffect,
    useRef
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

import Input from '../../../library/Input/input';
import Button from '../../../library/Button/button';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Styles
*/

import './getInTouch.scss';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Utility
*/

import {
    EH0,
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
} from '../../UtilityComponents';

/**
* Constants
*/

import {
    getInTouchInputForm
} from '../../../constants/getInTouchInputForm';

/**
* GetInTouch component definition and export
*/

export const GetInTouch = (props) => {


    /**
    * Methods
    */

    useEffect(() => {
        props.initGetInTouchForm(getInTouchInputForm);
    }, [])

    const onClickHandler = () => {
        // props.postComment();
        // if(props.leaveACommentInputForm.formIsValid){
        //     clearInputValue("inputLeaveComment1");
        //     clearInputValue("inputLeaveComment2");
        //     clearInputValue("inputLeaveComment3");
        //     clearInputValue("textareaLeaveComment1");
        // }
        // props.leaveACommentInputForm.inputsArray.map(el => {
        //     if(!el.validField){
        //         clearInputValue(el.inputID);
        //     }
        // })
    }

    const inputChangeHandler = (e, inputFieldId) => {
        // props.setInputFiledValueAndCheckValidation(props.leaveACommentInputForm, e, inputFieldId, 'leaveACommentInputForm');
    }

    const clearInputValue = (fieldId) => {
        // document.getElementById(fieldId).value = '';
    }

    const renderLeaveACommentForm = () => {
        if(props.getInTouchInputForm.inputsArray){
            return(
                <div className="get-in-touch-wrapper">
                    {props.getInTouchInputForm.inputsArray.map((el, i)=>{
                        return(
                            <div key={i} className={`get-in-touch-form-${el.inputID}`}>
                                <Input
                                    className="get-in-touch-input"
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
        <div className="get-in-touch">
            <EH2/>
            <H2 className="h2-center">GET IN TOUCH</H2>
            <EH2/>
            <H4 className="h4-yanone-kaffeesatz-centered">HAVE QUESTIONS? WE’LL BE HAPPY TO ANSWER!</H4>
            <EH2/>
            <EH2/>
            <Line1/>
            <EH2/>
            <EH2/>
            <EH2/>
            {renderLeaveACommentForm()}
            <Button
                outerDivClassName="load-more-posts-button-wrapper"
                className="load-more-posts"
                text="POST COMMENT"
                // onClick={onClickHandler}
            />
        </div>
    );
}

export default connect(
    (state) => {
        return {
            getInTouchInputForm: Selectors.getGetInTouchInputFormState(state),
        };
    },
    (dispatch) => {
        return {
            initGetInTouchForm: bindActionCreators(Actions.initGetInTouchForm, dispatch),
            // setInputFiledValueAndCheckValidation: bindActionCreators(Actions.setInputFiledValueAndCheckValidation, dispatch),
            // postComment: bindActionCreators(Actions.postComment, dispatch),
        };
    }
)(GetInTouch);
 