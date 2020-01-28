export const updateObject = (state, updatedValues) => {
    return {
        ...state,
        ...updatedValues
    }
}
