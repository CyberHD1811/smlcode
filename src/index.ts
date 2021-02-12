const smlCode = (sections: number = 1, innerSections: number = 1) => {
    if (!sections) throw new Error(`You haven't defined how many sections you want to use. Please specify a section (a number higher than or equal to 1.`);
    else if (typeof sections !== 'number') throw new TypeError(`Your input value " ${sections} " is a ${typeof sections} and not a number, please try a number higher than or equal to 1 as input.`);
    
    if (!innerSections) throw new Error(`You haven't defined how many characters you want to use in one section. Please specify a number between 1 and 10 for it.`);
    else if (typeof innerSections !== 'number') throw new TypeError(`Your input value " ${innerSections} " for the length of one section is not a number, please try a number between 1 and 10 as input.`);

    const Sections = Math.round(sections);
    const InnerSections = Math.round(innerSections);

    let CString: string = '';
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < sections; i++) {
        if (i === 0) {
            for (let j = 0; j < InnerSections; j++) {
                CString += chars.charAt(Math.floor(Math.random() * chars.length));
            }
        } else {
            CString += '-';
            for (let k = 0; k < InnerSections; k++) {
                CString += chars.charAt(Math.floor(Math.random() * chars.length));
            }
        }
    }
    return CString;
};

export { smlCode };