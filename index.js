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
    var hello = "Xin chào ";
    //So sánh dữ liệu với điều kiện
    if (name == "") {
        hello = "Ai đó?";
    }
    else if (name == "M") {
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
    document.getElementById("result__2").innerHTML = hello;
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
    if(a <= 0 || b <= 0 || c <=0) {
        result += "Các cạnh của tam giác không được <= 0";
    }
    else if(a == b == c) {
        result += "tam giác đều";
    }
    else if (a == c || a == b || b == c) {
        result += "tam giác cân";
    }
    else if (c * c == a * a + b * b || a * a == b * b + c * c || b * b == a * a + c * c) {
        result += "tam giác vuông";
    }
    else {
        result += "tam giác khác";
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
    document.getElementById("result__4").innerHTML = ketQua;
}

// TÍNH NGÀY THÁNG NĂM
function doanNgayMai (a, b, c) {
    var result;
    var ngay;
    var thang;
    var nam;
    if (b == 1 || b == 3 || b == 5 ||b == 7 || b == 8 || b == 10 && a == 31) {
        ngay = 1;
        thang = b + 1;
        nam = c;
    }
    else if (b == 12 && a == 31) {
        ngay = 1;
        thang = 1;
        nam = c + 1;
    }
    else if (b == 4 || b == 6 || b == 9 || b == 11 && a == 30) {
        ngay = 1;
        thang = b++;
        nam = c;
    } 
    else if (a == 28 || a == 29 && b == 2) {
        ngay = 1;
        thang = 3;
        nam = c;
    }
    else {
        ngay = a + 1;
        thang = b;
        nam = c;
    }
    result = ngay + "/" + thang + "/" + nam;
    return result;
}

function doanHomQua (a, b, c) {
    var result;
    var ngay;
    var thang;
    var nam;
    if(a == 1) {
        if(b == 1) {
            ngay = 31;
            thang = 12;
            nam = c - 1;
        }
        else if(b == 2 || b == 4 || b == 6 || b == 9 || b == 11) {
            ngay = 31;
            thang = b - 1;
            nam = c;
        }
        else if (b == 3) {
            if (c%4 == 0) {
                ngay = 29;
            }
            else {
                ngay = 28;
            }
            thang = 2;
            nam = c;
        }
        else {
            ngay = 30;
            thang = b - 1;
            nam = c;
        }
    }
    else {
        ngay = a - 1;
        thang = b;
        nam = c;
    }
    result = ngay + "/" + thang + "/" + nam;
    if (c%4 == 0) {
        result += " (Năm nhuận)";
    }
    return result;
}

function tinhNgayMai () {
    var result = document.getElementById("result__5");
    var ngay = document.getElementById("ngay").value * 1;
    var thang = document.getElementById("thang").value * 1;
    var nam = document.getElementById("nam").value * 1;
    if (ngay <= 0 || thang <= 0 || nam <= 0) {
        result.innerHTML = "Điền ngày tháng năm hợp lý";
    }
    else if (thang > 12) {
        result.innerHTML = "Tháng không được quá 12";
    }
    else if (ngay > 31) {
        result.innerHTML = "Ngày không được quá 31";
    }
    else {
        var ketQua = doanNgayMai(ngay, thang, nam);
        result.innerHTML = ketQua;
    }
}

function tinhHomQua () {
    var result = document.getElementById("result__5");
    var ngay = document.getElementById("ngay").value * 1;
    var thang = document.getElementById("thang").value * 1;
    var nam = document.getElementById("nam").value * 1;
    if (ngay <= 0 || thang <= 0 || nam <= 0) {
        result.innerHTML = "Điền ngày tháng năm hợp lý";
    }
    else if (thang > 12) {
        result.innerHTML = "Tháng không được quá 12";
    }
    else if (ngay > 31) {
        result.innerHTML = "Ngày không được quá 31";
    }
    else {
        var ketQua = doanHomQua(ngay, thang, nam);
        result.innerHTML = ketQua;
    }
}

// ĐẾM NGÀY
function tinhSoNgay(a, b) {
    var ngay;
    if (a == 1 || a == 3 || a == 5 || a == 7 || a == 8 || a == 10 || a == 12) {
        ngay = 31;
    }
    else {
        if (a == 2 && b%4 === 0) {
            ngay = 29;
        }
        else if (a == 2 && b%4 !== 0) {
            ngay = 28;
        }
        else {
            ngay = 30;
        }
    }
    return ngay;
}

function demNgay() {
    var result = document.getElementById("result__6");
    var thang = document.getElementById("demThang").value * 1;
    var nam = document.getElementById("demNam").value * 1;
    if (thang <= 0 || nam <= 0) {
        result.innerHTML = "Điền ngày tháng năm hợp lý";
    }
    else {
        var ketQua = tinhSoNgay(thang, nam);
        result.innerHTML = "Tháng " + thang + " năm  " + nam + " có " + ketQua + " ngày.";
    }
}

//ĐỌC SỐ
function phanLoai(a) {
    var result;
    if (a == 1) {
        result = "một";
    }
    else if (a == 2) {
        result = "hai";
    }
    else if (a == 3) {
        result = "ba";
    }
    else if (a == 4) {
        result = "bốn";
    }
    else if (a == 5) {
        result = "năm";
    }
    else if (a == 6) {
        result = "sáu";
    }
    else if (a == 7) {
        result = "bảy";
    }
    else if (a == 8) {
        result = "hai";
    }
    else if (a == 9) {
        result = "chín";
    }
    return result;
}

function cachDoc(a) {
    var hangTram = parseInt(a/100);
    var hangChuc = parseInt((a - hangTram*100)/10);
    var hangDonVi = parseInt(a - hangChuc*10 - hangTram*100);
    var result;
    if (hangChuc === 0) {
        if(hangDonVi === 0) {
            result = phanLoai(hangTram) + " trăm";
        }
        else {
            result = phanLoai(hangTram) + " trăm lẻ " + phanLoai(hangDonVi);
        }
    }
    else if (hangChuc == 1) {
        if(hangDonVi === 0) {
            result = phanLoai(hangTram) + " trăm mười" ;
        }
        else {
            result = phanLoai(hangTram) + " trăm mười " + phanLoai(hangDonVi);
        }
    }
    else if(hangDonVi === 0) {
        result = phanLoai(hangTram) + " trăm " + phanLoai(hangChuc) + " mươi ";
    }
    else {
        if(hangDonVi == 1) {
            result = phanLoai(hangTram) + " trăm " + phanLoai(hangChuc) + " mươi mốt";
        }
        else {
            result = phanLoai(hangTram) + " trăm " + phanLoai(hangChuc) + " mươi " + phanLoai(hangDonVi);
        }
    }
    return result;
}

function docSo() {
    var result = document.getElementById("result__7");
    var so = document.getElementById("nhapSo").value * 1;
    if (so.toString().length !== 3) {
        result.innerHTML = "Chỉ nhập số có 3 chữ số";
    }
    else {
        var ketQua = cachDoc(so);
        result.innerHTML = ketQua;
    }
}

//TÌM SV XA TRƯỜNG NHẤT
function tinhQuangDuong(truong_x, truong_y, sv_x, sv_y) {
    var quangDuong = Math.sqrt((truong_x - sv_x) * (truong_x - sv_x) + (truong_y - sv_y) * (truong_y - sv_y));
    return quangDuong;
}

function timSvXaTruong() {
    var result = document.getElementById("result__8");
    var sv1__name = document.getElementById("sv1__name").value;
    var sv1__x = document.getElementById("sv1__x").value * 1;
    var sv1__y = document.getElementById("sv1__y").value * 1;
    
    var sv2__name = document.getElementById("sv2__name").value;
    var sv2__x = document.getElementById("sv2__x").value * 1;
    var sv2__y = document.getElementById("sv2__y").value * 1;

    var sv3__name = document.getElementById("sv3__name").value;
    var sv3__x = document.getElementById("sv3__x").value * 1;
    var sv3__y = document.getElementById("sv3__y").value * 1;

    var truong__x = document.getElementById("truong__x").value * 1;
    var truong__y = document.getElementById("truong__y").value * 1;

    var quangDuongSv1 = tinhQuangDuong(truong__x, truong__y, sv1__x, sv1__y);
    var quangDuongSv2 = tinhQuangDuong(truong__x, truong__y, sv2__x, sv2__y);
    var quangDuongSv3 = tinhQuangDuong(truong__x, truong__y, sv3__x, sv3__y);

    if (quangDuongSv1 > quangDuongSv2 && quangDuongSv1 > quangDuongSv3) {
        result.innerHTML = "Sinh viên " + sv1__name + " xa trường nhất";
    }
    else if (quangDuongSv2 > quangDuongSv1 && quangDuongSv2 > quangDuongSv3) {
        result.innerHTML = "Sinh viên " + sv2__name + " xa trường nhất";

    }
    else if (quangDuongSv3 > quangDuongSv1 && quangDuongSv3 > quangDuongSv2) {
        result.innerHTML = "Sinh viên " + sv3__name + " xa trường nhất";
    }
}