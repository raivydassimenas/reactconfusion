import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { InitialFeedback, Feedbacks } from './forms';
import thunk from 'redux-thunk';
import { createForms } from 'react-redux-form';
import logger from 'redux-logger'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            }),
            feedbacks: Feedbacks
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}