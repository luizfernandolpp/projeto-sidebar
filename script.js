// Variáveis para a logo
const headerWidth = document.querySelector('#header')   // width
const logoDiv = document.getElementById('logoAndButton')    // justify-content: center; width
const logoImg = document.getElementById('logoImg')  // display: none;

// Variáveis para a lista

const list = document.querySelector('ul') // align-items: center;
const navBar = document.querySelector('nav')

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

function sidebar(){                     // Função que mostra/esconde a sidebar
    if (hide && innerWidth <= 768){
        headerWidth.style = 'width: 100px;';
        logoDiv.style = 'justify-content: center; width: 100px;'
        logoImg.style = 'display: none'

        list.style = 'align-items: center;'
        navBar.style = 'margin: 10px;'
        
        dashboardLink.style = 'display: none;'
        petsLink.style = 'display: none;'
        clientsLink.style = 'display: none;'
        vetLink.style = 'display: none;'
        settingsLink.style = 'display: none;'

        inputDiv.style = 'width: 50px; padding: 10px'
        input.style = 'display: none'

        profileDiv.style = 'width: 100px; justify-content: center;'
        profileImg.style = 'display: none;'
        paragraphs.style = 'display: none;'

        hide = false
        return;
    }

    if (!hide && innerWidth <= 768){
        headerWidth.style = 'width: 200px;';
        logoDiv.style = 'justify-content: space-between; width: 200px;'
        logoImg.style = 'display: inline'

        list.style = 'align-items: flex-start;'
        
        dashboardLink.style = 'display: inline;'
        petsLink.style = 'display: inline;'
        clientsLink.style = 'display: inline;'
        vetLink.style = 'display: inline;'
        settingsLink.style = 'display:inline;'

        inputDiv.style = 'width: 150px; padding: 12px 5px'
        input.style = 'display: inline'

        profileDiv.style = 'width: 200px; justify-content: spaceb-between;'
        profileImg.style = 'display: inline;'
        paragraphs.style = 'display: block;'

        hide = true
        return;
    }

    if (hide && innerWidth > 768){
        headerWidth.style = 'width: 150px;';
        logoDiv.style = 'justify-content: center; width: 150px;'
        logoImg.style = 'display: none'

        list.style = 'align-items: center; width: 150px'
        
        dashboardLink.style = 'display: none;'
        petsLink.style = 'display: none;'
        clientsLink.style = 'display: none;'
        vetLink.style = 'display: none;'
        settingsLink.style = 'display: none;'

        inputDiv.style = 'width: 50px; padding: 10px'
        input.style = 'display: none'

        profileDiv.style = 'width: 150px; justify-content: center;'
        profileImg.style = 'display: none;'
        paragraphs.style = 'display: none;'

        hide = false
        return;
    }

    if (!hide && innerWidth > 768){
        headerWidth.style = 'width: 300px;';
        logoDiv.style = 'justify-content: space-between; width: 300px;'
        logoImg.style = 'display: inline'

        list.style = 'align-items: flex-start;'
        
        dashboardLink.style = 'display: inline;'
        petsLink.style = 'display: inline;'
        clientsLink.style = 'display: inline;'
        vetLink.style = 'display: inline;'
        settingsLink.style = 'display:inline;'

        inputDiv.style = 'width: 250px; padding: 12px 5px'
        input.style = 'display: inline'

        profileDiv.style = 'width: 300px; justify-content: spaceb-between;'
        profileImg.style = 'display: inline;'
        paragraphs.style = 'display: block;'

        hide = true
        return;
    }
}

function screenSize(){   // Função para abrir a sidebar sempre que a viewport tiver seu tamanho alterado
    if (hide && innerWidth === 768){
        headerWidth.style = 'width: 100px;';
        logoDiv.style = 'justify-content: center; width: 100px;'
        logoImg.style = 'display: none'

        list.style = 'align-items: center;'
        navBar.style = 'margin: 10px;'
        
        dashboardLink.style = 'display: none;'
        petsLink.style = 'display: none;'
        clientsLink.style = 'display: none;'
        vetLink.style = 'display: none;'
        settingsLink.style = 'display: none;'

        inputDiv.style = 'width: 50px; padding: 10px'
        input.style = 'display: none'

        profileDiv.style = 'width: 100px; justify-content: center;'
        profileImg.style = 'display: none;'
        paragraphs.style = 'display: none;'

        hide = false
        return;
    }

    if(!hide && innerWidth === 768){
        headerWidth.style = 'width: 200px;';
        logoDiv.style = 'justify-content: space-between; width: 200px;'
        logoImg.style = 'display: inline'

        list.style = 'align-items: flex-start;'
        
        dashboardLink.style = 'display: inline;'
        petsLink.style = 'display: inline;'
        clientsLink.style = 'display: inline;'
        vetLink.style = 'display: inline;'
        settingsLink.style = 'display:inline;'

        inputDiv.style = 'width: 150px; padding: 12px 5px'
        input.style = 'display: inline'

        profileDiv.style = 'width: 200px; justify-content: spaceb-between;'
        profileImg.style = 'display: inline;'
        paragraphs.style = 'display: block;'

        hide = true
        return
    }
    
    
    if (hide && innerWidth > 768){
        headerWidth.style = 'width: 150px;';
        logoDiv.style = 'justify-content: center; width: 150px;'
        logoImg.style = 'display: none'

        list.style = 'align-items: center; width: 150px'
        
        dashboardLink.style = 'display: none;'
        petsLink.style = 'display: none;'
        clientsLink.style = 'display: none;'
        vetLink.style = 'display: none;'
        settingsLink.style = 'display: none;'

        inputDiv.style = 'width: 50px; padding: 10px'
        input.style = 'display: none'

        profileDiv.style = 'width: 150px; justify-content: center;'
        profileImg.style = 'display: none;'
        paragraphs.style = 'display: none;'

        hide = false
        return;


    }

    if (!hide && innerWidth > 768){
        headerWidth.style = 'width: 300px;';
        logoDiv.style = 'justify-content: space-between; width: 300px;'
        logoImg.style = 'display: inline'

        list.style = 'align-items: flex-start;'
        
        dashboardLink.style = 'display: inline;'
        petsLink.style = 'display: inline;'
        clientsLink.style = 'display: inline;'
        vetLink.style = 'display: inline;'
        settingsLink.style = 'display:inline;'

        inputDiv.style = 'width: 250px; padding: 12px 5px'
        input.style = 'display: inline'

        profileDiv.style = 'width: 300px; justify-content: spaceb-between;'
        profileImg.style = 'display: inline;'
        paragraphs.style = 'display: block;'

        hide = true
        return;
    }
}







