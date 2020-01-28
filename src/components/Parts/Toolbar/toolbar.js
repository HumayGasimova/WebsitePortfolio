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
* Components
*/

import ToolbarItem from '../../SmallParts/ToolbarItem/toolbarItem';
import Sidebar from '../Sidebar/sidebar';
import Backdrop from '../../../library/Backdrop/backdrop';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Styles
*/

import './toolbar.scss';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

import {
    toolabarItems
} from '../../../constants/toolbarItems';

/**
* Toolbar component definition and export
*/

export const Toolbar = (props) => {

    /**
    * State
    */

    const size = useWindowSize();

    /**
    * Methods
    */

    const toolbarOnClick = (path) => {
        props.history.push(`/${path}`);
    }

    const renderToolbarItems = () => {
        return(
            <>{toolabarItems.map((el) => {
                return(
                    <ToolbarItem 
                        key={el.id}
                        text={el.text}
                        options={el.options}
                        className="toolbar-item"
                        onClick={() => toolbarOnClick(el.path)}
                        optionClassName="toolbar-item-options"
                        // toolBarInit={toolBarInit}
                        // id={el.itemId}
                        // active={el.itemId === props.activatedIcon}
                    />
                )
            })}</>
        )
    }
    const renderBackdrop = () => {
        if(props.menuButtonIsPressed){
            return(
                <>
                    <Backdrop 
                        show 
                        onClick={() => props.menuButtonIsToggled(false)}
                        className="backdrop-home"
                    />
                </>
            )
        }
    }

    /**
    * Markup
    */

    return(
        <>
            <div className="toolbar">
                {renderToolbarItems()}
                <div 
                    className="toolbar-min" 
                    onClick={() => props.toggleMenuButton()}
                >
                    <div className={props.menuButtonIsPressed ? "toolbar-min-line1-effect" : "toolbar-min-line1"}/>
                    <div className={props.menuButtonIsPressed ? "toolbar-min-line2-effect" : "toolbar-min-line2"}/>
                    <div className={props.menuButtonIsPressed ? "toolbar-min-line3-effect" : "toolbar-min-line3"}/>
                </div>
                <div 
                    className="toolbar-menu-text"
                    onClick={() => props.toggleMenuButton()}
                >MENU</div>
            </div>
            <Sidebar 
                menuButtonIsPressed={props.menuButtonIsPressed}
            />
            {props.menuButtonIsPressed ? renderBackdrop() : null}
        </>
    );
}
 export default connect(
    (state) => {
        return {
            menuButtonIsPressed: Selectors.getMenuButtonIsPressedState(state),
        };
    },
    (dispatch) => {
        return {
            toggleMenuButton: bindActionCreators(Actions.toggleMenuButton, dispatch),
            menuButtonIsToggled: bindActionCreators(Actions.menuButtonIsToggled, dispatch),
        };
    }
)(withRouter(Toolbar));
 