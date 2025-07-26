const products = [
  {
    id: 1,
    name: "Áo thun nam",
    price: 199000,
    image: "src/img/index/xproduct-01.jpg",
    description: "Áo thun cotton 100% thoáng mát."
  },
  {
    id: 2,
    name: "Quần jean nữ",
    price: 350000,
    image: "src/img/index/xproduct-02.jpg",
    description: "Quần jean co giãn, form ôm đẹp."
  },
  {
    id: 3,
    name: "Giày sneaker",
    price: 500000,
    image: "src/img/index/xproduct-03.jpg",
    description: "Giày thể thao năng động cho mọi giới."
  },
  {
    id: 4,
    name: "Túi xách nữ",
    price: 275000,
    image: "src/img/index/xproduct-04.jpg",
    description: "Túi thời trang chất liệu da PU cao cấp."
  },
  {
    id: 5,
    name: "Đồng hồ nam",
    price: 850000,
    image: "src/img/index/xproduct-05.jpg",
    description: "Đồng hồ mặt tròn dây kim loại sang trọng."
  }
];


// Render sản phẩm 
let container = document.querySelector('.content-img-button-text-product');
container.innerHTML = ""; // Xoá nội dung hiện tại của container trước khi thêm sản phẩm mới
products.forEach(product=> { // Duyệt qua từng sản phẩm trong mảng products
    // Tạo HTML cho mỗi sản phẩm
    // Sử dụng template string để dễ dàng chèn giá trị vào HTML
    const productHTML = ` 
    <div class="img-button-text-product">
                <div class="img-button">
                  <img src="${product.image}" alt="${product.image}" />
                  <button onclick="showProduct(${product.id})">Quick View</button>
                </div>
                <div class="text-product">
                  <div class="text-left">
                    <span>${product.name}</span>
                    <h3>${formatPrice(product.price)}</h3>
                  </div>
                  <div class="icon">
                    <i id="heart-1" class="bx bx-heart"></i>
                    <i id="heart-2" class="bx bxs-heart"></i>
                  </div>
                </div>
              </div>
    `;
    container.innerHTML += productHTML; // Thêm HTML của sản phẩm vào container
    // Nối chuỗi HTML của sản phẩm vào container
});


// Hàm định giá sản phẩm

function formatPrice(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    // Chuyển đổi giá sang định dạng tiền tệ Việt Nam
    // toLocaleString() chuyển số thành chuỗi định dạng theo ngôn ngữ
    // { style: 'currency', currency: 'VND' } Tuỳ chọn để định dạng thành tiền tệ (VNĐ)
}


  //  Chi tiết sản phẩm
  document.getElementById('product_sp').style.display = "none";
  function showProduct(productId) {
    const product = products.find(p => p.id === productId); // Tìm sản phẩm theo ID
    if (!product) return; // Nêu không tìm thấy sản phẩm thì thoát hàm
    var x = document.getElementById('product_sp');
    x.innerHTML = ""; // Xoá nội dung hiện tại của phần tử chi tiết sản phẩm

    if (x.style.display == "none") {
      const detailProduct = `
         <div class="product_content_sp">
        <div class="content">
          <div class="mini_image">
            <p><img src="${product.image}" alt="${product.image}" /></p>
            <p><img src="${product.image}" alt="${product.image}" /></p>
            <p><img src="${product.image}" alt="${product.image}" /></p>
          </div>
          <div class="slide">
            <div class="icon_box">
              <div class="icon">
                <button onclick="left(-1)" class="left">
                  <i class="bx bx-chevron-left"></i>
                </button>
              </div>
              <div class="icon1">
                <button onclick="left(+1)" class="right">
                  <i class="bx bx-chevron-right"></i>
                </button>
              </div>
            </div>
            <img id="anh" src="${product.image}" alt="${product.image}" />
          </div>
          <div class="text">
            <h2>${product.name}</h2>
            <h3>${formatPrice(product.price)}</h3>
            <p>
              ${product.description}
            </p>
            <div class="center_content">
              <label id="lbo" for="">Size</label>
              <select name="" id="">
                <option value="">Choose an option</option>
                <option value="">Size S</option>
                <option value="">Size M</option>
                <option value="">Size L</option>
                <option value="">Size XL</option>
              </select>
              <br />
              <label id="lbt" for=""> Color</label>
              <select name="" id="">
                <option value="">Choose an option</option>
                <option value="">Red</option>
                <option value="">White</option>
                <option value="">Blue</option>
                <option value="">Black</option>
              </select>
              <div class="count">
                <button onclick="clicknumber(-1);" id="left">
                  <i class="bx bx-minus"></i></button
                ><span id="count">0</span
                ><button onclick="clicknumber(1)" id="right">
                  <i class="bx bx-plus"></i>
                </button>
              </div>
              <button>ADD TO CART</button>
              <div class="icon_text">
                <i class="bx bx-heart"></i> |
                <i class="bx bxl-facebook"></i>
                <i class="bx bxl-twitter"></i>
                <i class="bx bxl-google-plus"></i>
              </div>
            </div>
          </div>
        </div>
        <span id="close"><i onclick="closeShowProduct()" class="bx bx-x"></i></span>
      </div>
        `;
    x.innerHTML += detailProduct; // Nối chuỗi HTML của sản phẩm vào phần tử chi tiết
        // Lấy sản phẩm đầu tiên để hiển thị chi tiết
      x.style.display = "flex"
      x.style.justifyContent = "center"
      x.style.alignItems = "center"
    }
  }

  // Đóng chi tiết sản phẩm
  function closeShowProduct() {
    var x = document.getElementById('product_sp');
    if (x.style.display == "flex") {
      x.style.display = "none"
      x.style.transition = ".6s";
    } return;
  }


