import _ from 'lodash';

import {
    FETCH_TASK,
    FETCH_TASKS,
    CREATE_TASK,
    EDIT_TASK,
    DELETE_TASK
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_TASKS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_TASK:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_TASK:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_TASK:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_TASK:
            return _.omit(state, action.payload);   //Since payload is id we don't have to reference payload.id
        default:
            return state;
    }
};