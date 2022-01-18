const { Parser } = require("node-sql-parser");
const { getCosineSimilarity } = require("./cosineSimilarity.js");
const parseFeatureNode = require("./parseFeatureNode");
// const util = require('util')

function getSimilarity(query1, query2) {
    const { success: successQ1, featureVector: featureQ1, message: messageQ1 } = getFeatureVector(query1);
    const { success: successQ2, featureVector: featureQ2, message: messageQ2 } = getFeatureVector(query2);

    if (!successQ1) {
        return {
            success: false,
            similarity: -1,
            message: messageQ1,
        };
    }

    if (!successQ2) {
        return {
            success: false,
            similarity: -1,
            message: messageQ2,
        };
    }

    const documents = {
        d1: featureQ1,
        d2: featureQ2,
    };

    return {
        success: true,
        similarity: getCosineSimilarity(documents),
    };
}

function getFeatureVector(query) {
    const { success, featureVector, message } = parseSQL(query);
    const featureVectorLC = featureVector ? featureVector.map((v) => v[0].toLowerCase()) : null;
    return {
        success,
        featureVector: featureVectorLC,
        message,
    };
}

function parseSQL(query) {
    try {
        // let otherFeature
        // if (query.includes("EXCEPT")) {
        //     otherFeature = "EXCEPT"
        //     query = query.replace("EXCEPT", "UNION")
        // } else if (query.includes("INTERSECT")) {
        //     otherFeature = "INTERSECT"
        //     query = query.replace("INTERSECT", "UNION")
        // }

        // const ast = parser.parse(query)

        // let vectorFeatures = {}

        // if (ast["value"]["type"] != "Select") {
        //     otherFeature = (!otherFeature) ? "UNION" : otherFeature
        //     vectorFeatures['other'] = (ast["value"]["distinctOpt"]) ? `${otherFeature}_${ast["value"]["distinctOpt"]}` : otherFeature

        //     const leftVal = (ast["value"]["left"]["type"] == "SelectParenthesized") ? ast["value"]["left"]["value"] : ast["value"]["left"]
        //     const rightVal = (ast["value"]["right"]["type"] == "SelectParenthesized") ? ast["value"]["right"]["value"] : ast["value"]["right"]

        //     vectorFeatures['left'] = parseFeatures(leftVal)
        //     vectorFeatures['right'] = parseFeatures(rightVal)
        // } else {
        //     vectorFeatures = parseFeatures(ast["value"])
        // }

        // const vectorizedFeatures = getVectorizedFeatures(vectorFeatures)
        const queryLowerCase = query.toLowerCase();

        const querySplitter = ["union all", "intersect all", "except all", "union", "intersect", "except"];

        function splitString(string, splitters) {
            var list = [string];
            for (var i = 0, len = splitters.length; i < len; i++) {
                traverseList(list, splitters[i], 0);
            }
            return flatten(list);
        }

        function traverseList(list, splitter, index) {
            if (list[index]) {
                if (list.constructor !== String && list[index].constructor === String)
                    list[index] != list[index].split(splitter) ? (list[index] = list[index].split(splitter)) : null;
                list[index].constructor === Array ? traverseList(list[index], splitter, 0) : null;
                list.constructor === Array ? traverseList(list, splitter, index + 1) : null;
            }
        }

        function flatten(arr) {
            return arr.reduce(function (acc, val) {
                return acc.concat(val.constructor === Array ? flatten(val) : val);
            }, []);
        }

        const splittedString = splitString(queryLowerCase, querySplitter);

        function countWord(sentence, word) {
            return sentence.split(word).length - 1;
        }

        function countWords(sentence, listOfWords) {
            const countedWords = listOfWords.reduce((acc, curr) => {
                if (!acc[curr]) {
                    acc[curr] = countWord(sentence, curr);
                }
                return acc;
            }, {});
            return countedWords;
        }

        const formattedString = splittedString.map((val) => {
            let trimmed = val.trim();
            if (trimmed[0] == "(" && trimmed[trimmed.length - 1] == ")") {
                trimmed = trimmed.substr(1).slice(0, -1);
            }
            return trimmed;
        });

        let vectorizedFeatures = [];
        const parser = new Parser();

        for (let i = 0; i < formattedString.length; i++) {
            // js-sql-parser
            // const ast = parser.parse(formattedString[i]);
            // const vectorFeatures = parseFeatures(ast["value"]);

            // node-sql-parser
            const ast = parser.astify(formattedString[i]);
            const vectorFeatures = parseFeatureNode(ast);

            // console.log(JSON.stringify(ast, null, 4));
            // console.log(util.inspect(ast, false, null, true /* enable colors */))
            vectorizedFeatures = [...vectorizedFeatures, ...getVectorizedFeatures(vectorFeatures)];
        }

        const countedWords = countWords(queryLowerCase, querySplitter);
        Object.keys(countedWords).forEach((key) => {
            for (let i = 0; i < countedWords[key]; i++) {
                vectorizedFeatures = [...vectorizedFeatures, [key]];
            }
        });

        // console.log(vectorizedFeatures)

        return {
            success: true,
            featureVector: vectorizedFeatures,
            message: "Parsing Sukses",
        };
    } catch (err) {
        console.log(err);
        return {
            success: false,
            featureVector: null,
            message: err,
        };
    }
}

function getVectorizedFeatures(ast) {
    let vectorizedFeatures = [];
    // if (ast["other"]) {
    //     vectorizedFeatures.push([ast["other"].toLowerCase()])

    //     Object.keys(ast['left']).forEach(key => {
    //         if (ast['left'][key]) {
    //             const prefix = key.toLowerCase()
    //             ast['left'][key].forEach(feature => {
    //                 vectorizedFeatures.push([`${prefix}_${feature}`])
    //             })
    //         }
    //     })

    //     Object.keys(ast['right']).forEach(key => {
    //         if (ast['right'][key]) {
    //             const prefix = key.toLowerCase()
    //             ast['right'][key].forEach(feature => {
    //                 vectorizedFeatures.push([`${prefix}_${feature}`])
    //             })
    //         }
    //     })
    // } else {
    Object.keys(ast).forEach((key) => {
        if (ast[key]) {
            const prefix = key.toLowerCase();
            ast[key].forEach((feature, index) => {
                let str =
                    key == "values"
                        ? `${prefix}_${index}_${feature.toLowerCase()}`
                        : `${prefix}_${feature.toLowerCase()}`;
                vectorizedFeatures.push([str]);
            });
        }
    });
    // }
    return vectorizedFeatures;
}

module.exports = getSimilarity;
module.exports.getFeatureVector = getFeatureVector;
