const btnDarkMode = document.querySelector(".dark-mode-btn");

// проверка тёмной темы на уровне системных настроек
if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches){
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

// проверка тёмной темы в localStorage
if(localStorage.getItem('DarkMode') == 'dark'){
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
    localStorage.setItem('DarkMode', 'dark');
}
else if(localStorage.getItem('DarkMode') == 'light'){
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
    localStorage.setItem('DarkMode', 'light');
}

// Eсли меняются системные настройки, то меняем тему
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', () => {
    const newColorScheme = event.matches ? "dark": "light";
    if(newColorScheme == "dark"){
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
    }
    else{
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
    }
})


// Включение ночного режима по кнопке
btnDarkMode.onclick = function(){
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if(isDark){
        localStorage.setItem('DarkMode', 'dark');
    }
    else{
        localStorage.setItem('DarkMode', 'light');
    }
}