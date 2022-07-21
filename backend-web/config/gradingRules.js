function gradingRules(attempt, dataRules) {
    let indexLast = dataRules.findIndex((data) => data.attemps == 0);
    if (dataRules.length - 1 != indexLast) dataRules.push(dataRules.splice(indexLast, 1)[0]);
    const { grade: grade } = dataRules.reduce(
        (prev, curr) => {
            if (curr.attemps == 0 && prev.grade == 0) prev.grade = curr.value;
            if (Object.keys(prev.prevData).length == 0 && attempt <= parseInt(curr.attemps)) prev.grade = curr.value;
            else if (attempt > parseInt(prev.prevData.attemps) && attempt <= parseInt(curr.attemps))
                prev.grade = curr.value;
            prev.prevData = curr;
            return prev;
        },
        { prevData: {}, grade: 0 }
    );
    return parseInt(grade);
}

module.exports = {
    gradingRules,
};
