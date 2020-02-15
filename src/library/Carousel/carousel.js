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

import './carousel.scss';

/**
* Components
*/


/**
* Actions
*/

// import * as Actions from '../actions';

/**
* Selectors
*/

// import * as Selectors from '../reducers/selectors';

/**
* Constants
*/

// import {
//     storiesArray
// } from '../constants/storiesArray';

/**
* Carousel component definition and export
*/

export const Carousel = (props) => {

    /**
    * State
    */

    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [selected, setSelected] = useState(0);
    const [move, setMove] = useState(false)

    /**
    * Methods
    */

    const prevOnClick = () => {
        let value = normolizeIndex(selected - 1, array);
        setSelected(value);
        setMove(true);
    }

    const nextOnClick = () => {
        let value = normolizeIndex(selected + 1, array);
        setSelected(value);
        setMove(true);
    }

    const normolizeIndex = (i, array) => {
        if (!array.length) throw Error("empty array");
        const indexModulus = i % array.length;
        console.log(indexModulus)
        if (indexModulus < 0) {
          return array.length + indexModulus;
        } else {
          return indexModulus;
        }
        
    }

    const getRelativeIndexOf = (rIndex, threshold = 0) => {
        let indexArray = [];
        for (let i = rIndex - threshold; i <= rIndex + threshold; i++) {
          indexArray.push(i);
        }
        return indexArray;
    }

    const getCircularArray = (array, activeIndex = 0, thereshold = 0) => {
       return getRelativeIndexOf(activeIndex, thereshold)
            .map(i => normolizeIndex(i, array))
            .map(i => array[i])
    }

    /**
    * Markup
    */

    return(
        <div className="carousel">
            <button onClick={prevOnClick}>Previous</button>
            {getCircularArray(array, selected, 4).map((el, i) => {
                return(
                    <div key={i} className={move ? "carousel-card" : "carousel-card"}>
                        {el}
                    </div>
                )
            })}
            <button onClick={nextOnClick}>Next</button>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // singleStory: Selectors.getSingleStoryState(state),
            // dots: Selectors.getDotsState(state)
        };
    },
    (dispatch) => {
        return {
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch),
            // startInitStories: bindActionCreators(Actions.startInitStories, dispatch),
            // initSingleStory: bindActionCreators(Actions.initSingleStory, dispatch),
        };
    }
)(Carousel);
 