export const getTextIcon = (data, loc) => {
    const includeIcon = data?.icon;
    const text = includeIcon ? data?.text?.split('#icon') : data?.text;
    if (loc === 0) {
        return includeIcon ? text[0] : text;
    } else if (loc === 1) {
        return includeIcon ? data?.icon : null;
    } else {
        return includeIcon ? text[1] : '';
    }
};
