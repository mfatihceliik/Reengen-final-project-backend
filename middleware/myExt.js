const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment)



function dateDiffCalculator(start_date, end_date) {
    const date_diff = moment.range(start_date, end_date)
    return date_diff.diff('days')
}

function dateConverter(result_rows, resultLength) {
    for (let i = 0; i < resultLength; i++) {
        const _startDate = (new Date(`${result_rows[i].start_date}`)).toISOString().split('T')[0];
        const _endDate = (new Date(`${result_rows[i].end_date}`)).toISOString().split('T')[0];
        result_rows[i].start_date = _startDate
        result_rows[i].end_date = _endDate
    }
}

function factoryDateConverter(result_rows, resultLength) {
    for (let i = 0; i < resultLength; i++) {
        const _membership_date = (new Date(`${result_rows[i].membership_date}`)).toISOString().split('T')[0];
        const _membership_expiry_date = (new Date(`${result_rows[i].membership_expiry_date}`)).toISOString().split('T')[0];
        result_rows[i].membership_date = _membership_date
        result_rows[i].membership_expiry_date = _membership_expiry_date
    }
}

module.exports = {
    dateDiffCalculator,
    dateConverter,
    factoryDateConverter
}

