document.addEventListener("DOMContentLoaded", function () {
    // Fetch header.html và chèn vào trang
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // Khi header đã load xong, kích hoạt script set active link
            setActiveLink();
        });

    // Hàm để đặt trạng thái active cho menu
    function setActiveLink() {
        const navLinks = document.querySelectorAll(".header-right a");
        let currentPath = window.location.pathname.split("/").pop(); // Lấy tên file trang hiện tại

        navLinks.forEach(link => {
            link.classList.remove("active"); // Xóa class active

            if (link.getAttribute("href") === currentPath) {
                link.classList.add("active"); // Thêm class active nếu trùng
            }
        });

        navLinks.forEach(link => {
            link.addEventListener("click", function () {
                navLinks.forEach(link => link.classList.remove("active"));
                this.classList.add("active");
            });
        });
    }
});
