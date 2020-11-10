const parseData = (input) => {
    let {data, column} = input;
    return data.map(person => {
        let [{name: name}, {name: age}, {name: gender}, {name: birthday}] = column;
        [name, age, gender, birthday] = person;
        return {name, age, gender, birthday};
    })
}
export { parseData };
