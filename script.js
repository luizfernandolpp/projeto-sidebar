const headerWidth = document.querySelector('header')

const logoImg = document.querySelector('img#logoImg')
const logoAndButton = document.querySelector('div#logoAndButton')

const searchDiv = document.querySelector('#searchDiv')
const itensList = document.querySelector('.itensList')

const search = document.getElementById('searchItem')
const dashboard = document.getElementById('dashboard')
const pets = document.getElementById('pets')
const clients = document.getElementById('clients')
const vets = document.getElementById('vets')
const settings = document.getElementById('settings')

const userImg = document.querySelector('img#userPic')
const paragraphs = document.querySelector('div#paragraphs')
const logOutWidth = document.querySelector('div#logOut')
let Hide = true

function HideAndShow(){
    if(Hide && window.innerWidth < 768){
        headerWidth.style = 'width: 50vw;'
        
        logoImg.style =  'display: flex;'
        logoAndButton.style = 'justify-content: space-between;'
        
        searchDiv.style = 'justify-content: left; padding-left: 10px; gap: 10%;'
        itensList.style = 'justify-content: left; gap: 10%;'

        search.style = 'display: flex;'
        dashboard.style = 'display: flex;'
        pets.style = 'display: flex;'
        clients.style = 'display: flex;'
        vets.style = 'display: flex;'
        settings.style = 'display: flex;'



        logOutWidth.style = 'width: 50vw'
        userImg.style = 'display: flex; width: 60px; height: 60px; border-radius: 10px;'
        paragraphs.style = 'display: flex; flex-direction: column; position: relative; left: -10px; font-weight: bold;'

        
        
    }
}
