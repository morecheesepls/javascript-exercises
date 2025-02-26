const num = Math.floor(Math.random() * 1000);

function repeatString(word, num) {
    if (num < 0) {
        console.log(word = "ERROR");
        return word;
    } else if (num === 0) {
        console.log(word = "");
        return word;
    } else if (num > 0) {
        wordArray = [];

        for (let i = 0; i < num; i++) {
            wordArray.push(word);
        }

        for (item of wordArray) {
            console.log(newArray = wordArray.join(""));
        }
        return newArray;
    }
};

repeatString("", num);


// Do not edit below this line
module.exports = repeatString;
