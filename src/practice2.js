const inject = (items, sections) => {
    let [section1, section2] = sections;
    if (section2.index > section1.index) {
        const array = [section1.content, items.slice(section1.index, section2.index), section2.content, items.slice(section2.index, items.length)];
        return [].concat(...array);
    }
}
export { inject };
