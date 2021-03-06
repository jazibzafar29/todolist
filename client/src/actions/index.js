import tasks from '../apis/tasks';
import history from '../history';
import { 
    SIGN_IN,
    SIGN_OUT,
    CREATE_TASK,
    FETCH_TASKS,
    FETCH_TASK,
    DELETE_TASK,
    EDIT_TASK
} from "./types";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await tasks.post('/createTask', { ...formValues, userId });
    dispatch({ type: CREATE_TASK, payload: response.data });
    history.push('/');
};

export const fetchStreams = () => async dispatch => {
    const response = await tasks.get('/');
    dispatch({ type: FETCH_TASKS, payload: response.data });
};

export const fetchStream = (id) => async dispatch => {
    const response = await tasks.get(`/getTask/${id}`);
    dispatch({ type: FETCH_TASK, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
    const response = await tasks.patch(`/editTask/${id}`, formValues);
    dispatch({ type: EDIT_TASK, payload: response.data });
    history.push('/');
};

export const deleteStream = (id) => async dispatch => {
    await tasks.delete(`/deleteTask/${id}`);
    dispatch({type: DELETE_TASK, payload: id });
    history.push('/');
};