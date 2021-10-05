// khối 1:
// - nhập số thứ 1
// - nhập số thứ 2
// - nhập số thứ 3
// - nhập số thứ 4
// - nhập số thứ 5
// khối 2:
// - lấy giá trị input 1
// - lấy giá trị input 2
// - lấy giá trị input 3
// - lấy giá trị input 4
// - lấy giá trị input 5
// - giá trị trung bình = tổng giá trị các input chia 5
// khối 3:
// - kết quả giá trị trung bình của 5 số



function averaged(event){
    event.preventDefault();
    var number1 = document.getElementById('num1').value;
    var number2 = document.getElementById('num2').value;
    var number3 = document.getElementById('num3').value;
    var number4 = document.getElementById('num4').value;
    var number5 = document.getElementById('num5').value;
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    number3 = parseFloat(number3);
    number4 = parseFloat(number4);
    number5 = parseFloat(number5);
    document.getElementById('txtBtn').innerHTML = 'Giá trị trung bình là: ' + (number1 + number2 + number3 + number4 + number5)/5;
}

document.getElementById('btnAverage').onclick = averaged;