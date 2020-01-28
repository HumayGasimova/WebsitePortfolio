/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Components
 */

/**
 * Styles
 */

import './input.scss';

/**
 * WelcomePage component definition and export
 */

class Input extends Component {

    /**
    * Constructor
    */

    // constructor (props){
    //     super(props);
    //     this.state={
    //         value: ''
    //     }
    // }
    
    // handleOnChange = (e) => {
    //    this.props.getValue(e)
    // }

    // handleOnClick = () => {
    //     alert(this.state.value)
    // }

    // keyPressed = (event) => {
    //     if(event.key === 'Enter'){
    //         // this.props.
    //     }
    // }

    renderInput = () => {
        switch (this.props.elementtype){
            case ('input'):
                return( 
                    <div>
                        <input 
                            className={
                                this.props.valid === "false" && 
                                this.props.shouldvalidate !== "undefined" && 
                                this.props.touched === "true"  ? "invalid" : this.props.classNameInput
                            } 
                            value={this.props.value} 
                            {...this.props.elementconfig}
                            onChange={this.props.onChange}
                        />
                        {this.renderErrorMessage()}
                    </div>
                );
            case ('textarea'):
                return(
                <textarea 
                    className={
                        this.props.valid === "false" && 
                        this.props.shouldvalidate !== "undefined" && 
                        this.props.touched === "true"  ? "invalid" : this.props.classNameInput
                    }  
                    {...this.props}
                    onChange={this.props.onChange}
                />
                );
            case ('select'):
                return(
                <select 
                    className={
                        this.props.valid === "false" && 
                        this.props.shouldvalidate !== "undefined" && 
                        this.props.touched === "true"  ? "invalid" : this.props.classNameInput
                    } 
                    {...this.props}
                    onChange={this.props.onChange}
                >
                   {this.props.elementconfig.options.map(option => (
                    <option 
                        key={option.value}
                        value={option.value}
                    >
                        {option.displayValue}
                    </option>
                   ))}
                </select>
                );
            default:
                return(
                    <input 
                        className={
                            this.props.valid === "false" && 
                            this.props.shouldvalidate !== "undefined" && 
                            this.props.touched === "true"  ? "invalid" : this.props.classNameInput
                        }
                        value={this.props.value} 
                        {...this.props.elementconfig}
                        onChange={this.props.onChange}
                    />
                   
                );
               
        }
    }

    renderErrorMessage = () => {
        let errorMessages = this.props.errormessage;
    
        
        if(this.props.valid === "false" && this.props.touched === "true"){
            return(
                <div className={this.props.classnameerror}>
                    {errorMessages.map((msg, i) => {
                        return(
                            <div key={i}>
                                {msg}
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

    render(){
        return(
            <div 
                className={this.props.className}
            >
                <label>
                    {this.props.label}
                </label>
                {this.renderInput()}
            </div>
        );
    }
}

export default Input;
