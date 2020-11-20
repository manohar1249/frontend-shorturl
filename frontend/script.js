async function shrink() {
    let data = document.getElementById('fullurl').value;
    console.log(data);
    fetch("https://myshort-url.herokuapp.com/shorturl", {
        method: 'POST',
        body: JSON.stringify({ "url": data }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        alert('Shrinked!!');
    }).catch(err => console.log(err));

}

async function filldata() {

    let raw = await fetch('https://myshort-url.herokuapp.com/');
    let data = await raw.json();

    let tbody = document.createElement('tbody');
    data.forEach(url => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = `<a href="${url.fullURL}">${url.fullURL}</a>`
        let td2 = document.createElement('td');
        td2.innerHTML = `<a href="https://myshort-url.herokuapp.com/${url.shortURL}">${url.shortURL}</a>`
        let td3 = document.createElement('td');
        td3.innerHTML = url.clicks;
        tr.append(td1, td2, td3);
        tbody.append(tr);
    })
    document.getElementById('urlTable').appendChild(tbody);
}


filldata();