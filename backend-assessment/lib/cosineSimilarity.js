function docToDocIndex(documents) {
    const documentIndex = {};
    Object.keys(documents).forEach((key) => {
        documentIndex[key] = {};
        documents[key].forEach((val) => {
            if (!documentIndex[key][val]) {
                documentIndex[key][val] = 0;
            }
            documentIndex[key][val] += 1;
        });
    });
    return documentIndex;
}

function getTF(documentIndex, feature, documents) {
    if (documentIndex[documents] && documentIndex[documents][feature]) {
        return (
            documentIndex[documents][feature] /
            Object.values(documentIndex[documents]).reduce((prev, curr) => prev + curr)
        );
    }
    return 0;
}

function getDF(reverseDocuments, feature) {
    if (reverseDocuments[feature]) {
        return Object.keys(reverseDocuments[feature]).length;
    }
    return 0;
}

function getIDF(reverseDocuments, feature, docCount) {
    const df = getDF(reverseDocuments, feature);
    return Math.log10(docCount / df) + 1;
}

function getTFIDF(reverseDocuments, feature, documents, docCount, documentIndex) {
    const tf = getTF(documentIndex, feature, documents);
    const idf = getIDF(reverseDocuments, feature, docCount);

    return tf * idf;
}

function vectorize(reverseDocuments, features, documents, docCount, documentIndex) {
    const vector = [];
    features.forEach((feature) => {
        tfidf = getTFIDF(reverseDocuments, feature, documents, docCount, documentIndex);
        vector.push(tfidf);
    });

    return vector;
}

function getDotProduct(v1, v2) {
    let result = 0;
    for (i = 0; i < v1.length; i++) {
        result += v1[i] * v2[i];
    }
    return result;
}

function getVectorLength(v) {
    let result = 0;
    for (i = 0; i < v.length; i++) {
        result += Math.pow(v[i], 2);
    }
    // result = Math.pow(result, 0.5)
    result = Math.sqrt(result);
    return result;
}

function getReversedDocumentIndex(docIndex) {
    const reversedDocumentIndex = {};
    Object.keys(docIndex).forEach((key) => {
        Object.keys(docIndex[key]).forEach((val) => {
            if (!reversedDocumentIndex[val]) {
                reversedDocumentIndex[val] = {};
            }
            reversedDocumentIndex[val][key] = docIndex[key][val];
        });
    });
    return reversedDocumentIndex;
}

function countCosineSimilarity(v1, v2) {
    const dotProduct = getDotProduct(v1, v2);
    const v1Length = getVectorLength(v1);
    const v2Length = getVectorLength(v2);
    return dotProduct / (v1Length * v2Length);
}

function getCosineSimilarity(documents) {
    const docCount = Object.keys(documents).length;

    const documentIndex = docToDocIndex(documents);
    const reversedDocuments = getReversedDocumentIndex(documentIndex);

    const features = Object.keys(reversedDocuments);
    const v1 = vectorize(reversedDocuments, features, "d1", docCount, documentIndex);
    const v2 = vectorize(reversedDocuments, features, "d2", docCount, documentIndex);

    return countCosineSimilarity(v1, v2);
}

module.exports = {
    countCosineSimilarity,
    getCosineSimilarity,
};
