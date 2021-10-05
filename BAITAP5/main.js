// khối 1: 
// - nhập vào số có 2 chữ số
// khối 2:
// - lấy giá trị từ Input
// - điều kiện thỏa mãn: 9 < giá trị < 99
// - lấy phần chục
// - lấy phần đơn vị
// khối 3:
// - tổng hai ký số


function numberTotal(event){
    event.preventDefault();
    var number = document.getElementById('inputNumber').value;
    if(number < 9 || number > 99){
        alert('Vui lòng nhập số có hai chữ số');
    }
    else{
        number = parseInt(number);
        var ten = Math.floor(number/10);
        var unit = Math.floor(number%10);
        document.getElementById('txtTotal').innerHTML = 'Tổng hai ký số: ' + (ten + unit);
    }
}
document.getElementById('btnTotal').onclick = numberTotal;