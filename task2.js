const totalBelanja = 600000; // Contoh input total belanja

// Logika untuk menentukan diskon
let diskon = 0;
if (totalBelanja >= 1000000) {
  diskon = 10;
} else if (totalBelanja >= 500000) {
  diskon = 5;
}

// Menghitung total bayar setelah diskon
const totalBayar = totalBelanja - (totalBelanja * diskon) / 100;

// Menampilkan hasil
console.log(
  `Anda mendapatkan diskon ${diskon}%, total belanja Anda menjadi Rp ${totalBayar}`
);
