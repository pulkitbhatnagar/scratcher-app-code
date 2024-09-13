export const replaceStringToValueScratcher = (
    strings = '',
    stringKeys = {}
) => {
    const regex = /{([^{]+)}/g;

    if (typeof strings !== 'string' || !(stringKeys instanceof Object)) {
        return false;
    }

    return strings.replace(regex, (ignore, key) => stringKeys[key]);
};
