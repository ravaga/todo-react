export default (state = { list: [] }, action) => {
    switch (action.type) {
        case "TODO_LIST":
            return { ...state, list: action.payload };
        case "TODO_ADDING":
            return { ...state };
        case "TODO_REMOVING":
            return { ...state };
    }

    return state;
}