//Tạo function thêm số khi người dùng nhập số n và bấm button thêm số.

let danhSachSoN = []; // tạo mảng lưu trữ số n được thêm vào.
document.querySelector(".btn-primary").onclick = function () {
  let soN = document.getElementById("soN").value * 1;
  danhSachSoN.push(soN);

  // dom tới thẻ div có id themSo
  document.getElementById(
    "themSo"
  ).innerHTML = `Danh sách số được thêm vào: ${danhSachSoN}`;
};

// 1. Tính tổng số dương
document.getElementById("tongSoDuong").onclick = function () {
  let tongSoDuong = 0;

  // Duyệt qua từng phần tử trong mảng soN

  danhSachSoN.forEach((item, index) => {
    if (item > 0) {
      tongSoDuong += item;
    }
  });

  document.getElementById(
    "ketQuaTongSoDuong"
  ).innerHTML = `Tổng các số dương là: ${tongSoDuong}`;
};

// 2. Đếm số dương

document.getElementById("demSo").onclick = function () {
  let demSoDuong = 0;

  danhSachSoN.forEach((item, index) => {
    if (item > 0) {
      demSoDuong++;
    }
  });

  document.getElementById(
    "ketQuaDemSoDuong"
  ).innerHTML = ` Số lượng số dương là: ${demSoDuong}`;
};

// 3. Tìm số nhỏ nhất
document.getElementById("timSoNhoNhat").onclick = function () {
  let soNhoNhat = Math.min(...danhSachSoN);
  document.getElementById(
    "ketQuaSoNhoNhat"
  ).innerHTML = ` Số nhỏ nhất là: ${soNhoNhat} `;
};

// 4. Tìm số dương nhỏ nhất
document.getElementById("timSoDuongNhoNhat").onclick = function () {
  let soDuong = [];

  danhSachSoN.forEach((item, index) => {
    if (item > 0) {
      soDuong.push(item);
    }
  });

  // Hiện thông báo nếu không có số dương được tìm thấy trong mảng
  if (soDuong.length === 0) {
    document.getElementById(
      "ketQuaSoDuongNhoNhat"
    ).innerHTML = `Không có số dương trong mảng`;
    return;
  }

  // Tìm số dương nhỏ nhất trong mảng
  let soDuongNhoNhat = Math.min(...soDuong);

  document.getElementById(
    "ketQuaSoDuongNhoNhat"
  ).innerHTML = `Số dương nhỏ nhất là ${soDuongNhoNhat} `;
};

//5. Tìm số chẵn cuối cùng

document.getElementById("timSoChan").onclick = function () {
  let soChanCuoiCung = null;
  //Duyệt ngược mảng để tìm số chẳn cuối cùng.
  for (let index = danhSachSoN.length - 1; index >= 0; index--) {
    if (danhSachSoN[index] % 2 === 0) {
      soChanCuoiCung = danhSachSoN[index];
      break;
    }
  }

  if (soChanCuoiCung === null) {
    document.getElementById(
      "ketQuaSoChanCuoiCung"
    ).innerHTML = ` Không có số chẵn trong mảng được tìm thấy.`;
  } else {
    document.getElementById(
      "ketQuaSoChanCuoiCung"
    ).innerHTML = `Số chẵn cuối cùng được tìm thấy trong mảng là: ${soChanCuoiCung}`;
  }
};

//6. Đổi chỗ
document.getElementById("doiCho").onclick = function () {
  let viTri1 = document.getElementById("soViTri1").value * 1;
  let viTri2 = document.getElementById("soViTri2").value * 1;

  if (
    viTri1 >= 0 &&
    viTri1 < danhSachSoN.length &&
    viTri2 >= 0 &&
    viTri2 < danhSachSoN.length
  ) {
    let tam = danhSachSoN[viTri1];
    danhSachSoN[viTri1] = danhSachSoN[viTri2];
    danhSachSoN[viTri2] = tam;

    document.getElementById(
      "ketQuaDoiCho"
    ).innerHTML = `Mảng sau khi đổi chỗ: ${danhSachSoN}`;
  }
};

//7. Sắp xếp tăng dần

document.getElementById("sapXep").onclick = function () {
  danhSachSoN.sort(function (a, b) {
    return a - b;
  });

  document.getElementById(
    "ketQuaSapXep"
  ).innerHTML = ` Mảng sắp xếp theo thứ tự tăng dần: ${danhSachSoN} `;
};

//8. Tìm số nguyên tố đầu tiên.
document.getElementById("timSoNguyenTo").onclick = function () {
  let soNguyenToDauTien = 0;

  for (let index = 0; index < danhSachSoN.length; index++) {
    let soHienTai = danhSachSoN[index];
    let laSoNguyenTo = true;
    if (soHienTai < 2) {
      laSoNguyenTo = false;
    } else {
      for (let i = 2; i <= soHienTai; i++) {
        if (soHienTai % i === 0) {
          laSoNguyenTo: false; //
          break;
        }
      }
    }
    if (laSoNguyenTo) {
      soNguyenToDauTien = soHienTai;
      break;
    }
  }
  if (soNguyenToDauTien !== null) {
    document.getElementById(
      "ketQuaSoNguyenTo"
    ).innerHTML = ` Số nguyên tố đầu tiên là: ${soNguyenToDauTien}`;
  }
};

//9.  Đếm số nguyên
let danhSachSoNguyen = []; // tạo mảng để lưu trữ số

// Thêm số vào mảng
document.querySelector(".btn-warning").onclick = function () {
  let soNguyen = document.getElementById("soNguyen").value * 1;
  console.log(soNguyen);
  danhSachSoNguyen.push(soNguyen);

  document.querySelector(
    ".alert-info"
  ).innerHTML = `Danh sách số được thêm vào là: ${danhSachSoNguyen}`;
};

// đặt biến đếm số nguyên
document.getElementById("demSoNguyen").onclick = function () {
  let demSoNguyen = 0;
  for (let index = 0; index < danhSachSoNguyen.length; index++) {
    if (Number.isInteger(danhSachSoNguyen[index])) {
      demSoNguyen++;
    }
  }
  document.getElementById(
    "ketQuaDemSoNguyen"
  ).innerHTML = `Số lượng số nguyên trong mảng là: ${demSoNguyen}`;
};

//10. Đếm số lượng số dương và số âm.
document.getElementById("soSanh").onclick = function () {
  let soDuong = 0;
  let soAm = 0;

  for (let index = 0; index < danhSachSoN.length; index++) {
    if (danhSachSoN[index] < 0) {
      soAm++;
    } else if (danhSachSoN[index] > 0) {
      soDuong++;
    }
  }
  if (soAm > soDuong) {
    document.getElementById("ketQuaSoAmDuong").innerHTML = ` Số âm > số dương`;
  } else if (soAm < soDuong) {
    document.getElementById("ketQuaSoAmDuong").innerHTML = `Số âm < Số dương `;
  } else {
    document.getElementById("ketQuaSoAmDuong").innerHTML = `Số âm = Số dương `;
  }
};
