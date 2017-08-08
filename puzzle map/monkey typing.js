function countWords(text, words){

    return words.reduce((a,b) => a + (text.toLowerCase().indexOf(b)>=0 ? 1 : 0) , 0 )    

}

