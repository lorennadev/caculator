//reordenação de posicionamento

let elementoPai = document.querySelector('#buttons');

let childrenArray = [];

for (i = 0; i < elementoPai.children.length; i++ ) {
    childrenArray.push(elementoPai.children[i]);
};

let [ one, two, three, four, five, six, seven, eight, nine, plus, less, times, dividedBy,
    squareRootOf, cubed, fraction, percentage, cancelEntry, clear, del, buttonResult,
    negative, comma, zero ] =
    [childrenArray[0], childrenArray[1], childrenArray[2], childrenArray[3], childrenArray[4],
    childrenArray[5], childrenArray[6], childrenArray[7], childrenArray[8], childrenArray[9], 
    childrenArray[10], childrenArray[11], childrenArray[12], childrenArray[13], childrenArray[14], 
    childrenArray[15], childrenArray[16], childrenArray[17], childrenArray[18], childrenArray[19], 
    childrenArray[20], childrenArray[21], childrenArray[22], childrenArray[23]];
    
while (elementoPai.firstChild) {
    elementoPai.removeChild(elementoPai.firstChild)
}

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



















