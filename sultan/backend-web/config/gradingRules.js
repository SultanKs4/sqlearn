function gradingRulesLatihan(attempt) {
    if (attempt <= 3) {
        return 100
    }
    if (attempt <= 6) {
        return 95
    }
    if (attempt <= 9) {
        return 90
    }
    if (attempt <= 12) {
        return 80
    }
    if (attempt <= 15) {
        return 70
    }
    if (attempt <= 18) {
        return 60
    }
    return 50
}

function gradingRulesUjian(attempt) {
    if (attempt <= 2) {
        return 100
    }
    if (attempt <= 3) {
        return 95
    }
    if (attempt <= 4) {
        return 90
    }
    if (attempt <= 5) {
        return 85
    }
    if (attempt <= 6) {
        return 80
    }
    if (attempt <= 7) {
        return 75
    }
    if (attempt <= 8) {
        return 70
    }
    if (attempt <= 9) {
        return 65
    }
    if (attempt <= 10) {
        return 60
    }
    if (attempt <= 11) {
        return 55
    }
    return 50
}

module.exports = {
    gradingRulesLatihan,
    gradingRulesUjian
}