function showClock() {
  setInterval(() => {
    const now = new Date();
    document.getElementById("clock").innerHTML =
      "⏰ " + now.toLocaleTimeString();
  }, 1000);
}

// Daftar Peserta
const formDaftar = document.getElementById("form-daftar");
if (formDaftar) {
  formDaftar.addEventListener("submit", function (e) {
    e.preventDefault();
    const nik = this.nik.value;
    const nama = this.nama.value;
    const alamat = this.alamat.value;
    const gender = this.gender.value;

    document.getElementById("outputDaftar").innerHTML =
      `<h3>Data Pendaftar:</h3>
      <p>NIK: ${nik}</p>
      <p>Nama: ${nama}</p>
      <p>Alamat: ${alamat}</p>
      <p>Jenis Kelamin: ${gender}</p>`;
  });
}
// Form Pilih Jadwal
document.addEventListener("DOMContentLoaded", function () {
  const formJadwal = document.getElementById("formJadwal");
  const outputJadwal = document.getElementById("outputJadwal");

  if (formJadwal) {
    formJadwal.addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = document.getElementById("nama").value;
      const hari = document.getElementById("hari").value;
      const jam = document.getElementById("jam").value;

      outputJadwal.innerHTML = `
        <h3>🗓️ Jadwal Kursus Anda:</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Hari:</strong> ${hari}</p>
        <p><strong>Waktu:</strong> ${jam}</p>
      `;
    });
  }
});
