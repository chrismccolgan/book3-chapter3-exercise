// Lightning Exercise 1
const createDoctor = (name, specialty, address) => {
    return {
        name: name,
        specialty: specialty,
        address: address
    }
}

const drPerson = createDoctor("Person", "Oncology", "123 Fake St")

console.log(drPerson)

// Lightning Exercise 2
let BowWowKennels = []

const createPet = (name, breed) => {
    const newPet = {
        name: name,
        breed: breed
    }
    BowWowKennels.push(newPet)
    return newPet
}

const momo = createPet("Momo", "Yorkie")
const dizzie = createPet("Dizzie", "Maltese")
const kisses = createPet("Kisses", "Chihuahua")

console.log(BowWowKennels)

// Practice: Music Row
let jumpStopRecords = []
let chattenRecords = []
let polarRecords = []

const createFunkArtist = (name, age) => {
    const newFunkArtist = {
        name: name,
        age: age
    }
    newFunkArtist.genre = "funk"
    jumpStopRecords.push(newFunkArtist)
    return newFunkArtist
}

const createRapArtist = (name, age) => {
    const newRapArtist = {
        name: name,
        age: age
    }
    newRapArtist.genre = "rap"
    jumpStopRecords.push(newRapArtist)
    return newRapArtist
}

const createCountryArtist = (name, age) => {
    const newCountryArtist = {
        name: name,
        age: age
    }
    newCountryArtist.genre = "country"
    chattenRecords.push(newCountryArtist)
    return newCountryArtist
}

const createBluegrassArtist = (name, age) => {
    const newBluegrassArtist = {
        name: name,
        age: age
    }
    newBluegrassArtist.genre = "bluegrass"
    chattenRecords.push(newBluegrassArtist)
    return newBluegrassArtist
}

const createPopArtist = (name, age) => {
    const newPopArtist = {
        name: name,
        age: age
    }
    newPopArtist.genre = "pop"
    polarRecords.push(newPopArtist)
    return newPopArtist
}

const atikins = createCountryArtist("Bruce Atikins", 23)
const brown = createPopArtist("Jensen Brown", 20)
const funkz = createFunkArtist("Dre Funkz", 25)
const grimes = createRapArtist("Dusta Grimes", 21)
const danielson = createBluegrassArtist("Bartholomew Danielson", 23)
const dallas = createCountryArtist("Avilee Dallas", 19)
const kinkaid = createPopArtist("Austin Kinkade", 22)
const branis = createRapArtist("Loyoncé Branis", 27)

console.log("JumpStop Records funk and rap artists", jumpStopRecords)
console.log("Chatten Records country and bluegrass artists", chattenRecords)
console.log("Polar Records pop artists", polarRecords)