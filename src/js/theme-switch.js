const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
bodyRef.classList.add(theme.LIGHT);
const switchButtonRef = document.querySelector('.theme-switch__toggle');

const themeSwitch = () => {
    
    if(bodyRef.classList.contains(theme.LIGHT)) {
        bodyRef.classList = theme.DARK;
    } else {bodyRef.classList = theme.LIGHT}

    localStorage.setItem('theme', bodyRef.classList);
}

const saveTheme = () => {
    const themeChosen = localStorage.getItem('theme');
    if (themeChosen === theme.DARK){
        bodyRef.classList = theme.DARK;
        switchButtonRef.checked = true;
    }
}

switchButtonRef.addEventListener('change', themeSwitch)

saveTheme();

