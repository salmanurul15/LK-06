document.addEventListener("DOMContentLoaded", function () {
    console.log("JS NYAMBUNG ✅");

    // === 1. FITUR DARK MODE ===
    const btnToggle = document.getElementById("darkModeToggle");

    if (btnToggle) {
        // Cek penyimpanan lokal saat halaman dimuat
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
            btnToggle.innerText = "☀️ Mode Terang";
        }

        btnToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                btnToggle.innerText = "☀️ Mode Terang";
            } else {
                localStorage.setItem("theme", "light");
                btnToggle.innerText = "🌙 Mode Gelap";
            }
        });
    }

    // === 2. FORM PENDAFTARAN ===
    const form = document.getElementById("formPendaftaran");
    const hasil = document.getElementById("hasilPendaftaran");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nama = document.getElementById("nama").value.trim();
            const email = document.getElementById("email").value.trim();
            const nohp = document.getElementById("nohp").value.trim();
            const kategori = document.getElementById("kategori").value;
            const pesan = document.getElementById("pesan").value.trim();

            if (nama === "" || email === "" || nohp === "" || kategori === "") {
                alert("Semua field wajib diisi!");
                return;
            }

            hasil.innerHTML = `
                <div style="margin-top:20px; padding:20px; background:#e2ecd3; color:#1f280f; border-radius:10px; border-left:6px solid #889063; box-shadow: 0 4px 6px rgba(0,0,0,0.1); opacity:0; transform:translateY(15px); transition:all 0.5s ease-out;" id="hasilAnim">
                    <h3 style="margin-bottom:10px; color:#354024;">🎉 Data Berhasil Dikirim 🎉</h3>
                    <p><strong>Nama:</strong> ${nama}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>No HP:</strong> ${nohp}</p>
                    <p><strong>Kategori:</strong> ${kategori}</p>
                    <p><strong>Pesan:</strong> ${pesan}</p>
                </div>
            `;

            setTimeout(() => {
                const hasilAnim = document.getElementById("hasilAnim");
                if (hasilAnim) {
                    hasilAnim.style.opacity = "1";
                    hasilAnim.style.transform = "translateY(0)";
                }
            }, 50);

            form.reset();
        });
    }

    // === DARK MODE ===
    const navMenu = document.querySelector(".nav-menu");
    if (navMenu) {
        const darkModeLi = document.createElement("li");
        const darkModeBtn = document.createElement("button");
        darkModeBtn.id = "darkModeToggle";
        darkModeBtn.className = "dark-mode-btn";
        darkModeBtn.innerText = "🌙 Dark Mode";
        darkModeLi.appendChild(darkModeBtn);
        navMenu.appendChild(darkModeLi);

        const body = document.body;

        // Cek Local Storage
        if (localStorage.getItem("darkMode") === "enabled") {
            body.classList.add("dark-mode");
            darkModeBtn.innerText = "☀️ Light Mode";
        }

        darkModeBtn.addEventListener("click", () => {
            body.classList.toggle("dark-mode");

            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
                darkModeBtn.innerText = "☀️ Light Mode";
            } else {
                localStorage.setItem("darkMode", "disabled");
                darkModeBtn.innerText = "🌙 Dark Mode";
            }
        });

        // =========================
        // LOADING SCREEN FULL
        // =========================

        window.addEventListener("load", function () {
            const loadingScreen = document.getElementById("loading-screen");

            if (!loadingScreen) return;

            setTimeout(() => {
                loadingScreen.style.opacity = "0";
                loadingScreen.style.transition = "0.5s ease";

                setTimeout(() => {
                    loadingScreen.style.display = "none";
                }, 500);
            }, 1000); // durasi loading 1 detik
        });
    }


});