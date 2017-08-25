export const getList = () => {
    let list = JSON.parse(sessionStorage.getItem('TODO'));

    if (list === null) {
        list = [];
    }

    return (dispatch) => {
        dispatch({
            type: "TODO_LIST",
            payload: list
        });
    }
}

export const add = (item) => {
    let list = JSON.parse(sessionStorage.getItem('TODO'));

    if (list === null) {
        list = [];
    }

    return (dispatch) => {
        dispatch({ type: "TODO_ADDING" });
        list.push(item);
        sessionStorage.setItem('TODO', JSON.stringify(list));
        dispatch({ type: "TODO_LIST", payload: list });
    }
}

export const remove = (index) => {
    let list = JSON.parse(sessionStorage.getItem('TODO'));

    if (list === null) {
        list = [];
    }

    return (dispatch) => {
        dispatch({ type: "TODO_REMOVING" });

        list.splice(index, 1);
        sessionStorage.setItem('TODO', JSON.stringify(list));

        dispatch({ type: "TODO_LIST", payload: list });
    }
}

