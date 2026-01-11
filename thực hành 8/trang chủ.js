const animals = [
    {
        name: "Mèo Anh",
        desc: "Những cảm xúc của loài mèo đáng yêu.",
        thumb: "mèo/meme1.jpg",
        images: ["mèo/meme2.jpg", "mèo/meme3.jpg", "mèo/meme4.jpg", "mèo/meme5.jpg"]
    }
    // Bạn có thể thêm các con vật khác ở đây
];

// Tạo Footer
function createFooter() {
    const footer = document.getElementById('main-footer');
    if (footer) {
        footer.innerHTML = `
            <div class="footer-content container">
                <div>
                    <h3>Website Con Vật</h3>
                    <p>Học sinh: Nguyễn Thị Mỹ Linh</p>
                    <p>Hotline: 0123 456 789</p>
                </div>
                <div class="footer-map">
                    <iframe src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"></iframe>
                </div>
            </div>`;
    }
}

// Nút quay lại trang chi tiết (nếu đã từng xem)
const btnBackToDetail = document.getElementById('btn-back-to-detail');
const lastViewedPet = localStorage.getItem('selectedPet');

if (lastViewedPet && btnBackToDetail) {
    btnBackToDetail.style.display = "inline-block";
    btnBackToDetail.innerText = "Xem lại con vật vừa xem"; // Thêm chữ để nút hiển thị
    btnBackToDetail.onclick = () => {
        window.location.href = 'đề tài.html'; // Sửa từ detail.html thành đề tài.html
    };
}

// Đổ dữ liệu danh sách con vật
const container = document.getElementById('danhsach');
if (container) {
    animals.forEach(pet => {
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.innerHTML = `
            <img src="${pet.thumb}" style="width:100%; border-radius:8px;">
            <p><strong>${pet.name}</strong></p>
        `;

        card.onclick = () => {
            localStorage.setItem('selectedPet', JSON.stringify(pet));
            window.location.href = 'đề tài.html'; // Sửa thành tên file của bạn
        };
        container.appendChild(card);
    });
}

createFooter();