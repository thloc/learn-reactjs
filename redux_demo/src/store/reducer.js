const initialState = {
    counter: 0
}

const reducer = (stage = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: stage.counter + 1
        };
    }
    if (action.type === 'RANDOM') {
        return {
            counter: stage.counter + action.val
        };
    }

    return stage;
}

export default reducer;