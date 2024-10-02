let i = 0
let passagers = 0

function fillBus(peopleAtBusStops, busSeats)
{
    while (i < peopleAtBusStops.length) {
	passagers = passagers + peopleAtBusStops[i]
	if (passagers >= busSeats) {
	    return i
	}
	i++
    }
    return 0
}
