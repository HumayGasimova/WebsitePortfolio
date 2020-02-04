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

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Styles
*/

import './toolbar.scss';

/**
* Components
*/

import ToolbarItem from '../../SmallParts/ToolbarItem/toolbarItem';
import Backdrop from '../../../library/Backdrop/backdrop';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import MyLogo from '../../../images/FinalLogo.png';
import MyLogoText from '../../../images/crypto.png';

/**
* Constants
*/

import {
    menuItemsArray
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

    useEffect(() => {
        props.initMenuItems(menuItemsArray);
        addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = () => {
        setMenuIsShown(false);
    }

    const toolbarOnClick = (path, id) => {
        props.history.push(props.match.url + (path === "" ? path : `/${path}`));
        props.activateMenuItem(id);
    }

    const toggleMenuButton = () => {
        setMenuIsShown(!menuIsShown);
    }

    const renderToolbarItems = () => {
        return(
            <>{props.menuItems.map((el) => {
                return(
                    <ToolbarItem 
                        key={el.id}
                        text={el.text}
                        active={el.active}
                        menuIsShown={menuIsShown}
                        onClick={() => toolbarOnClick(el.path, el.id)}
                    />
                )
            })}</>
        )
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
            <CSSTransition 
                in={menuIsShown} 
                timeout={285}
                // mountOnEnter
                unmountOnExit
                classNames={{
                    enter: '',
                    enterActive: 'toolbar-invisible-part-open',
                    exit: '',
                    exitActive: 'toolbar-invisible-part-close'
                }}
            > 
                <div className={"toolbar-invisible-mounted"}>
                    {renderToolbarItems()}
                </div> 
            </CSSTransition>
            {menuIsShown ? 
                <Backdrop 
                    show 
                    className={"backdrop-home"}
                    onClick={() => setMenuIsShown(false)}
                /> 
            : null}
        </>
    );
}
 export default connect(
    (state) => {
        return {
            menuItems: Selectors.getMenuItemsState(state),
        };
    },
    (dispatch) => {
        return {
            initMenuItems: bindActionCreators(Actions.initMenuItems, dispatch),
            activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch),
        };
    }
)(withRouter(Toolbar));
 