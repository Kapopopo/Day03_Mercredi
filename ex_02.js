let i = 0

function findHousing(housingToFind, housingList)
{
  while (i < housingList.length) {
    if (housingList[i].toLowerCase() == housingToFind.toLowerCase()) {
      return [i, housingList[i]]
    }
    i++
  }
  return null
}