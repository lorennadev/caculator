let elementoPai = document.querySelector('#buttons');

let childrenArray = [];

for (i = 0; i < elementoPai.children.length; i++ ) {
    childrenArray.push(elementoPai.children[i]);
};

while (elementoPai.firstChild) {
    elementoPai.removeChild(elementoPai.firstChild)
}

// for (i = 0; i < childrenArray.length; i++) {

// }

// let one = childrenArray[0];
// let two = childrenArray[1];
// let three = childrenArray[2];
// let four = childrenArray[3];
// let five = childrenArray[4];
// let six = childrenArray[5];
// let seven = childrenArray[6];
// let eight = childrenArray[7];
// let nine = childrenArray[8];
// let plus = childrenArray[9];
// let less = childrenArray[10];
// let times = childrenArray[11];
// let dividedBy = childrenArray[12];
// let squareRootOf = childrenArray[13];
// let cubed = childrenArray[14];
// let fraction = childrenArray[15];
// let percentage = childrenArray[16];
// let cancelEntry = childrenArray[17];
// let clear = childrenArray[18];
// let buttonResult = childrenArray[19];

let [ one, two, three, four, five, six, seven, eight, nine, plus, less, times, dividedBy,
     squareRootOf, cubed, fraction, percentage, cancelEntry, clear, del, buttonResult,
    negative, comma, zero ] =
    [childrenArray[0], childrenArray[1], childrenArray[2], childrenArray[3], childrenArray[4],
    childrenArray[5], childrenArray[6], childrenArray[7], childrenArray[8], childrenArray[9], 
    childrenArray[10], childrenArray[11], childrenArray[12], childrenArray[13], childrenArray[14], 
    childrenArray[15], childrenArray[16], childrenArray[17], childrenArray[18], childrenArray[19], 
    childrenArray[20], childrenArray[21], childrenArray[22], childrenArray[23]];



elementoPai.appendChild(percentage);
elementoPai.appendChild(cancelEntry);
elementoPai.appendChild(clear);
elementoPai.appendChild(del);
elementoPai.appendChild(fraction);
elementoPai.appendChild(cubed);
elementoPai.appendChild(squareRootOf);
elementoPai.appendChild(dividedBy);
elementoPai.appendChild(seven);
elementoPai.appendChild(eight);
elementoPai.appendChild(nine);
elementoPai.appendChild(times);
elementoPai.appendChild(four);
elementoPai.appendChild(five);
elementoPai.appendChild(six);
elementoPai.appendChild(less);
elementoPai.appendChild(one);
elementoPai.appendChild(two);
elementoPai.appendChild(three);
elementoPai.appendChild(plus);
elementoPai.appendChild(negative);
elementoPai.appendChild(zero);
elementoPai.appendChild(comma);
elementoPai.appendChild(buttonResult);



















