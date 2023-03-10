const menuButton = document.querySelector('div#menu')
const mainTitle = document.querySelector('h1')
const sideBar = document.querySelector('div#SideBar')
const logo = document.querySelector('img#logoImg')
const logOut = document.querySelector ('div#logOut')
const logOutImg = document.querySelector('img#logOutImg')

function HideShow(){
    logo.style.display = 'none'
    logOutImg.style = 'left: 3.5vw'
    logOut.style.display = 'none'
    sideBar.style = 'width: 5vw;'
    menuButton.style = 'left: 3.5vw'
    mainTitle.style = 'left: 6vw'
    
}