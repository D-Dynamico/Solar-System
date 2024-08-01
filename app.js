/*const screenWidth = 1536;
const titleWidth = 778;
const descriptionWidth = 750;

function getWidth() {
    let newScreen = screen.width;

    let newTitle = (titleWidth / screenWidth) * newScreen;
    let newDescription = (descriptionWidth / screenWidth) * newScreen;

    document.querySelector('.heroTitle').style.width = `${newTitle}px`;
    document.querySelector('.description').style.width = `${newDescription}px`;
}

window.onresize = getWidth;
*/

const heroBtn = document.querySelector(".heroBtn");
const sunSection = document.querySelector(".sun");

heroBtn.addEventListener("click", function () {
    sunSection.scrollIntoView({ behavior: "smooth" });
});


const submitBtn = document.querySelector('.submitButton');

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let email = document.querySelector('.search').value;
    if (validateEmail(email)) {
        document.querySelector('.correctMsg').style.display = "block";
        setTimeout(() => {
            document.querySelector('.correctMsg').style.display = "none";
        }, 3000); //time is always in millisecond
    } else {
        document.querySelector('.wrongMsg').style.display = "block";
        setTimeout(() => {
            document.querySelector('.wrongMsg').style.display = "none";
        }, 3000);
    }
});

function validateEmail(email) {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //it is standard email format
    return emailFormat.test(email);
}