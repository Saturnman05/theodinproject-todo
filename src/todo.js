export default class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = false;
    }

    createTodoDiv() {
        const div = document.createElement('div');
        
        const title = document.createElement('h2');
        title.innerText = `Title: ${this.title}`;
        div.appendChild(title);

        const description = document.createElement('p');
        description.innerText = `Description: ${this.description}`;
        div.appendChild(description);

        const dueDate = document.createElement('p');
        dueDate.innerText = `Due date: ${this.dueDate.toString()}`;
        div.appendChild(dueDate);

        const priority = document.createElement('p');
        priority.innerText = `Priority: ${this.priority}`;
        div.appendChild(priority);

        const isDone = document.createElement('p');
        isDone.innerText = `Status: ${this.isDone ? 'Finished' : 'Not finished'}`;
        div.appendChild(isDone);

        return div;
    }
}