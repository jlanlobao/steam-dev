// games.forEach((element, index) => {
//   const divCarouselItem = document.createElement("div");

//   index === 0
//     ? divCarouselItem.classList.add("carousel-item", "active")
//     : divCarouselItem.classList.add("carousel-item");

//   divCarouselItem.innerHTML += `
//       <img src="${element.thumb}" class="d-block w-100" alt="${element.name}">
//       <div class="carousel-caption d-none d-md-block">
//         <h5>${element.name}</h5>
//         <p>R$ ${
//           element.originalPrice > element.promoPrice
//             ? element.promoPrice.toFixed(2)
//             : element.originalPrice.toFixed(2)
//         }</p>
//       </div>`;

//   divCarouselInner.appendChild(divCarouselItem);
// });
