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

import './feedbacks.scss';

/**
* Components
*/

import Feedback from '../../SmallParts/Feedback/feedback';

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

/**
* Feedbacks component definition and export
*/

export const Feedbacks = (props) => {

    const select = React.createRef();

    const [xCoordinate, setXCoordinate] = useState(false);

    const [cardPosition1, setCardPosition1] = useState({left: 0, width:0, id: 0});
    const [cardPosition2, setCardPosition2] = useState({left: 0, width:0, id: 0});
    const [cardPosition3, setCardPosition3] = useState({left: 0, width:0, id: 0});
    const [cardPosition4, setCardPosition4] = useState({left: 0, width:0, id: 0});
    const [cardPosition5, setCardPosition5] = useState({left: 0, width:0, id: 0});
    const [cardPosition6, setCardPosition6] = useState({left: 0, width:0, id: 0});
    const [cardPosition7, setCardPosition7] = useState({left: 0, width:0, id: 0});

    /**
    * Methods
    */

    useEffect(()=>{
        // const feedbacksDivRef = select.current.getBoundingClientRect();

        let feedbacksDiv = document.getElementById("feedbacks");
        let isDown = false;
        let startX;
        let scrollLeft;
        let walk;

        feedbacksDiv.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - feedbacksDiv.offsetLeft;
            scrollLeft = feedbacksDiv.scrollLeft;
            feedbacksDiv.classList.add('active');
        });
        feedbacksDiv.addEventListener('mouseleave', () => {
            isDown = false
            // console.log("mouseLeave");
        });
        feedbacksDiv.addEventListener('mouseup', () => {
            isDown = false
            feedbacksDiv.classList.remove('active');
            // console.log("mouseUp");
        });
        feedbacksDiv.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - feedbacksDiv.offsetLeft;
            walk = x - startX;
            feedbacksDiv.scrollLeft = scrollLeft - walk;
            setXCoordinate(x);
            // feedbacksDiv.scrollLeft = (scrollLeft - walk) * 4; // scrolling with speed
            // console.log("mouseMove", isDown, {scrollLeft,startX,x,walk});
            // console.log("mouseMove", isDown, {scrollLeft,startX,x,walk});
        });

        if(cardPosition1.left < feedbacksDiv.offsetLeft/2 && cardPosition1.left > feedbacksDiv.offsetLeft/2-200){
            props.chooseDotOnScroll(cardPosition2.id);
            // props.startAddingClassNameToFeedbackCard("card1", false);
        }
        if(cardPosition2.left < feedbacksDiv.offsetLeft/2 && cardPosition2.left > feedbacksDiv.offsetLeft/2-200){
            props.chooseDotOnScroll(cardPosition3.id);
            // props.startAddingClassNameToFeedbackCard("card2", false);
        }
        if(cardPosition3.left < feedbacksDiv.offsetLeft/2 && cardPosition3.left > feedbacksDiv.offsetLeft/2-200){
            props.chooseDotOnScroll(cardPosition4.id);
            // props.startAddingClassNameToFeedbackCard("card3", false);
        }
        if(cardPosition4.left < feedbacksDiv.offsetLeft/2 && cardPosition4.left > feedbacksDiv.offsetLeft/2-200){
            props.chooseDotOnScroll(cardPosition5.id);
            // props.startAddingClassNameToFeedbackCard("card4", false);
        }
        if(cardPosition5.left < feedbacksDiv.offsetLeft/2 && cardPosition5.left > feedbacksDiv.offsetLeft/2-200){
            props.chooseDotOnScroll(cardPosition6.id);
            // props.startAddingClassNameToFeedbackCard("card5", false);
        }
        if(cardPosition6.left < feedbacksDiv.offsetLeft/2 && cardPosition6.left > feedbacksDiv.offsetLeft/2-200){
            props.chooseDotOnScroll(cardPosition7.id);
            // props.startAddingClassNameToFeedbackCard("card6", false);
        }
        if(cardPosition7.left < feedbacksDiv.offsetLeft/2 && cardPosition6.left > feedbacksDiv.offsetLeft/2-200){
            props.chooseDotOnScroll(cardPosition1.id);
            // props.startAddingClassNameToFeedbackCard("card7", false);
        }
    }, [cardPosition1])

    const leftOfFeedbackDiv = (left, width, cardId) => {
      
        switch(cardId) {
            case 1:
                // console.log({left, width, cardId})
                return setCardPosition1({left, width, id: cardId});
            case 2:
                // console.log({left, width, cardId})
                return setCardPosition2({left, width, id: cardId});
            case 3:
                return setCardPosition3({left, width, id: cardId});
            case 4:
                return setCardPosition4({left, width, id: cardId});
            case 5:
                return setCardPosition5({left, width, id: cardId});
            case 6:
                return setCardPosition6({left, width, id: cardId});
            case 7:
                // console.log({left, width, cardId})
                return setCardPosition7({left, width, id: cardId});
        }
       
    }

    const renderFeedbacks = () => {
        return(
            <div className="feedbacks-section" id="feedbacks">
                {props.feedbacks.map((el, i) => {
                     return(
                        <Feedback
                            key={i}
                            cardId={el.cardId}
                            id={el.id}
                            image={el.image}
                            icon={el.icon}
                            feedback={el.feedback}
                            name={el.name}
                            position={el.position}
                            getLeft={(left, width, cardId) => leftOfFeedbackDiv(left, width, cardId)}
                            coordinateX={xCoordinate}
                            // leftPosition={props.feedbacksStyle[el.cardId].left}
                        />
                    )
                })}
            </div>
        )
    }

    const renderDots = () => {
        return(
            <div className="feedbacks-dots">
                {props.dots.map((el,i) => {
                    return(
                        <div 
                            key={i} 
                            className={el.chosen ? "feedbacks-dot-chosen": "feedbacks-dot"}
                            // onClick={() => props.chooseFeedback(i + 1)}
                        />
                    )
                })}
            </div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="feedbacks" ref={select}>
          {renderFeedbacks()}
          {renderDots()}
          {/* {console.log("rectPosition",{cardPosition1, cardPosition2, cardPosition3, cardPosition4, cardPosition5})} */}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            dots: Selectors.getDotsState(state),
            feedbacksStyle: Selectors.getFeedbacksStyleState(state),
            feedbacksOnScroll: Selectors.getFeedbacksOnScrollState(state)
        };
    },
    (dispatch) => {
        return {
            chooseDotOnScroll: bindActionCreators(Actions.chooseDotOnScroll, dispatch),
            startAddingClassNameToFeedbackCard: bindActionCreators(Actions.startAddingClassNameToFeedbackCard, dispatch),
            chooseFeedback: bindActionCreators(Actions.chooseFeedback, dispatch),
        };
    }
)(Feedbacks);
 