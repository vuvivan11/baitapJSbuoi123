// khối 1:
// - nhập số tiền USD
// khối 2:
// - lấy giá trị input USD
// - 1$ = 23500vnd
// - tiền quy đổi = giá trị * 1$
// khối 3:
// - số tiền VND quy đổi

function currencyConvert(event){
    event.preventDefault();
    var oneDollar = 23500;
    var usd = document.getElementById('currencyUSD').value;
    usd = parseFloat(usd);
    var result = usd * oneDollar;
    result = result.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    document.getElementById('currencyVND').innerHTML = "Giá tiền quy đổi: " + result;
}
document.getElementById('btnConvert').onclick = currencyConvert;