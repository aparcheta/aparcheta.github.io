let btnGetData = document.getElementById('get-data');

const getData = () => {

    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    .then(res => res.json())
    .then(data =>{

        let divData = document.createElement('div');
       
        divData.innerText = `Imię: ${data.imie}, Nazwisko: ${data.nazwisko}, Zawód: ${data.zawod}, Firma: ${data.firma}`;
        
        document.body.appendChild(divData);
        
        console.log(data);
       
    })

    .catch(error => {
        console.error(error);
    })

};

btnGetData.addEventListener('click', getData);
