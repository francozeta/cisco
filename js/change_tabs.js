function toExchangeImage(image) {
  const mainImage = document.getElementById("img_main");
  if (!mainImage || !image) return;

  mainImage.src = image.src;
  mainImage.alt = image.alt || mainImage.alt;
}

function viewImage(src) {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  if (!modal || !modalImage || !src) return;

  modalImage.src = src;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  if (!modal || !modalImage) return;

  modal.classList.add("hidden");
  modalImage.src = "";
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const productTab = document.getElementById("product-tab");
  const imagesTab = document.getElementById("images-tab");
  const informationSection = document.getElementById("information-section");
  const imagesSection = document.getElementById("images-section");
  const modal = document.getElementById("image-modal");

  function activateProductTab() {
    if (!productTab || !imagesTab || !informationSection || !imagesSection) return;

    informationSection.classList.remove("hidden");
    imagesSection.classList.add("hidden");
    productTab.className =
      "px-6 py-2 text-xs md:text-sm font-medium rounded-l-lg bg-blue-600 text-white focus:z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";
    imagesTab.className =
      "px-6 py-2 text-xs md:text-sm font-medium rounded-r-lg bg-gray-100 text-gray-700 focus:z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";
  }

  function activateImagesTab() {
    if (!productTab || !imagesTab || !informationSection || !imagesSection) return;

    informationSection.classList.add("hidden");
    imagesSection.classList.remove("hidden");
    productTab.className =
      "px-6 py-2 text-xs md:text-sm font-medium rounded-l-lg bg-gray-100 text-gray-700 focus:z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";
    imagesTab.className =
      "px-6 py-2 text-xs md:text-sm font-medium rounded-r-lg bg-blue-600 text-white focus:z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";
  }

  if (productTab) productTab.addEventListener("click", activateProductTab);
  if (imagesTab) imagesTab.addEventListener("click", activateImagesTab);
  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
});
