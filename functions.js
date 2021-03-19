
function format_date(x){
    let date = new Date(parseInt(x));


    let year = date.getFullYear();
  

    let month = date.getMonth();

    let days = date.getDate();
    // Hours part from the timestamp
    let hours = date.getHours(); 
    // Minutes part from the timestamp
    let minutes = date.getMinutes();
    // Seconds part from the timestamp
    let seconds = date.getSeconds();


    
    let formattedDate = new Date(Date.UTC(year, month,days, hours, minutes, seconds))

    //console.log(formattedDate.toUTCString())

    return formattedDate.toUTCString()
    }


    module.exports = format_date