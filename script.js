document.addEventListener("DOMContentLoaded", () => {

  const themeBtn = document.getElementById("btn-theme");

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeBtn.textContent = "Mode Terang";
    } else {
      themeBtn.textContent = "Mode Gelap";
    }
  });

  const sapaBtn = document.getElementById("btn-sapa");
  const greetText = document.getElementById("greeting");

  sapaBtn.addEventListener("click", () => {
    const nama = prompt("Halo! Nurhana");
    greetText.innerText = `Halo, ${nama}! Senang berkunjung ke portofolio saya 😊`;
  });

  const logBtn = document.getElementById("btn-log");

  logBtn.addEventListener("click", () => {
    console.log("Tombol logger ditekan!");
  });

  document.getElementById('btn').addEventListener('click', function() {
    fetch('/api/info').then(response => response.json()).then(data => {
      const formatwaktu = new Date(data.waktu).toLocaleString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      document.getElementById('timeDisplay').textContent = formatwaktu;
    });
  });

});

//REFLEKSI SINGKAT

// Bagian yang paling sulit bagi saya adalah memahami cara kerja event listener,
// Terutama saya mengubah tema dan menampilkan pesan sapaan mengggunakan DOM.
// Saya perlu mencoba beberapa kali agar fitur dapat berjalan tapa eror.

// Namun ketika akhirnya semua tombol merespons dengan benar, saya merasa sangat
// senang dan bangga. Ada momen "WOW" ketika mode gelap dapat berubah hanya 
// dengan satu klik dan pesan sapaan muncul secara dinamis dilayar.