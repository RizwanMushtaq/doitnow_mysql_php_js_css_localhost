function loadKalender(){
    console.log('In loadKalender function')
    const date = new Date()
    
    const renderKalender = () => {
        date.setDate(1)
        // console.log(date.getDay())  //how many day of previous month we need to show

        const monthDays = document.querySelector('.daysDiv')

        const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate() //to get last day of current month means to get total number of days in current month

        const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
        // console.log(prevLastDay)

        const firstDayIndex = date.getDay()
        const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay()
        console.log(lastDayIndex)
        
        const nextDays = 7 - lastDayIndex - 1

        const months = [
            "Januar",
            "Februar",
            "März",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Dezember"
        ]

        document.querySelector('.monthHeader').innerHTML = months[date.getMonth()]+ ' ' + date.getFullYear()

        let days = "";
        
        for(let x=firstDayIndex; x>0; x--){
            days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
        }

        for(let i = 1; i<=lastDay; i++){
            if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
                days += `<div class="today">${i}</div>`
            }else {
                days += `<div>${i}</div>`
            }
            
        }
        
        for(let j=1; j<= nextDays; j++){
            days += `<div class="next-date">${j}</div>`
        }

        console.log(days)
        monthDays.innerHTML = days

    }

    
    document.querySelector('.prevLogoContainer').addEventListener('click', ()=>{
        date.setMonth(date.getMonth()-1)
        renderKalender()
    })

    document.querySelector('.nextLogoContainer').addEventListener('click', ()=>{
        date.setMonth(date.getMonth()+1)
        renderKalender()
    })

    renderKalender()

}