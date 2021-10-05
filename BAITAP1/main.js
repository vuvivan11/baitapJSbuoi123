/** 
khối 1: 
- nhập lương 1 ngày
- nhập số ngày làm việc
khối 2:
- lấy giá trị lương 1 ngày
- lấy giá trị ngày làm việc
- ép kiểu dữ liệu
- tổng lương = 1 ngày * số ngày
khối 3:
- lương nhân được
*/



function totalSalary(event){
    event.preventDefault();
    // Tìm tới thẻ và lấy giá trị
    var salary = document.getElementById('salary').value;
    var totalDay = document.getElementById('totalDay').value;
    // ep kieu du lieu
    salary = parseInt(salary);
    totalDay = parseInt(totalDay);
    var result = salary * totalDay;
    result = result.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    document.getElementById('txtBtn').innerHTML = "Lương tháng này là: " + result;
}
document.getElementById('btnSalary').onclick = totalSalary;