/**
khối 1:
- nhập chiều dài
- nhập chiều rộng
khối 2:
- lấy giá trị input chiều dài
- lấy giá trị input chiều rộng
- diện tích = dài * rộng
- chu vi = (dài + rộng)*2
khối 3:
- kết quả diện tích HCN
- kết quả chu vi HCN
*/





function rectangularSquare(event){
    event.preventDefault();
    var length = document.getElementById('length').value;
    var width = document.getElementById('width').value;
    length = parseFloat(length);
    width = parseFloat(width);
    var square = length * width;
    document.getElementById('txtSquare').innerHTML = "Diện tích hình chữ nhật: " + square ;
}
document.getElementById('btnSquare').onclick = rectangularSquare;

function rectangularPerimeter(event){
    event.preventDefault();
    var length = document.getElementById('length').value;
    var width = document.getElementById('width').value;
    length = parseFloat(length);
    width = parseFloat(width);
    var perimeter = (length + width)*2;
    document.getElementById('txtPerimeter').innerHTML = "Chu vi hình chữ nhật: " + perimeter ;
}
document.getElementById('btnPerimeter').onclick = rectangularPerimeter;

