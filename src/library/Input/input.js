/**
* Libraries
*/

import React, {
    useEffect,
    useState
} from 'react';

/**
* Styles
*/

import './input.scss';

/**
* Components
*/

/**
* Input component definition and export
*/

export const Input = (props) => {

    /**
    * Methods
    */

    const renderErrorMessage = () => {
        if(props.validField === false && props.touched === true){
            return(
                <div className="error">
                    {props.erroeMessages.map((el, i) => {
                        return(
                            <div key={i}>
                                {el}
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    const renderInputField = () => {
        switch(props.elementType){
            case "input":
                return(
                    <div className={props.validField === false && props.touched === true ? "invalid" : props.className}>
                        <input 
                            value={props.value}
                            type={props.type}
                            onChange={props.onChange}
                            id={props.inputID}
                            placeholder={props.placeholder}
                        />
                        {renderErrorMessage()}
                    </div>
                )
            case "textarea":
                return(
                    <div className={props.validField === false && props.touched === true ? "invalid" : props.className}>
                        <textarea 
                            value={props.value}
                            type={props.type}
                            onChange={props.onChange}
                            rows={props.rows}
                            id={props.inputID}
                            placeholder={props.placeholder}
                        />
                        {renderErrorMessage()}
                    </div>
                )
        }
    }

    /**
    * Markup
    */

    return(
        <>
            {renderInputField()}
        </>
        
    );
}

export default Input;
 