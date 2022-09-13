    let thang1 = '1';
    let thang2 = '2';
    let thang3 = '3';
    let thang4 = '4';
    let thang5 = '5';
    let thang6 = '6';
    let thang7 = '7';
    let thang8 = '8';
    let thang9 = '9';
    let thang10 = '10';
    let thang11 = '11';
    let thang12 = '12';

function clickButton(){
    let month = document.getElementById('month').value;
    console.log(month);
    switch (month){
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            document.getElementById('result').innerHTML ="thang " + month + " co 31 ngay";
            break;
        case '4':
        case '6':
        case '9':
        case '11':
            document.getElementById('result').innerHTML = "thang " + month + " co 30 ngay";
            break;
        case '2':
            document.getElementById('result').innerHTML = "thang " + month + " co 28 hoac 29 ngay";
            break;
        default:
            document.getElementById('result').innerHTML = "Nhap thang tu 1 den 12";

    }
}
