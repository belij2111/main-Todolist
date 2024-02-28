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

function deleteTask(taskId) {
	const { tasks } = data.todolist
	data.todolist.tasks = tasks.filter((t) => t.id !== taskId)
}

function addTask(taskTitle) {
	const newTask = {
		id: crypto.randomUUID(),
		title: taskTitle,
	}
	data.todolist.tasks.push(newTask)
}
