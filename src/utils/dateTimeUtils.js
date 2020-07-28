import moment from 'moment'

export function getTimeZone() {
    return moment().utcOffset() / 60;
}