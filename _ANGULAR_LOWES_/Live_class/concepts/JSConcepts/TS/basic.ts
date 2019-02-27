interface LabelledValue {
    label: string;
    size?: number;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10};
printLabel(myObj);