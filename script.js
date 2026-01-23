function goTo(section){
    document.getElementById(section).scrollIntoView({
        behavior: "smooth",
        inline:"start"
    });
}
