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
    addbtn.innerHTML = '<i class="fas fa-plus"></i>';
    newdiv.appendChild(addbtn);
    const changebtn = document.createElement('button');
    changebtn.classList = "changebtn";
    changebtn.innerHTML = '<i class="fas fa-carrot"></i>';
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
    if(item.classList[0] === 'changebtn'){
        console.log(item);
    }
}