import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { KHALLI_KARAO,EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS } from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

export const employeeCreate = ({ name, phone, shift }) => {
    return (dispatch) => {
        dispatch({type: KHALLI_KARAO});
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.employeesList({ type: "reset" });
            })
            .catch((error) => console.log(error.message))
    }
}


export const employeeFetch = () => {
    return (dispatch) => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on("value", snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
            })
    }
}

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS })
                Actions.employeesList({ type: 'reset' });
            })
    }

}

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(()=>{
            Actions.employeesList({type: 'reset'})
        })
    }
}