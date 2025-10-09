document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();
  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (linkPage === "#" && currentPage === "")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  const userName = prompt("Silakan masukkan nama Anda :") || "Pengunjung";
  const userNameElement = document.getElementById("user-name");
  if (userNameElement) userNameElement.textContent = userName;

  const timeElement = document.getElementById("current-time");
  function updateTime() {
    if (timeElement) {
      const now = new Date();
      const formattedTime = now.toUTCString().replace("GMT", "GMT+0700");
      timeElement.textContent = formattedTime;
    }
  }
  updateTime();
  setInterval(updateTime, 1000);

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const dob = document.getElementById("tanggal-lahir").value;
      const genderElement = document.querySelector(
        'input[name="gender"]:checked'
      );
      const message = document.getElementById("pesan").value.trim();
      const gender = genderElement ? genderElement.value : "Belum Dipilih";

      if (name && dob && genderElement && message) {
        // Convert DOB ke format DD/MM/YYYY
        const dobParts = dob.split("-");
        const formattedDob =
          dobParts[2] + "/" + dobParts[1] + "/" + dobParts[0];

        document.getElementById("result-name").textContent = name;
        document.getElementById("result-dob").textContent = formattedDob;
        document.getElementById("result-gender").textContent = gender;
        document.getElementById("result-message").textContent = message;

        alert(`Pesan dari ${name} berhasil dikirim!`);
        form.reset();
      } else {
        alert("Mohon lengkapi semua data formulir!");
      }
    });
  }
});
