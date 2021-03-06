/**
* Libraries
*/

import React, {
    useEffect
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
    H2,
    H4,
    EH2,
    Line2
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
        props.sendComment();
        if(props.getInTouchInputForm.formIsValid){
            clearInputValue("inputGetInTouch1");
            clearInputValue("inputGetInTouch2");
            clearInputValue("inputGetInTouch3");
            clearInputValue("inputGetInTouch4");
            clearInputValue("inputGetInTouch5");
            clearInputValue("inputGetInTouch6");
            clearInputValue("textareaGetInTouch7");
        }
        props.getInTouchInputForm.inputsArray.map(el => {
            if(!el.validField){
                clearInputValue(el.inputID);
            }
        })
    }

    const inputChangeHandler = (e, inputFieldId) => {
        props.setInputFiledValueAndCheckValidation(props.getInTouchInputForm, e, inputFieldId, 'getInTouchInputForm');
    }

    const clearInputValue = (fieldId) => {
        document.getElementById(fieldId).value = '';
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
                                    options={el.elementConfig.options}
                                />
                                <EH2/>
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
            <div className="get-in-touch-header-wrapper">
                <H2>GET IN TOUCH</H2>
                <EH2/>
                <H4>HAVE QUESTIONS? WE’LL BE HAPPY TO ANSWER!</H4>
                <EH2/>
                <EH2/>
                <Line2/>
            </div>
            <EH2/>
            <EH2/>
            <EH2/>
            {renderLeaveACommentForm()}
            <Button
                outerDivClassName="load-more-posts-button-wrapper"
                className="load-more-posts"
                text="SEND"
                onClick={onClickHandler}
            />
        </div>
    );
}

export default connect(
    (state) => {
        return {
            getInTouchInputForm: Selectors.getGetInTouchInputFormState(state)
        };
    },
    (dispatch) => {
        return {
            initGetInTouchForm: bindActionCreators(Actions.initGetInTouchForm, dispatch),
            setInputFiledValueAndCheckValidation: bindActionCreators(Actions.setInputFiledValueAndCheckValidation, dispatch),
            sendComment: bindActionCreators(Actions.sendComment, dispatch)
        };
    }
)(GetInTouch);
 