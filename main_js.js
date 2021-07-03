const input_zone = document.querySelector('.input');
const addbtn = document.querySelector('.btn');
const input_container = document.querySelector('.todo-list');

addbtn.addEventListener('click', new_task);
input_container.addEventListener('click', delete_task);

function new_task(event) {
    event.preventDefault();
    const newdiv = document.createElement('div');
    newdiv.classList = "newdiv";
    const newli = document.createElement('input');
    newli.classList = "newlit";
    newli.value = input_zone.value;
    localStorage.setItem('Task', input_zone.value);
    newli.disabled = true;
    newdiv.appendChild(newli);
    const addbtn = document.createElement('button')
    addbtn.classList = "newadd";
    addbtn.innerHTML = '<i class="fas fa-check"></i>';
    newdiv.appendChild(addbtn);
    const changebtn = document.createElement('button');
    changebtn.classList = "changebtn";
    changebtn.innerHTML = '<i class="fas fa-arrow-circle-left"></i>';
    newdiv.appendChild(changebtn);
    const deletbtn = document.createElement('button');
    deletbtn.classList = "newdelete";
    deletbtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    newdiv.appendChild(deletbtn);
    input_container.appendChild(newdiv);
}

function delete_task(e){ 
    const item = e.target;
    if(item.classList[0] === 'newdelete'){
        const task = item.parentElement;
        task.remove();
    }
    if(item.classList[0] === 'newadd'){
        const task = item.parentElement;
        task.classList.toggle('checked')
    }
}

document.addEventListener('click', (e) => {
    if(e.target.innerHTML.includes("fa-arrow-circle-left")) {
        const parent = e.target.parentNode;
        const children = Array.from(parent.children);
        const inputChild = children.find((elem) =>
            elem.className.includes("newlit")
        );

        inputChild.disabled = false

        inputChild.focus();

        e.target.innerHTML = '<i class="fas fa-spinner"></i>';

    } else if(e.target.innerHTML.includes("fa-spinner")) {
        const parent = e.target.parentNode;
        const children = Array.from(parent.children);
        const inputChild = children.find((elem) =>
            elem.className.includes("newlit")
        );

        inputChild.disabled = true;

        e.target.innerHTML = '<i class="fas fa-arrow-circle-left"></i>';
    } else {
        console.clear();
    }
})