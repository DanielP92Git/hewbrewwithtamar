"use strict";

// let observerOptions = {
//   rootMargin: "0px",
//   threshold: 0.5,
// };

const headers = document.querySelectorAll(".text-header");
const scrollHeader = function (entries) {
  entries.forEach((entry) => {
    const curHeader = entry.target;
    if (!entry.isIntersecting) return;
    //   curHeader.classList.remove("active");

    if (entry.isIntersecting) {
      curHeader.classList.add("active");
    }
  });
};
let option = {
  root: null,
  threshold: 0,
};

let observer = new IntersectionObserver(scrollHeader, option);

headers.forEach((header) => {
  observer.observe(header);
});

// const headerObserver = new IntersectionObserver(scrollHeader, {
//   root: null,
//   threshold: 0.2,
// });
// headerObserver.observe(headers);
// const headerObserver = function () {
//   headers.forEach(
//     (header) =>
//       new IntersectionObserver(scrollHeader, {
//         root: null,
//         threshold: 0.2,
//     }),
//     headerObserver.observe(header);
//   );
// };
