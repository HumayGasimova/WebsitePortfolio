export const commaSeparator = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const getRandomCoordianteX = (radius) => {
    return  Math.random()* (window.innerWidth - radius * 2) + radius;
} 

export const getRandomCoordianteY = (radius) => {
    return  Math.random()* ((window.innerHeight - 35) - radius * 2) + radius;
} 

export const getRandomVelocity = () => {
    return  (Math.random() - 0.5) * 50;
} 

export const getRandomRadius = () => {
    return  (Math.random() * 99) + 1;
} 

export const getArrayOfCircles = (val) => {
    let array = new Array(val).fill(0);
    // array.map((el,i) => array[i] = i+1)
    return array;
} 

export const getRandomColor = () => {
    return  Math.random() * 255;
} 

export const getRandomAlfa = () => {
    return  Math.random();
} 

export const getArrayOfDots = (val) => {
    let array = new Array(val).fill(0);
    let updateChosen;
    // array.map((el,i) => array[i] = i+1)
    return array.map((el,i) => {
        if(i === 0){
            updateChosen = true;
        }else{
            updateChosen = false;
        }
        return {
            id: i + 1,
            chosen: updateChosen
        }
    });
} 

export const getArrayOfPaging = (val) => {
    let array = new Array(val).fill(0);
    let updateChosen;
    // array.map((el,i) => array[i] = i+1)
    return array.map((el,i) => {
        if(i === 0){
            updateChosen = true;
        }else{
            updateChosen = false;
        }
        return {
            id: i + 1,
            chosen: updateChosen
        }
    });
} 

export const getCurrentDateAndTime = () => {
    let date = new Date();
    let monthId = date.getMonth();
    let month;
    switch (monthId){
        case 0:
            month="January";
            break;
        case 1:
            month="February";
            break;
        case 2:
            month="March";
            break;
        case 3:
            month="April";
            break;
        case 4:
            month="May";
            break;
        case 5:
            month="June";
            break;
        case 6:
            month="July";
            break;
        case 7:
            month="August";
            break;
        case 8:
            month="September";
            break;
        case 9:
            month="October";
            break;
        case 10:
            month="November";
            break;
        case 11:
            month="December";
            break;
        default:
            month="January";
            break;
    }
    return `${month} ${date.getDate()}, ${date.getFullYear()} AT ${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
} 

// export const filterObject = (obj, predicate) => 
//     Object.keys(obj)
//         .filter(key => predicate(obj[key]))
//         .map( key => ({ [key]: obj[key] }))


// export const filterObject = (obj, filter, filterValue) => 
//     Object.keys(obj).reduce((acc, val) => 
//         (obj[val][filter] === filterValue ? acc : {
//             ...acc,
//             [val]: obj[val]
//         }                                        
//     ), {});