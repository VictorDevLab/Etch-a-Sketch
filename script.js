const main = document.getElementById('main')

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div')
    div.classList.add('blah')
    main.appendChild(div)
} 

