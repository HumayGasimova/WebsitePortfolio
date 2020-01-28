/**
* Libraries
*/

import configureStore from 'redux-mock-store';

/**
* Constants
*/

import * as Actions from '.';
import * as actionTypes from "../constants/actionTypes";

/**
* Tests
*/

const mockStore = configureStore();
const store = mockStore();

describe('parallaxWebsiteActions', () => {
    beforeEach(() => { // Runs before each test in the suite
      store.clearActions();
    });

    it('Dispatches the correct action and payload (toggleMenuButton)', () => {
        const expectedActions = [
            {
                type: actionTypes.TOGGLE_MENU_BUTTON
            }
        ];

        store.dispatch(Actions.toggleMenuButton());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (menuButtonIsToggled)', () => {
        const expectedActions = [
            {
                type: actionTypes.MENU_BUTTON_IS_TOGGLED,
                val: true
            }
        ];

        store.dispatch(Actions.menuButtonIsToggled(true));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (initServices)', () => {
        const expectedActions = [
            {
                type: actionTypes.INIT_SERVICES,
                array: [{a: 1, b: 2},{a: 1, b: 2}]
            }
        ];

        store.dispatch(Actions.initServices([{a: 1, b: 2},{a: 1, b: 2}]));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (showCard)', () => {
        const expectedActions = [
            {
                type: actionTypes.SHOW_CARD,
                val: true
            }
        ];

        store.dispatch(Actions.showCard(true));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });
   
    it('Dispatches the correct action and payload (initTeamMembers)', () => {
        const expectedActions = [
            {
                type: actionTypes.INIT_TEAM_MEMBERS,
                array: [{a: 1, b: 2},{a: 1, b: 2}]
            }
        ];

        store.dispatch(Actions.initTeamMembers([{a: 1, b: 2},{a: 1, b: 2}]));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (initImages)', () => {
        const expectedActions = [
            {
                type: actionTypes.INIT_IMAGES,
                array: [{a: 1, b: 2},{a: 1, b: 2}]
            }
        ];

        store.dispatch(Actions.initImages([{a: 1, b: 2},{a: 1, b: 2}]));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (imageHover)', () => {
        const expectedActions = [
            {
                type: actionTypes.IMAGE_HOVER,
                id: 1,
                val: true
            }
        ];

        store.dispatch(Actions.imageHover(1, true));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (feedbackOnChange)', () => {
        const expectedActions = [
            {
                type: actionTypes.FEEDBACK_ON_CHANGE
            }
        ];

        store.dispatch(Actions.feedbackOnChange());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (dotOnChange)', () => {
        const expectedActions = [
            {
                type: actionTypes.DOTS_ON_CHANGE
            }
        ];

        store.dispatch(Actions.dotOnChange());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (startChangingFeedbacks)', () => {
        const expectedActions = [
            {
                type: actionTypes.START_CHANGING_FEEDBACKS,
                dotId: 3,
                feedbackIndex: 2
            }
        ];

        store.dispatch(Actions.startChangingFeedbacks(3, 2));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (stopChangingFeedbacks)', () => {
        const expectedActions = [
            {
                type: actionTypes.STOP_CHANGING_FEEDBACKS
            }
        ];

        store.dispatch(Actions.stopChangingFeedbacks(3, 2));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (activateIcon)', () => {
        const expectedActions = [
            {
                type: actionTypes.ACTIVATE_ICON,
                id: 3
            }
        ];

        store.dispatch(Actions.activateIcon(3));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (imageOnClick)', () => {
        const expectedActions = [
            {
                type: actionTypes.IMAGE_ON_CLICK,
                val: true,
                id: 2
            }
        ];

        store.dispatch(Actions.imageOnClick(true, 2));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (nextImage)', () => {
        const expectedActions = [
            {
                type: actionTypes.NEXT_IMAGE,
                id: 2
            }
        ];

        store.dispatch(Actions.nextImage(2));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (previousImage)', () => {
        const expectedActions = [
            {
                type: actionTypes.PREVIOUS_IMAGE,
                id: 4
            }
        ];

        store.dispatch(Actions.previousImage(4));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (submitMessage)', () => {
        const expectedActions = [
            {
                type: actionTypes.SUBMIT_MESSAGE,
                name: "Humay",
                email: "qasimovahumay@gmail.com",
                contact: "012345678",
                company: "crypto347",
                message: "Hey"
            }
        ];

        store.dispatch(Actions.submitMessage("Humay", "qasimovahumay@gmail.com", "012345678", "crypto347", "Hey"));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (messageToSend)', () => {
        const expectedActions = [
            {
                type: actionTypes.MESSAGE_TO_SEND,
                obj: {a: 1, b: "Hey"}
            }
        ];

        store.dispatch(Actions.messageToSend({a: 1, b: "Hey"}));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });
});
