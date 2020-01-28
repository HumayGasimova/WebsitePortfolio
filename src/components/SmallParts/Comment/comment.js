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

import './comment.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Components
*/

import Button from '../../../library/Button/button';
import Input from '../../../library/Input/input';

/**
* Icons
*/

import { 
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';

/**
* Constants
*/

import {
    feedbacksArray
} from '../../../constants/feedbacks';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import Img1 from '../../../images/Portrait_Placeholder.png';

/**
* Utility
*/

import * as Utility from "../../../utility";

/**
* Comment component definition and export
*/

export const Comment = (props) => {

    // const [value, setValue] = useState('');
    const [replyInput, setReplyInput] = useState(
        {
            id: 1,
            inputFieldName: "Comment",
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'add comment'
            },
            value: '',
            validation: [],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'comment'
        }
    )

    /**
    * Methods
    */

    const handleOnClick = () => {
        props.addComment(replyInput.value);
        setReplyInput({...replyInput, value: '', validField: false});
        clearInputValue("comment");    
    }

    const clearInputValue = (fieldId) => {
        document.getElementById(fieldId).value = '';
    }

    const onChangeHandler = (e) => {
        let inputField = {
            ...replyInput, 
            value: e.target.value,
            // validation: Utility.checkValidity(e.target.value, inputField.validation),
            // touched: true
        };

        inputField = {
            ...inputField, 
            validField: inputField.value !== '' ? true : false
            // errorMessage: Utility.errorMessages(replyInput.inputFieldName, replyInput.validation),
            // validField: Utility.checkValidityOfField(replyInput.validation),
        }
   
        setReplyInput(inputField);
    }

    const loadImage = (img) => {
        switch(img){
            case 'Name1':
            return Img1;
        }
    }

    const renderInput = () => {
        return(
            <div className="comment-wrapper-input">
                <Input
                    className="add-comment-input"
                    onChange={() => onChangeHandler(event)}
                    elementType={replyInput.elementType}
                    validField={replyInput.validField}
                    inputID={replyInput.inputID}
                />
            {/* <input placeholder="add coment"  id="comment" onChange={() => onChangeHandler(event)}/> */}
                <Button 
                    className="comment-button-input"
                    text={"OK"}
                    onClick={handleOnClick}
                    disabled={!replyInput.validField}
                />
            </div>
        )
    }
    
    /**
    * Markup
    */

    return(
        <div className="comment">
            <div className="comment-image">
                <img src={loadImage(props.image)}/>
            </div>
            <div className="comment-wrapper">
                <div className="comment-full-name">{props.fullName}</div>
                <div className="comment-date">{props.date}</div>
                <div className="comment-text">{props.comment}</div>
                {props.inputIsShown ? 
                    renderInput() : 
                    <Button 
                        className="comment-button"
                        text={"Reply"}
                        onClick={props.onClick}
                        disabled={props.fullName === "Name3"}
                    />}
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // feedbacksToShow: Selectors.getFeedbacksToShowState(state),
        };
    },
    (dispatch) => {
        return {
            // initFeedbacks: bindActionCreators(Actions.initFeedbacks, dispatch),
        };
    }
)(Comment);
 