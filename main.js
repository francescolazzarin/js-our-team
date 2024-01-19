// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.



// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe


// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva


// BONUS 2:
// Organizzare i singoli membri in card/schede
// Consigli del giorno:
// Ragioniamo come sempre a step.

// Dati da usare:
// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg



// creo l'array di oggetti

const arrayMembriTeam = [
    {
        nome:'Angela Caroll',
        ruolo:'Chief Editor',
        foto:'angela-caroll-chief-editor.jpg',
    },
    {
        nome:'Angela Lopez',	
        ruolo:'Social Media Manager',
        foto:'angela-lopez-social-media-manager.jpg',
    },
    {
        nome:'Barbara Ramos',	
        ruolo:'Graphic Designer',
        foto:'barbara-ramos-graphic-designer.jpg ',
    },
    {
        nome:'Scott Estrada',	
        ruolo:'Developer',
        foto:'scott-estrada-developer.jpg',
    },
    
    {
        nome:'Walter Gordon	',	
        ruolo:'Office Manager',
        foto:'walter-gordon-office-manager.jpg',
    },
    {
        nome:'Wayne Barnett',
        ruolo:'Founder & CEO',
        foto:'wayne-barnett-founder-ceo.jpg',
    },
]
// seleziono il tag body
let divStampa=document.getElementById('stampa')
// ciclo su la lunghezza dell'array di oggetti
for(let i=0; i<arrayMembriTeam.length; i++){
    // ad ogni giro di cilo creo un div
    let div=document.createElement("div")
    div.classList.add("card","col-4")
// ciclo interno su gli oggetti in base all'indice dell'array
    for (let key in arrayMembriTeam[i]){
        let divCardBody=document.createElement("div")
        if (key==='foto'){
            // creo l'elemento immagine
            let immagine=document.createElement("img")
            // gli associo una classe...anche se non funziona :)
            immagine.classList.add("card-img-top")
            // percorso img
            immagine.src="./img/"+arrayMembriTeam[i][key]
            div.append(immagine)
        }else{
            divCardBody.classList.add("card-body")
            divCardBody.textContent=key+":"+arrayMembriTeam[i][key]
        }
        div.append(divCardBody)
    }
    divStampa.append(div)   
}