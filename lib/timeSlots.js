export const generateTimeSlots = () => {
    const slots = []

    const addSlots = (startHour, endHour) => {
        for (let hour = startHour; hour <= endHour; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                if (hour === endHour && minute > 30) break

                const period = hour >= 12 ? 'PM' : 'AM'
                const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
                const displayMinute = minute.toString().padStart(2, '0')

                slots.push({
                    value: `${hour.toString().padStart(2, '0')}:${displayMinute}`,
                    label: `${displayHour}:${displayMinute} ${period} ET`
                })
            }
        }
    }

    addSlots(0, 6)
    addSlots(20, 23)

    return slots
}

export const formatTimeSlot = (time) => {
    const [hour, minute] = time.split(':').map(Number)
    const period = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
    return `${displayHour}:${minute.toString().padStart(2, '0')} ${period} ET`
}
