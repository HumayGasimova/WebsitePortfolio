/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    withRouter
} from 'react-router-dom';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Styles
*/

import './toolbar.scss';

/**
* Components
*/

import ToolbarItem from '../../SmallParts/ToolbarItem/toolbarItem';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import MyLogo from '../../../images/FinalLogo.png';
import MyLogoText from '../../../images/crypto.png';

/**
* Constants
*/

import {
    menuItems
} from '../../../constants/menuItems';

/**
* Toolbar component definition and export
*/

export const Toolbar = (props) => {

    /**
    * State
    */

    const [menuIsShown, setMenuIsShown] = useState(false);

    /**
    * Methods
    */

    // const toolbarOnClick = (path) => {
    //     props.history.push(`/${path}`);
    // }

    const renderToolbarItems = () => {
        return(
            <>{menuItems.map((el) => {
                return(
                    <ToolbarItem 
                        key={el.id}
                        // text={el.text}
                        // options={el.options}
                        // className="toolbar-item"
                        // onClick={() => toolbarOnClick(el.path)}
                        // optionClassName="toolbar-item-options"
                        // toolBarInit={toolBarInit}
                        // id={el.itemId}
                        // active={el.itemId === props.activatedIcon}
                    />
                )
            })}</>
        )
    }

    const toggleMenuButton = () => {
        setMenuIsShown(!menuIsShown);
    }

    /**
    * Markup
    */

    return(
        <>
            <div className="toolbar-visible-part">
                <div className="toolbar-wrapper">
                    <div className="toolbar-image-logo">
                        <img src={MyLogo}/>
                    </div>
                    <div className="toolbar-text-logo">
                        <img src={MyLogoText}/>
                    </div>
                </div>
                <div className="toolbar-menu" onClick={toggleMenuButton}>
                    <div className="toolbar-menu-line"/>
                    <div className="toolbar-menu-line"/>
                    <div className="toolbar-menu-line"/>
                </div>
            </div>
            {menuIsShown ? 
                <div className="toolbar-invisible-part">

                </div> 
            : null}
        </>
    );
}
 export default connect(
    (state) => {
        return {
            // menuButtonIsPressed: Selectors.getMenuButtonIsPressedState(state),
        };
    },
    (dispatch) => {
        return {
            // toggleMenuButton: bindActionCreators(Actions.toggleMenuButton, dispatch),
            // menuButtonIsToggled: bindActionCreators(Actions.menuButtonIsToggled, dispatch),
        };
    }
)(withRouter(Toolbar));
 