const results = document.querySelector('#results');

async function asyncFetch(value) {
    const res = await fetch(`https://swapi.dev/api/${value}/`);
    const data = await res.json();
    displayResults(data, value)
};

function displayResults(data, value) {
    let output = "";
    console.log(data)
    if(value === 'films') {
        data.results.forEach(item => {
            output += `
                <div class="card p-3 m-3" style="opacity:.8">
                    <h4 class="card-title text-center">${item.title}</h4>
                    <div class="card-content>
                        <span style=""text-decoration:underline>Producer</span>: ${item.producer} <br>
                        <span style=""text-decoration:underline>Director</span>: ${item.director} <br>
                        <p class="text-center">${item.opening_crawl}</p>
                    </div>
                </div>
            `
        })
    }
    if(value === 'people') {
        data.results.forEach(item => {
            output += `
                <div class="card p-3 m-3" style="opacity:.8">
                    <h4 class="card-title text-center">${item.name}</h4>
                    <div class="card-content>
                        <span style=""text-decoration:underline>Height</span>: ${item.height} <br>
                        <span style=""text-decoration:underline>Birth Year</span>: ${item.birth_year} <br>
                    </div>
                </div>
            `
        })
    }
    if(value === 'planets') {
        data.results.forEach(item => {
            output += `
                <div class="card p-3 m-3" style="opacity:.8">
                    <h4 class="card-title text-center">${item.name}</h4>
                    <div class="card-content>
                        <span style=""text-decoration:underline>Rotation Period</span>: ${item.rotation_period} <br>
                        <span style=""text-decoration:underline>Orbital Period</span>: ${item.orbital_period} <br>
                    </div>
                </div>
            `
        })
    }
    if(value === 'species') {
        data.results.forEach(item => {
            output += `
                <div class="card p-3 m-3" style="opacity:.8">
                    <h4 class="card-title text-center">${item.name}</h4>
                    <div class="card-content>
                        <span style=""text-decoration:underline>Classification</span>: ${item.classification} <br>
                        <span style=""text-decoration:underline>Designation</span>: ${item.designation} <br>
                    </div>
                </div>
            `
        })
    }
    if(value === 'starships') {
        data.results.forEach(item => {
            output += `
                <div class="card p-3 m-3" style="opacity:.8">
                    <h4 class="card-title text-center">${item.name}</h4>
                    <div class="card-content>
                        <span style=""text-decoration:underline>Model</span>: ${item.model} <br>
                        <span style=""text-decoration:underline>Manufacturer</span>: ${item.manufacturer} <br>
                    </div>
                </div>
            `
        })
    }
    if(value === 'vehicles') {
        data.results.forEach(item => {
            output += `
                <div class="card p-3 m-3" style="opacity:.8">
                    <h4 class="card-title text-center">${item.name}</h4>
                    <div class="card-content>
                        <span style=""text-decoration:underline>Capacity</span>: ${item.cargo_capacity} kg<br>
                        <span style=""text-decoration:underline>Model</span>: ${item.model} <br>
                    </div>
                </div>
            `
        })
    }
    results.innerHTML = output;
}

//event listener for buttons
document.querySelector('#buttons').addEventListener('click', e => {
    asyncFetch(e.target.textContent.trim().toLowerCase())
})