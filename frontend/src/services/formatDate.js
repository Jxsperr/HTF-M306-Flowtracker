const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

function formatDate(timestamp) {
    const inputDate = new Date(timestamp)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
  
    const isToday = inputDate.toDateString() === today.toDateString()
    const isYesterday = inputDate.toDateString() === yesterday.toDateString()
  
    const month = monthNames[inputDate.getMonth()]
    const day = inputDate.getDate()
    const year = inputDate.getFullYear()
    const hours = inputDate.getHours()
    const minutes = inputDate.getMinutes()
    const amPm = hours >= 12 ? 'PM' : 'AM'
  
    const formattedHours = hours % 12 || 12
    const formattedMinutes = minutes.toString().padStart(2, '0')
  
    if (isToday) {
      return `Today, ${formattedHours}.${formattedMinutes} ${amPm}`
    } else if (isYesterday) {
      return `Yesterday, ${formattedHours}.${formattedMinutes} ${amPm}`
    } else {
      const ordinal = (day) => {
        if (day > 3 && day < 21) return 'th'
        switch (day % 10) {
          case 1:  return 'st'
          case 2:  return 'nd'
          case 3:  return 'rd'
          default: return 'th'
        }
      }
  
      return `${year}, ${month} ${day}${ordinal(day)}, ${formattedHours}.${formattedMinutes} ${amPm}`
    }
  }

  export {
    monthNames,
    formatDate
  }