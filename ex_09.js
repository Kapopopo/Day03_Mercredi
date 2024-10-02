function test(type, quantity)
{
    return (housingList.has(type) ? housingList.get(type) + quantity : quantity);
}

function addHousing(list, type, quantity) {
    let all =  test(type, quantity);
    housingList.set(type, all);
}
