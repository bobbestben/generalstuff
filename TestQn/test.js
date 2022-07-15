let prefix = "aa"
let arrayOfNames = [ "aaryanna", "aayanna", "airianna" ]


class Filter {
    filterPrefix(prefix,name) {
        console.log(name.startsWith(prefix))
        return name.startsWith(prefix)
    }
}

class Mapper {
    getDistinctCharactersCount(name) {
        let count = 0
        let hashmap = { }
        for (let i = 0 ; i < name.length ; i++ ) {
            if (! ( name[i] in hashmap ) ) {
                count++
                console.log('count', count)
                hashmap[name[i]] = i
                console.log('hashmapkey', hashmap[name[i]])
                
            }
        }
    }
}

const distinctCharCount = (prefix, arrayOfNames) => {
    for (let j = 0 ; j < arrayOfNames.length ; j++) {
        const nameCheck = new Filter()
        //For each name, check if it has the prefix
        if (nameCheck.filterPrefix(prefix, arrayOfNames[j])) {
            const countChar = new Mapper()
            countChar.getDistinctCharactersCount(arrayOfNames[j])
        }
    }
}

distinctCharCount(prefix, arrayOfNames)












// [a, b] = [1,2]
// console.log(a)
// console.log(b)




//Map - array function
// const numbers = [1,2,3]

// const doubleNumArray = numbers.map(x => x*2)
// console.log(numbers)
// console.log(doubleNumArray)
//Stores in a new array

















// console.log(124)
// const getById = document.getElementById("test")
// console.log('getbyId',getById)

// const getByName = document.getElementsByName("hacker")[0]
// console.log(getByName)




// myInput = document.querySelector('input').value
// if (myInput === "") { displayAllCountries }

// //Need to Capitalize first letter of Input
// myInput.toLowerCase()
// const wordArray = myInput.split(" ")
// wordArray.map( x => { x.charAt(0).toUpperCase } ) 
// myInput = wordArray.join(" ")

// //For each country in response.js file,
// if ( country.include(myInput) ) { 
//     //append it to the list
// }