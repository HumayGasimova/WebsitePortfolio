/**
* Libraries
*/

import React, {
    useState,
    useEffect
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
* Components
*/

import RelatedPostCard from '../RelatedPostCard/relatedPostCard';
import Slider from '../Slider/slider';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Styles
*/

import './relatedPosts.scss';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* Icons
*/

import { 
    faArrowAltCircleLeft,
    faArrowAltCircleRight
} from '@fortawesome/free-solid-svg-icons';

/**
* Utility
*/

import {
    H2,
    H3,
    H4,
    H5,
    EH1,
    EH2,
    EH4,
    EW1,
    EW2,
    Line1
} from '../../../UtilityComponents';

/**
* RelatedPosts component definition and export
*/

export const RelatedPosts = (props) => {

    /**
    * State
    */

    const [activeObj, setActiveObj] = useState({
        id: 1,
        day: "20th",
        month: "February",
        year: "2020",
        image: "image1",
        header: "NEW YORK OPENING",
        paragraphs: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin eu magna ut sollicitudin. Maecenas eu turpis enim. Phasellus sapien ligula, suscipit non urna elementum, dignissim accumsan mauris. Duis bibendum purus vitae purus scelerisque, ut mollis purus luctus. Vestibulum at auctor urna. Nam facilisis, justo ac pellentesque faucibus, libero magna congue tortor, eu varius ante nisi ac risus.',
            'Curabitur quam lorem, cursus in convallis at, pulvinar quis sem. Integer porttitor ornare purus, vel efficitur ligula cursus vitae. Aliquam erat volutpat. Nulla eu tortor a dolor sodales suscipit. Donec interdum magna ut orci tempus, non porttitor nulla dapibus. Praesent in tristique ex. Suspendisse ut lacinia orci, ut feugiat lorem. Sed rhoncus, lorem et sodales accumsan, urna ipsum cursus mauris, aliquam tincidunt nisl mauris at mi. Quisque elit nisi, auctor id lectus et, ultricies auctor ligula. Vivamus semper quam id eros semper finibus. Fusce rutrum id nibh vitae dapibus. Sed lacus massa, dictum eget nulla iaculis, vehicula volutpat metus. Morbi mattis aliquet tincidunt. Suspendisse cursus interdum felise ultrices.',
            'Integer eu velit efficitur, placerat magna ac, malesuada risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi rutrum augue orci, non bibendum nisi ultricies at. Pellentesque pharetra, nibh vel faucibus elementum, ligula magna congue lacus, et interdum est purus a ligula. Aliquam maximus, eros tincidunt convallis euismod, magna tellus placerat arcu, et consectetur lacus ipsum ac arcu. Maecenas ultrices lectus risus, eget sollicitudin erat facilisis in. Nullam fermentum eget sem sit amet pellentesque. Nunc rhoncus interdum lorem ac lobortis.'
        ],
        comments: [],
        tag: [
            "brunch",
            "coffee",
            "dinner",
            "featured",
            "lunch",
            "openning",
            "specials"
        ],
        popular: 4,
        path: "new-york-opening"
    });

    /**
    * Methods
    */

    useEffect(() => {
        props.startInitRelatedPosts(props.id);
        if(props.id){
            props.addRelatedPostsElement();
        }
        let slider = document.getElementById("slider");
        let isDown = false;
        let startX;
        let scrollLeft;
        let walk;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            // slider.classList.add('active');
            // console.log("mousedown", startX, scrollLeft);
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false
        });
        slider.addEventListener('mouseup', () => {
            isDown = false
            // slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            walk = x - startX;
            slider.scrollLeft = scrollLeft - walk;
            // setXCoordinate(x);
            // feedbacksDiv.scrollLeft = (scrollLeft - walk) * 4; // scrolling with speed
            console.log("mouseMove", {scrollLeft,startX,x,walk});
            if(walk < 0){
                //left
            }else{
                //right
            }
            // console.log("mouseMove", isDown, {scrollLeft,startX,x,walk});
        });
      
    }, [props.id, props.relatedPosts.length]);

   

    const renderRelatedPostsCards = () => {
        
        return(
            <div 
                className="related-post-cards" 
                style={{transform: `translateX(-${(props.relatedPosts.id-1)*(100/props.relatedPosts.length)})%`}}
            >{props.relatedPosts.map((el, i) => {
                return (
                        <RelatedPostCard
                            key={i}
                            image={el.image}
                            header={el.header}
                            day={el.day}
                            month={el.month}
                            year={el.year}
                            comments={el.comments}
                        />
                )
            })}</div>          
        )
    }

    /**
    * Markup
    */

    // return(
    //     <div className="related-posts">
    //         <EH2/>
    //         <H3>RELATED POSTS</H3>
    //         <EH2/>
    //         <Slider
    //             slidesArray={props.relatedPosts}
    //         />
    //     </div>
    // );
    const onPrev = () => {
        let prevId = activeObj.id - 2;
        
        setActiveObj(props.relatedPosts[prevId])
        console.log(activeObj)
    }

    const onNext = () => {
        let nextId = activeObj.id + 2;
        setActiveObj(props.relatedPosts[nextId])
    }

    return(
        <div className="related-posts">
            <EH2/>
            <H3>RELATED POSTS</H3>
            <EH2/>
            <div className="related-posts-wrapper" id="slider">
                <div className="related-posts-arrow-left" onClick={onPrev}>
                    <FontAwesomeIcon 
                        icon={faArrowAltCircleLeft} 
                        size="lg" 
                        color="white"
                    />
                </div>
                <div className="related-posts-inner-wrapper" id="slider">
                   
                    {renderRelatedPostsCards()}
                    
                </div>
                <div className="related-posts-arrow-right" onClick={onNext}>
                    <FontAwesomeIcon 
                        icon={faArrowAltCircleRight} 
                        size="lg" 
                        color="white"
                    />
                </div>
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            relatedPosts: Selectors.getRelatedPostsState(state),
        };
    },
    (dispatch) => {
        return {
            startInitRelatedPosts: bindActionCreators(Actions.startInitRelatedPosts, dispatch),
            addRelatedPostsElement: bindActionCreators(Actions.addRelatedPostsElement, dispatch),
        };
    }
)(RelatedPosts);
 