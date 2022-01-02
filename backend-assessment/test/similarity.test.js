const { countCosineSimilarity, getCosineSimilarity } = require('../lib/cosineSimilarity')
const { getFeatureVector } = require('../lib/getSimilarity')

const chai = require('chai'),
    expect = chai.expect

describe("Similarity Test", () => {
    describe("Parse Query Test", () => {
        it("Success return true", () => {
            const { success, featureVector } = getFeatureVector("SELECT nama, nim FROM mahasiswa WHERE nama = 'Tomi' AND kelas = 'TI-4C'")
            expect(success).to.equal(true)
        })
        it("Feature Vector returns specified features", () => {
            const { success, featureVector } = getFeatureVector("SELECT nama, nim FROM mahasiswa WHERE nama = 'Tomi' AND kelas = 'TI-4C'")
            expect(featureVector).to.deep.equal(["select_nama", "select_nim", "from_mahasiswa", "where_and", "where_=_nama_constant", "where_=_kelas_constant"])
        })
    })
    describe("Calculate Similarity Test", () => {
        it("Calculate Cosine Similarity", () => {
            const result = countCosineSimilarity([[1], [1], [0], [1], [1], [1], [1]], [[1], [1], [1.30102999566], [1], [1], [1], [1]])
            expect(result).to.greaterThanOrEqual(0.88)
        })
        it("Get Cosine Similarity from Documents", () => {
            const documents = {
                d1: [["select_nama"], ["select_nim"], ["from_mahasiswa"], ["where_and"], ["where_=_nama_constant"], ["where_=_kelas_constant"]],
                d2: [["select_nama"], ["select_nim"], ["select_kelas"], ["from_mahasiswa"], ["where_and"], ["where_=_nama_constant"], ["where_=_kelas_constant"]]
            }
            const result = getCosineSimilarity(documents)
            expect(result).to.greaterThanOrEqual(0.88)
        })
    })
})