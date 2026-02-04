export const generateTimeSlots = () => {
    const slots = []

    const addSlots = (startHour, endHour) => {
        for (let hour = startHour; hour <= endHour; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                // If it's the end hour, only allow the :00 slot (or :30 if we want it to be inclusive)
                // User said "until 7 PM", so 7:00 PM is probably the last start time.
                if (hour === endHour && minute > 0) break

                const period = hour >= 12 ? 'PM' : 'AM'
                let displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
                const displayMinute = minute.toString().padStart(2, '0')

                slots.push({
                    value: `${hour.toString().padStart(2, '0')}:${displayMinute}`,
                    label: `${displayHour}:${displayMinute} ${period} EST`
                })
            }
        }
    }

    // 10 AM to 7 PM EST
    addSlots(10, 19)

    return slots
}

export const formatTimeSlot = (time) => {
    const [hour, minute] = time.split(':').map(Number)
    const period = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
    return `${displayHour}:${minute.toString().padStart(2, '0')} ${period} EST`
}
