//NHỎ ĐẾN LỚN
function nhoDenLon (a, b, c) {
    //Đặt biến kết quả = rỗng
    var result = "";
    //Xác định vị trí số a
    //Trường hợp nếu thứ tự là a, *, * hoặc *, a, *
    if (a < b || a < c)
    {
        //Trường hợp là a, *, *
         if (a < b && a < c) {
            //So tiếp b và c
            if (b > c) {
                result = a + ", " + c + ", " + b;
            }
            else {
                result = a + ", " + b + ", " + c;
            }
         }
         //Trường hợp là *, a , *
         else {
            if (b > c) {
                result = c + ", " + a + ", " + b;
            }else {
                result = b + ", " + a + ", " + c;
            }
         }       
    }
    //Trường hợp là *, *, a
    else {
        //So tiếp b và c
        if (b > c) {
            result = c + ", " + b + ", " + a;
        }
        else {
            result = b + ", " + c + ", " + a;
        }
    }
    return result;
}

function sapXep() {
    //Lấy 3 sô người dùng nhập vào
    var a = document.getElementById("num__1").value * 1;
    var b = document.getElementById("num__2").value * 1;
    var c = document.getElementById("num__3").value * 1;
    //Chạy đến hàm sắp xếp
    var ketQua = nhoDenLon(a, b, c);
    //Xuất kết quả ra giao diện
    document.getElementById("result__1").innerHTML = "Thứ tự là: " + ketQua;
}

//CHÀO HỎI
function chaoHoi() {
    //lấy dữ liệu từ input
    var name = document.getElementById("name").value;
    var hello = "";
    //So sánh dữ liệu với điều kiện
    if (name == "M") {
        hello += "Mẹ";
    }
    else if (name == "B") {
        hello += "Bố";
    }
    else if (name == "A") {
        hello += "Anh trai";
    }
    else if (name == "E") {
        hello += "Em gái";
    }
    //Xuất kết quả ra giao diện
    document.getElementById("result__2").innerHTML = "Xin chào " + hello;
}

//TÌM SỐ CHẴN LẺ
function timSoChanLe() {
    //lấy dữ liệu từ input
    var a = document.getElementById("num_1").value * 1;
    var b = document.getElementById("num_2").value * 1;
    var c = document.getElementById("num_3").value * 1;
    //tạo các biến chứa số lượng số chẵn và số lẻ, ban đầu = 0
    var soChan = 0;
    var soLe = 0;
    //nếu có số chẵn thì soChan++, ngược lại soLe++
    if (a%2 === 0) {
        soChan++;
    }
    else {
        soLe++;
    }
    if (b%2 === 0) {
        soChan++;
    }
    else {
        soLe++;
    }
    if (c%2 === 0) {
        soChan++;
    }
    else {
        soLe++;
    }
    //xuất kết quả ra giao diện
    document.getElementById("result__3").innerHTML = "Có " + soChan + " số chẵn và " + soLe + " số lẻ.";
}

//XÁC ĐỊNH TAM GIÁC
function checkTamGiac(a, b ,c) {
    var result = "";
    if(a == b == c) {
        result += "tam giác đều";
    }
    else if (a == c || a == b || b == c) {
        result += "tam giác cân";
    }
    else if (c * c == a * a + b * b || a * a == b * b + c * c || b * b == a * a + c * c) {
        result += "tam giác vuông";
    }
    return result;
}

function xacDinhTamGiac() {
    //lấy dữ liệu từ input
    var a = document.getElementById("canh_1").value * 1;
    var b = document.getElementById("canh_2").value * 1;
    var c = document.getElementById("canh_3").value * 1;
    var ketQua = checkTamGiac(a, b, c);
    //xuất ra giao diện
    document.getElementById("result__4").innerHTML = "Đây là " + ketQua;
}