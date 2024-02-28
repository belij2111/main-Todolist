const data = {
	todolist: {
		id: crypto.randomUUID(),
		title: "Todolist",
		tasks: [
			{
				id: crypto.randomUUID(),
				title: "Task1",
			},
			{
				id: crypto.randomUUID(),
				title: "Task2",
			},
			{
				id: crypto.randomUUID(),
				title: "Task3",
			},
		],
	},
}

let subscribers = []

export function subscribe(newSubscriber) {
	subscribers.push(newSubscriber)
}

function notify() {
	subscribers.forEach((subscriber) => subscriber())
}

function deleteTask(taskId) {
	const { tasks } = data.todolist
	data.todolist.tasks = tasks.filter((t) => t.id !== taskId)
	notify()
}

function addTask(taskTitle) {
	const newTask = {
		id: crypto.randomUUID(),
		title: taskTitle,
	}
	data.todolist.tasks.push(newTask)
	notify()
}
