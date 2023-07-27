document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");
  const cartProductsContainer = document.querySelector(".cart__products");

  products.forEach((product) => {
    const quantityValue = product.querySelector(".product__quantity-value");
    const incButton = product.querySelector(".product__quantity-control_inc");
    const decButton = product.querySelector(".product__quantity-control_dec");
    const addToCartButton = product.querySelector(".product__add");

    incButton.addEventListener("click", function () {
      const quantity = parseInt(quantityValue.textContent, 10) + 1;
      quantityValue.textContent = quantity;
    });

    decButton.addEventListener("click", function () {
      let quantity = parseInt(quantityValue.textContent, 10) - 1;
      quantity = Math.max(quantity, 1);
      quantityValue.textContent = quantity;
    });

    addToCartButton.addEventListener("click", function () {
      const productId = product.dataset.id;
      const productImageSrc = product.querySelector(".product__image").src;
      const productQuantity = parseInt(quantityValue.textContent, 10);

      // Проверяем, есть ли товар уже в корзине
      const cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);

      if (cartProduct) {
        // Если товар уже в корзине, обновляем его количество
        const cartProductQuantity = cartProduct.querySelector(".cart__product-count");
        const newQuantity = parseInt(cartProductQuantity.textContent, 10) + productQuantity;
        cartProductQuantity.textContent = newQuantity;
      } else {
        // Если товара нет в корзине, создаем новый элемент и добавляем его в корзину
        const cartProductElement = document.createElement("div");
        cartProductElement.classList.add("cart__product");
        cartProductElement.dataset.id = productId;

        const cartProductImage = document.createElement("img");
        cartProductImage.classList.add("cart__product-image");
        cartProductImage.src = productImageSrc;

        const cartProductQuantityElement = document.createElement("div");
        cartProductQuantityElement.classList.add("cart__product-count");
        cartProductQuantityElement.textContent = productQuantity;

        cartProductElement.appendChild(cartProductImage);
        cartProductElement.appendChild(cartProductQuantityElement);
        cartProductsContainer.appendChild(cartProductElement);
      }
    });
  });
});
