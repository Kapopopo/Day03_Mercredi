let woofs = "";

function getAngryDog(numberOfWoofs) {
  for (let i = 0; i < numberOfWoofs; i++) {
  	woofs = woofs + "woof ";
    }
    return woofs;
}
displayResult(getAngryDog(5))
