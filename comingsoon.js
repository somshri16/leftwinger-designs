
        const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "dream";
            }, 0);
            setTimeout(() => {
                text.textContent = "design";
            }, 4000);
            setTimeout(() => {
                text.textContent = "develop";
            }, 8000); //1s = 1000 milliseconds
        }
        textLoad();
        setInterval(textLoad, 12000);
 