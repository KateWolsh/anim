// TODO: write code here

document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", () => {
        const description = button.nextElementSibling;

        description.classList.toggle("description--active");

        if (description.classList.contains("description--active")) {
          description.style.maxHeight = description.scrollHeight + 'px';
        } else {
          description.style.maxHeight = 0;
        }
    });
});
// comment this to pass build
// const unusedVariable = "variable";

// // for demonstration purpose only
// export default function demo(value) {
//   return `Demo: ${value}`;
// }

// console.log("app.js included");
