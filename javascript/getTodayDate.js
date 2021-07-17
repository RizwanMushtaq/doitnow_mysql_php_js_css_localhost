function getTodayDate(){
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()+1
    let todayDate = String(date.getDate()).padStart(2,'0')
    let thismonth = String(month).padStart(2,'0')
    // console.log('year'+year+'month'+month+'today'+todayDate)
    let datePattern = todayDate + '.' + thismonth + '.' + year
    // console.log(datePattern)
    return datePattern
}

function getCurrentWeek(){
    let currentDate = new Date();
    let day
    let weekArray = []
    let weekArrayFinal = []
    for(let i=0; i<7; i++){
        day = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + i));
        weekArray.push(day)

        let year = day.getFullYear()
        let month = day.getMonth()+1
        let date = String(day.getDate()).padStart(2,'0')
        let thismonth = String(month).padStart(2,'0')
        
        let datePattern = date + '.' + thismonth + '.' + year
        weekArrayFinal.push(datePattern)
    }
    // console.log(weekArray)
    console.log(weekArrayFinal)

    return weekArrayFinal
}