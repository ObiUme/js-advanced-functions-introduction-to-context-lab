// Your code here
const createEmployeeRecord = (recArray) => {
    return {
        firstName: recArray[0],
        familyName: recArray[1],
        title: recArray[2],
        payPerHour: recArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = (recordsArray) => {
    return recordsArray.map(rec => createEmployeeRecord(rec))
}

// const createTimeInEvent = function (inEvent,dateStamp){
//     const [date, hour] = dateStamp.split(' ');
    
//     // const arrFromDate = dateStamp.split(' ')
//     // const date = arrFromDate[0]
//     // const hour = arrFromDate[1]
//     const inEvent = {
//         type: 'TimeIn',
//         hour: parseInt(hour),
//         date: date
//     }
    
//     this.timeInEvents.push(inEvent)

//     return this

// }

function createTimeInEvent(obj, dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    hour = parseInt(hour);
    let type = "TimeIn";
    obj.timeInEvents.push({ type, hour, date });
    return obj;
}