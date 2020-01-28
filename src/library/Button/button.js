/**
 * Libraries
 */

import React,{
    Component
} from 'react';

import PropTypes from 'prop-types';

/**
 * Components
 */

/**
 * Styles
 */

import './button.scss';

/**
 * Button component definition and export
 */

class Button extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
        // this.buttonRef = React.createRef();
    }

    /**
    * Methods
    */

    // componentDidMount() {
    //     this.buttonRef.current.addEventListener("click", e => {
   
    //     });
    // }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className={this.props.outerDivClassName}>
                <button 
                    className = {this.props.className}
                    onClick={this.props.onClick}
                    type={this.props.type}
                    disabled={this.props.disabled}
                    // ref={this.buttonRef}
                    id={this.props.id}
                    // style={{ width: `${this.props.width}`, height: `${this.props.height}`, borderRadius: `${this.props.borderRadius}`}}
                    >
                        {this.props.text}
                        {this.props.children}
                </button>
            </div>
        );
    }
}

// Button.propTypes = {
//     type: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//     disabled: PropTypes.bool.isRequired,
//     width: PropTypes.string.isRequired,
//     height: PropTypes.string.isRequired,
//     borderRadius: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired
// }

export default Button;
