const panel_list_nodes = document.querySelectorAll('.panel')
// console.log('panels: ', panel_list_nodes);
panel_list_nodes[0].classList.add('active')
const removeActiveClasses = () =>{
    panel_list_nodes.forEach((node) =>{
        node.classList.remove('active')
    })
}
panel_list_nodes.forEach((node) =>{
    node.addEventListener('click', ()=>{
        removeActiveClasses()
        node.classList.add('active')
    })
})

