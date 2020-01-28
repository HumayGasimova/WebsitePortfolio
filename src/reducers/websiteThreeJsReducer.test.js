/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

/**
* Reducer
*/

import reducer from './parallaxWebsiteReducer';

/**
* Initial State
*/

import { 
    initialState 
} from './parallaxWebsiteReducer'


describe('parallaxWebsiteReducer', () => {

    it("should return the initial state", () => {
        const action = { type: "NONE" }
        expect(reducer(undefined, action)).toEqual(initialState);
    });

    it("should update menuButtonIsPressed with opposite boolean value and set sidebarOnInit to true", () => {
        const action = { 
            type: actionTypes.TOGGLE_MENU_BUTTON
        }
        const initState = {
            ...initialState, 
            menuButtonIsPressed: false,
            sidebarOnInit: false
        }
        const state = {
            ...initialState, 
            menuButtonIsPressed: true,
            sidebarOnInit: true
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update menuButtonIsPressed with the value passed through the action", () => {
        const action = { 
            type: actionTypes.MENU_BUTTON_IS_TOGGLED,
            val: true
        }
        const initState = {
            ...initialState, 
            menuButtonIsPressed: false
        }
        const state = {
            ...initialState, 
            menuButtonIsPressed: true
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update services with the array passed through the action", () => {
        const action = { 
            type: actionTypes.INIT_SERVICES,
            array: [{a: 1, b: 2}, {a: 4, b: 5}]
        }
        const initState = {
            ...initialState, 
            services: [],
        }
        const state = {
            ...initialState, 
            services: [{a: 1, b: 2}, {a: 4, b: 5}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should set property show, of the object with property cardId that equal to the val passed through the action in services array, to true", () => {
        const action = { 
            type: actionTypes.SHOW_CARD,
            val: "card2"
        }
        const initState = {
            ...initialState, 
            services: [{cardId: "card1", show: true}, {cardId: "card2", show: false}]
        }
        const state = {
            ...initialState, 
            services: [{cardId: "card1", show: true}, {cardId: "card2", show: true}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update members with array passed through the action", () => {
        const action = { 
            type: actionTypes.INIT_TEAM_MEMBERS,
            array: [{a: 1, b: 2}, {a: 4, b: 5}]
        }
        const initState = {
            ...initialState, 
            members: []
        }
        const state = {
            ...initialState, 
            members: [{a: 1, b: 2}, {a: 4, b: 5}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update images with array passed through the action", () => {
        const action = { 
            type: actionTypes.INIT_IMAGES,
            array: [{a: 1, b: 2}, {a: 4, b: 5}]
        }
        const initState = {
            ...initialState, 
            images: []
        }
        const state = {
            ...initialState, 
            images: [{a: 1, b: 2}, {a: 4, b: 5}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update property hover of object in images array with the value passed through the action", () => {
        const action = { 
            type: actionTypes.IMAGE_HOVER,
            id: 1,
            val: true
        }
        const initState = {
            ...initialState, 
            images:  [{id: 1, hover: false}, {id: 2, hover: false}]
        }
        const state = {
            ...initialState, 
            images: [{id: 1, hover: true}, {id: 2, hover: false}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

     it("should move first elemnt of the feedback array to the end", () => {
        const action = { 
            type: actionTypes.FEEDBACK_ON_CHANGE
        }
        const initState = {
            ...initialState, 
            feedback:  ['My','first', 'feedback']
        }
        const state = {
            ...initialState, 
            feedback:  ['first', 'feedback', 'My']
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should set property chosen of the object (which id property equal to dotId(that passed through the action)) in the dots array to true and move all elements of feedback array with index less than feedbackIndex(that passed through the action) to the end of the feedback array", () => {
        const action = { 
            type: actionTypes.START_CHANGING_FEEDBACKS,
            dotId: 2,
            feedbackIndex: 1
        }
        const initState = {
            ...initialState, 
            dots: [{id: 1, chosen: false}, {id: 2, chosen: false}],
            feedback: ['My','first', 'feedback']
        }
        const state = {
            ...initialState, 
            dots: [{id: 1, chosen: false}, {id: 2, chosen: true}],
            feedback: ['first', 'feedback','My']
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should set property chosen of the object (which id property equal to dotId(that passed through the action)) in the dots array to true and move all elements of feedback array with index less than feedbackIndex(that passed through the action) to the end of the feedback array", () => {
        const action = { 
            type: actionTypes.DOTS_ON_CHANGE
        }
        const initState = {
            ...initialState, 
            dots: [{id: 1, chosen: false}, {id: 2, chosen: false}, {id: 3, chosen: true}]
        }
        const state = {
            ...initialState, 
            dots:  [{id: 1, chosen: true}, {id: 2, chosen: false}, {id: 3, chosen: false}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should set property chosen of the object (which id property equal to dotId(that passed through the action)) in the dots array to true and move all elements of feedback array with index less than feedbackIndex(that passed through the action) to the end of the feedback array", () => {
        const action = { 
            type: actionTypes.DOTS_ON_CHANGE
        }
        const initState = {
            ...initialState, 
            dots: [{id: 1, chosen: false}, {id: 2, chosen: true}, {id: 3, chosen: false}]
        }
        const state = {
            ...initialState, 
            dots:  [{id: 1, chosen: false}, {id: 2, chosen: false}, {id: 3, chosen: true}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should set property chosen of the object(that property chosen equal to true) in the dots array to false", () => {
        const action = { 
            type: actionTypes.STOP_CHANGING_FEEDBACKS
        }
        const initState = {
            ...initialState, 
            dots: [{id: 1, chosen: false}, {id: 2, chosen: true}, {id: 3, chosen: false}]
        }
        const state = {
            ...initialState, 
            dots:  [{id: 1, chosen: false}, {id: 2, chosen: false}, {id: 3, chosen: false}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update activatedIcon with the value passed through the action", () => {
        const action = { 
            type: actionTypes.ACTIVATE_ICON,
            id: 'about'
        }
        const initState = {
            ...initialState, 
            activatedIcon: ''
        }
        const state = {
            ...initialState, 
            activatedIcon: 'about'
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update imageIsEnlarged and imageId with values passed through the action, set disableOnNext and disableOnPrevious to false(if val that passed through the action is false)", () => {
        const action = { 
            type: actionTypes.IMAGE_ON_CLICK,
            val: false,
            id: 2
        }
        const initState = {
            ...initialState, 
            imageIsEnlarged: true,
            imageId: 3,
            disableOnNext: true,
            disableOnPrevious: true
        }
        const state = {
            ...initialState, 
            imageIsEnlarged: false,
            imageId: 2,
            disableOnNext: false,
            disableOnPrevious: false
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update imageIsEnlarged and imageId with values passed through the action, set disableOnPrevious to true(if val that passed through the action is true and id is 1)", () => {
        const action = { 
            type: actionTypes.IMAGE_ON_CLICK,
            val: true,
            id: 1
        }
        const initState = {
            ...initialState, 
            images: ['','','','','','','',''],
            imageIsEnlarged: false,
            imageId: 5,
            disableOnNext: false,
            disableOnPrevious: false
        }
        const state = {
            ...initialState, 
            images: ['','','','','','','',''],
            imageIsEnlarged: true,
            imageId: 1,
            disableOnNext: false,
            disableOnPrevious: true
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update imageIsEnlarged and imageId with values passed through the action, set disableOnNext  to true(if val that passed through the action is true and id is equal to the length of the images array)", () => {
        const action = { 
            type: actionTypes.IMAGE_ON_CLICK,
            val: true,
            id: 8
        }
        const initState = {
            ...initialState, 
            images: ['','','','','','','',''],
            imageIsEnlarged: false,
            imageId: 7,
            disableOnNext: false,
            disableOnPrevious: false
        }
        const state = {
            ...initialState, 
            images: ['','','','','','','',''],
            imageIsEnlarged: true,
            imageId: 8,
            disableOnNext: true,
            disableOnPrevious: false
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update imageId by adding 1 to the value of id that passed through the reducer, set disableOnPrevious to false, and set disableOnNext to true (if the length of images array minus 1 is equal to id that passed through the action) ", () => {
        const action = { 
            type: actionTypes.NEXT_IMAGE,
            id: 5
        }
        const initState = {
            ...initialState, 
            images: ['','','','','',''],
            imageId: 3,
            disableOnNext: false,
            disableOnPrevious: true
        }
        const state = {
            ...initialState, 
            images: ['','','','','',''],
            imageId: 6,
            disableOnNext: true,
            disableOnPrevious: false
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update imageId by adding 1 to the value of id that passed through the reducer, set disableOnPrevious to false, and set disableOnNext to false (if the length of images array minus 1 is not equal to id that passed through the action", () => {
        const action = { 
            type: actionTypes.NEXT_IMAGE,
            id: 3
        }
        const initState = {
            ...initialState, 
            images: ['','','','','',''],
            imageId: 2,
            disableOnNext: false,
            disableOnPrevious: true
        }
        const state = {
            ...initialState, 
            images: ['','','','','',''],
            imageId: 4,
            disableOnNext: false,
            disableOnPrevious: false
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update imageId by subtracting 1 from the value of id that passed through the reducer, set disableOnNext to false, and set disableOnPrevious to true (if id that passed through the action minus 1 is equal to 0)", () => {
        const action = { 
            type: actionTypes.PREVIOUS_IMAGE,
            id: 1
        }
        const initState = {
            ...initialState, 
            images: ['','','','','',''],
            imageId: 2,
            disableOnNext: false,
            disableOnPrevious: false
        }
        const state = {
            ...initialState, 
            images: ['','','','','',''],
            imageId: 0,
            disableOnNext: false,
            disableOnPrevious: true
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update imageId by adding 1 to the value of id that passed through the reducer, and set disableOnPrevious to false, and set disableOnNext to true (if id that passed through the action minus 1 is not equal to 0", () => {
        const action = { 
            type: actionTypes.PREVIOUS_IMAGE,
            id: 4
        }
        const initState = {
            ...initialState, 
            images: ['','','','','',''],
            imageId: 2,
            disableOnNext: false,
            disableOnPrevious: true
        }
        const state = {
            ...initialState, 
            images: ['','','','','',''],
            imageId: 3,
            disableOnNext: false,
            disableOnPrevious: false
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update messages array by pushing the object passed through the action", () => {
        const action = { 
            type: actionTypes.MESSAGE_TO_SEND,
            obj: {a: 1, b: 3}
        }
        const initState = {
            ...initialState, 
            images: ['','','','','',''],
            messages: [{a: 5, b: 7}]
        }
        const state = {
            ...initialState, 
            images: ['','','','','',''],
            messages: [{a: 5, b: 7}, {a: 1, b: 3}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });
});
