export const colors = {
    black: "#0D0D0D",
    background: "#F5FFF7",
    primary: "#137D27",
    gray: "#4A4A4A",
    lightGreen: "#5EDF76",
    white: '#fff',
    greenSurface:"#A8FFB8"
}
export const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
export const passwordRegex = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
