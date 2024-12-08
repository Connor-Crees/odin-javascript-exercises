const palindromes = function (string) {
    //input clean up
    let cleanedString = string.toLowerCase();
    const availableCharacters = "qwertyuiopasdfghjklzxcvbnm1234567890";
    cleanedString = cleanedString.split('').filter((char) => availableCharacters.includes(char)).join('');
    console.log(cleanedString);

    const reverse = cleanedString.split('').reverse().join('');

    return (cleanedString == reverse);
};

// Do not edit below this line
module.exports = palindromes;
