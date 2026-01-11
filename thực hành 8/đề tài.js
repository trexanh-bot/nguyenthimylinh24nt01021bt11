const petData = JSON.parse(localStorage.getItem('selectedPet'));

if (petData) {
    // Hiển thị tên và mô tả
    document.getElementById('pet-name').innerText = petData.name;
    document.getElementById('pet-desc').innerText = petData.desc;

    // Hiển thị thư viện ảnh
    const gallery = document.getElementById('thuvienanh');
    gallery.innerHTML = ''; // Xóa nội dung cũ nếu có
    
    petData.images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = petData.name;
        gallery.appendChild(img);
    });
} else {
    // Nếu không có dữ liệu (truy cập trực tiếp), quay về trang chủ
    console.error("Không tìm thấy dữ liệu thú cưng.");
}