// Variáveis para a logo
const headerWidth = document.querySelector('#header')   // width
const logoDiv = document.getElementById('logoAndButton')    // justify-content: center; width
const logoImg = document.getElementById('logoImg')  // display: none;

// Variáveis para a lista

const list = document.querySelector('ul') // align-items: center;

// display: none;
const dashboardLink = document.getElementById('dashboardLink')
const petsLink = document.getElementById('petsLink')
const clientsLink = document.getElementById('clientsLink')
const vetLink = document.getElementById('vetLink')
const settingsLink = document.getElementById('settingsLink')

const inputDiv = document.getElementById('searchItem') // mexer no width
const input = document.getElementById('isearch') // display: none;


// Variáveis para o profile

const profileDiv = document.getElementById('profileAndLogOut') // mexer no width e setar -> justify-content: center;
const profileImg = document.getElementById('profileImg') // display: none;
const paragraphs = document.getElementById('paragraphs') // display: none;

let hide = true // Variável condicional

function sidebar(){
    if (hide){
        headerWidth.style = 'width: 20vw;';
        logoDiv.style = 'justify-content: center; width: 20vw;'
        logoImg.style = 'display: none'

        list.style = 'align-items: center;'
        
        dashboardLink.style = 'display: none;'
        petsLink.style = 'display: none;'
        clientsLink.style = 'display: none;'
        vetLink.style = 'display: none;'
        settingsLink.style = 'display: none;'

        inputDiv.style = 'width: 10vw; padding: 10px'
        input.style = 'display: none'

        profileDiv.style = 'width: 20vw; justify-content: center;'
        profileImg.style = 'display: none;'
        paragraphs.style = 'display: none;'

        hide = false
        return;
    }

    if (!hide){
        headerWidth.style = 'width: 40vw;';
        logoDiv.style = 'justify-content: space-between; width: 40vw;'
        logoImg.style = 'display: inline'

        list.style = 'align-items: flex-start;'
        
        dashboardLink.style = 'display: inline;'
        petsLink.style = 'display: inline;'
        clientsLink.style = 'display: inline;'
        vetLink.style = 'display: inline;'
        settingsLink.style = 'display:inline;'

        inputDiv.style = 'width: 35vw; padding: 12px 5px'
        input.style = 'display: inline'

        profileDiv.style = 'width: 40vw; justify-content: spaceb-between;'
        profileImg.style = 'display: inline;'
        paragraphs.style = 'display: block;'

        hide = true
        return;
    }
}







