const oneExist = (...props) => {
    if(props === undefined || props === null) return false;

    let doesOneExist = false;

    props.every(prop => {
        if(!(prop === undefined || prop === null)) {
            doesOneExist = true;
            return true;
        }
    });

    return doesOneExist;
};

export default oneExist;