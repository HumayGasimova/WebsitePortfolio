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

/**
* Styles
*/

import './otherProjects.scss';

/**
* Components
*/

import Project from '../../SmallParts/Project/project';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Constants
*/

import {
    projects
} from '../../../constants/projects';

/**
* OtherProjects component definition and export
*/

export const OtherProjects = (props) => {

    const [slower, setSlower] = useState(0);

    /**
    * Methods
    */

    const handleScroll = () => {
        let scrollHeight = document.body.scrollTop;
        // console.log(scrollHeight)
        setSlower(scrollHeight/2);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const renderProjects = () => {
        return(
            <div className="projects-small-screen">{projects.map((el,i)=>{
                return(
                    <Project
                        key={i}
                        className={`project-number-${i+1}`}
                        projectName={el.projectName}
                        projectDescription={el.projectDescription}
                        projectImage={el.projectImage}
                        developerPhoto={el.developerPhoto}
                        developerName={el.developerName}
                        developerPosition={el.developerPosition}
                        path={el.path}
                    />
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="other-projects"  style={{transform: `translate(0px, -${slower}px)`}}>
            {renderProjects()}
            <div className="other-projects-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. 
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // feedback: Selectors.getFeedbackState(state),
            // dots: Selectors.getDotsState(state)
        };
    },
    (dispatch) => {
        return {
            // startChangingFeedbacks: bindActionCreators(Actions.startChangingFeedbacks, dispatch),
            // stopChangingFeedbacks: bindActionCreators(Actions.stopChangingFeedbacks, dispatch)
        };
    }
)(OtherProjects);
 