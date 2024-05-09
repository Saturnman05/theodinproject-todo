import _ from 'lodash';
import './style.css';
import Todo from './todo';

function component() {
    const element = document.createElement('div');

    const btn = document.createElement('button');
    btn.innerHTML = 'Create Todo';
    btn.addEventListener('click', () => {
        const todoObject = new Todo('Hola', 'Descripcion', new Date(), 'Important');
        document.body.appendChild(todoObject.createTodoElement());
    })

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());