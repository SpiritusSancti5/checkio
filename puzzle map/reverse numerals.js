const dic = {'I':1, 'IV':4, 'V':5, 'IX':9, 'X':10, 'XL':40, 'L':50, 'XC':90, 'C':100, 'CD':400, 'D':500, 'CM':900, 'M':1000};

​

function reverseRoman(roman) {

    return roman.match(/CD|CM|XL|XC|IV|IX|M|D|C|L|X|V|I/g).reduce((p,c)=>p+dic[c], 0);

}

