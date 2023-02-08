{
    const welcome = () => {
        console.log("Cześć");
    }

    const toggleBackground = () => {
        const body = document.body;
        const nextColorName = document.querySelector(".js-nextColorName");
        body.classList.toggle("body--gray");
        nextColorName.innerText = body.classList.contains("body--gray") ? "białe" : "szare";
    }


    const init = () => {
        const button = document.querySelector(".js-changeBackgroundButton");
        button.addEventListener("click", toggleBackground);

        welcome();
    }

    init();
}