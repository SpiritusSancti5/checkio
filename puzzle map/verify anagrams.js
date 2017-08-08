function verifyAnagrams(first_word, second_word){

    const f = x => x.toLowerCase().replace(/\s/g, '').split('').sort().join();

    return f(first_word) == f(second_word);

}

