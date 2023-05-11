// BÀi 1:
function tongDiemTrungBinh(diem1, diem2, diem3, address, people) {
  var tongDiem = 0;
  tongDiem = (diem1 + diem2 + diem3) / 3 + address + people;

  return tongDiem;
}
document.getElementById("btnTinhDiem").onclick = function () {
  // input: là điểm toán,lý,hóa.lựa chọn khu vực và đối tương:
  var diemToan = +document.getElementById("diemToan").value;
  var diemLy = +document.getElementById("diemLy").value;
  var diemHoa = +document.getElementById("diemHoa").value;
  var khuVuc = +document.getElementById("khuVuc").value;
  var doiTuong = +document.getElementById("doiTuong").value;

  var tongDiem = tongDiemTrungBinh(diemToan, diemLy, diemHoa, khuVuc, doiTuong);
  //   ouput: ketQuaBai1:
  var ketQuaBai1 = tongDiem;
  // progress:
  if (
    diemToan > 0 &&
    diemLy > 0 &&
    diemHoa > 0 &&
    diemToan <= 10 &&
    diemLy <= 10 &&
    diemHoa <= 10
  ) {
    if (tongDiem > 0 && tongDiem < 5) {
      ketQuaBai1 = "rớt";
    } else if (tongDiem >= 5 && tongDiem < 8) {
      ketQuaBai1 = "đậu-khá";
    } else if (tongDiem >= 8) {
      ketQuaBai1 = "đậu-xuất sắc";
    }
    document.getElementById("ketQuaBai1").innerHTML =
      "Kết quả của thí sinh là: " +
      " " +
      "Tổng điểm: " +
      tongDiem +
      " " +
      " và " +
      ketQuaBai1;
  } else {
    // ketQuaBai1 = "vui lòng kiểm tra lại giá trị nhập!";
    document.getElementById("ketQuaBai1").innerHTML =
      "vui lòng kiểm tra lại giá trị nhập!";
  }
};

// Bài 2:
/*
  soDien < 50 => soDien * 500
  soDien < 100 => 50 * 500 + (soDien-50) * 650
  soDien < 200 => 50 * 500 + 50 * 650 (soDien - 100) * 850
  50 đầu : từ 0- 50
50 kế : từ 50- 100
100 kế từ 100 - 200
150 kế từ 200 - 350
Còn lại từ 350 trở lên

*/
document.getElementById("btnTinhTien").onclick = function () {
  // input: nhập họ và tên, số kw người ta sử dụng
  var nguoiSuDung = document.getElementById("nguoiSuDung").value;
  var soDien = +document.getElementById("soKW").value;

  // output: tongSoTienPhaiTra
  var tongSoTienPhaiTra = 0;

  // progress:
  if (soDien > 0 && soDien <= 50) {
    tongSoTienPhaiTra = soDien * 500;
  } else if (soDien > 50 && soDien <= 100) {
    tongSoTienPhaiTra = 50 * 500 + (soDien - 50) * 650;
  } else if (soDien > 100 && soDien <= 200) {
    tongSoTienPhaiTra = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
  } else if (soDien > 200 && soDien <= 350) {
    tongSoTienPhaiTra = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100;
  } else if (soDien > 350) {
    tongSoTienPhaiTra =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300;
  }
  document.getElementById("ketQuaBai2").innerHTML =
    "Số tiền của chủ hộ " +
    nguoiSuDung +
    " phải trả là " +
    tongSoTienPhaiTra.toLocaleString();
};

// Bài 3:
document.getElementById("btnTinhThuNhap").onclick = function () {
  // input: string => họ và tên, tổng thu nhập cả năm, số người phụ thuộc
  var hoTen = document.getElementById("hoVaTen").value;
  var thuNhapCaNam = +document.getElementById("tongThuNhapCaNam").value;
  var nguoiPhuThuoc = +document.getElementById("soNguoiPhuThuoc").value;

  // output: number => tổng tiền thu nhập đã chịu thuế
  var thuNhapChiuThue = 0;
  var tienThuePhaiTra = 0;
  thuNhapChiuThue = thuNhapCaNam - 4000000 - nguoiPhuThuoc * 1600000;
  // progress:
  if (thuNhapCaNam <= 60000000) {
    tienThuePhaiTra = thuNhapChiuThue * 0.05;
  } else if (thuNhapCaNam <= 120000000) {
    tienThuePhaiTra = thuNhapChiuThue * 0.1;
  } else if (thuNhapCaNam <= 210000000) {
    tienThuePhaiTra = thuNhapChiuThue * 0.15;
  } else if (thuNhapCaNam <= 384000000) {
    tienThuePhaiTra = thuNhapChiuThue * 0.2;
  } else if (thuNhapCaNam <= 624000000) {
    tienThuePhaiTra = thuNhapChiuThue * 0.25;
  } else if (thuNhapCaNam <= 960000000) {
    tienThuePhaiTra = thuNhapChiuThue * 0.3;
  } else if (thuNhapCaNam > 960000000) {
    tienThuePhaiTra = thuNhapChiuThue * 0.35;
  }
  document.getElementById("ketQuaBai3").innerHTML =
    "Tổng số tiền thuế của " +
    hoTen +
    "  là " +
    tienThuePhaiTra.toLocaleString();
};

// Bài 4:

function anHien() {
  if (document.getElementById("luaChon").value == "KhachHang") {
    document.getElementById("ketNoi").style.opacity = 0;
  } else if (document.getElementById("luaChon").value == "DoanhNghiep") {
    document.getElementById("ketNoi").style.opacity = 1;
  }
}

document.getElementById("btnTienCap").onclick = function () {
  // input: mã kh, số kết nối và kênh cao cấp
  var maKH = document.getElementById("maKH").value;
  var soKetNoi = +document.getElementById("soKetNoi").value;
  var kenhCaoCap = +document.getElementById("kenhCaoCap").value;
  // const phiHoaDonNhaDan = 4.5
  // const phiDichVuCoBanNhaDan = 20.5
  // const
  // output: hóa đơn số tiền của kh phải trả
  var soTienPhaiTra = 0;

  if (soKetNoi == 0) {
    soTienPhaiTra = 4.5 + 20.5 + 7.5 * kenhCaoCap;
  } else if (soKetNoi <= 10) {
    soTienPhaiTra = 15 + 75 + 50 * kenhCaoCap;
  } else if (soKetNoi > 10) {
    soTienPhaiTra = 15 + 75 + (soKetNoi - 10) * 5;
  }
  document.getElementById("ketQuaBai4").innerHTML =
    "Tiền cáp của " +
    "mã khách hàng " +
    maKH +
    " phải trả tiền là " +
    soTienPhaiTra.toLocaleString() +
    "$";
};
