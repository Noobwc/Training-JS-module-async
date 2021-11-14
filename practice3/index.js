import fetch from 'node-fetch'

function getPoetry(){
    return fetch('https://v1.jinrishici.com/all.json')
        .then(response => {
            return response.json();
        })
        .then(body => {
            const result = [body.origin, body.author, body.content];
            console.log(result);
            return result;
        }).catch(error => console.log(error));
}

async function getPoetryByAsync(){
    const result = await getPoetry();
    setTimeout( ()=>{
        console.log(result);
    }, 1000);
}

getPoetry();
getPoetryByAsync();

