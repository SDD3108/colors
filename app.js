const blocks = document.querySelector('.blocks')
function toColor(){
    fetch('https://reqres.in/api/unknown')
    .then(response => response.json())
    .then(answer => {
        let lol = answer.data
        // console.log(lol);
        lol.forEach(element=>{
            const block = document.createElement('div')
            let mem = element.color
            block.style.backgroundColor = mem
            block.classList.add('block')
            blocks.append(block)
            // console.log(mem);
            block.innerHTML += `
            <h2> code: ${mem} </h2>
            <h2> name: ${element.name} </h2>
            <h2> pantone: ${element.pantone_value} </h2>
            `
        });
    })
}
toColor()