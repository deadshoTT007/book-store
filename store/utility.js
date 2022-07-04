export const updateObject = (oldObject, updatedProperties) => {
    console.log({...oldObject,...updatedProperties},"update")
    return {
        ...oldObject,
        ...updatedProperties
    };
};