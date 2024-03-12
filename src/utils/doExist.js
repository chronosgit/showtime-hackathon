const doExist = (...props) => {
    if(props === undefined || props === null) return false;

    let allExist = true;

    props.every(prop => {
        if(prop === undefined || prop === null) {
            allExist = false;
            return false;
        }
    });

    return allExist;
};

export default doExist;