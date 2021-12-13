const URL = "https://rickandmortyapi.com/api/character/";

const main_card = document.querySelector('#main-card');

const template_card = document.querySelector('#template-card').content;

const fragment = document.createDocumentFragment();

const characters = document.getElementById('sel-character');

characters.addEventListener('change', CreateCard);

let rickandmorty;
FetchApi(rickandmorty)

function CreateCard(rickandmorty) {
    fetch(URL)
    .then(response => response.json())
    .then(data=>{
        return data.results.map((results)=>{
            let id = rickandmorty.target.value;
            console.log(id);
            if (id === 'everybody') {
                let cloneTemplate = document.importNode(template_card,true);
                cloneTemplate.querySelector('.img-card').setAttribute('src',results.image);
                cloneTemplate.querySelector('.name-card').textContent = results.name;
                cloneTemplate.querySelector('.species-card').textContent = 'Specie: '+results.species;
                cloneTemplate.querySelector('.status-card').textContent = 'Status: '+results.status;
                cloneTemplate.querySelector('.gender-card').textContent = 'Gender: '+results.gender;
                
                fragment.appendChild(cloneTemplate);
                main_card.appendChild(fragment)
            }
            if(results.name===id){
                main_card.innerHTML = '';
                let cloneTemplate = document.importNode(template_card,true);
                cloneTemplate.querySelector('.img-card').setAttribute('src',results.image);
                cloneTemplate.querySelector('.name-card').textContent = results.name;
                cloneTemplate.querySelector('.species-card').textContent = 'Specie: '+results.species;
                cloneTemplate.querySelector('.status-card').textContent = 'Status: '+results.status;
                cloneTemplate.querySelector('.gender-card').textContent = 'Gender: '+results.gender;                
                fragment.appendChild(cloneTemplate);
                main_card.appendChild(fragment)
            }
           
        })
    })
   
}

function FetchApi(rickandmorty) {
    fetch(URL)
    .then(response => response.json())
    .then(data=>{
        return data.results.map((card)=>{
        rickandmorty = document.createElement('option');
        rickandmorty.value=card.name;
        rickandmorty.textContent=card.name
        rickandmorty.setAttribute('id', card.id)
        characters.appendChild(rickandmorty);
        return card
        })
    })
}

