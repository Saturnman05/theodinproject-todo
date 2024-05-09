export default class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = false;
    }

    createTodoElement(typeElement='div') {
        const element = document.createElement(typeElement);
        
        const title = document.createElement('h2');
        title.innerText = `Title: ${this.title}`;
        element.appendChild(title);

        const description = document.createElement('p');
        description.innerText = `Description: ${this.description}`;
        element.appendChild(description);

        const dueDate = document.createElement('p');
        dueDate.innerText = `Due date: ${this.dueDate.toString()}`;
        element.appendChild(dueDate);

        const priority = document.createElement('p');
        priority.innerText = `Priority: ${this.priority}`;
        element.appendChild(priority);

        const isDone = document.createElement('p');
        isDone.innerText = `Status: ${this.isDone ? 'Finished' : 'Not finished'}`;
        element.appendChild(isDone);

        return element;
    }
}