# Getting Started, to open the application follow the link below, the app is hosted on heroku

Click the link to interact with the app [ReminderApp](https://reminderjsonapp.herokuapp.com/).

## Build environment

This project was develpoed with the following libraries:

### React

React is library that allows building interactive UIs and desing simple Viewsfor each state in your application. react renders and updates the right components when your data changes.

Declarative code makes your code more predictable and easier to bedug. React allowscomponent based development. Each component can manage their own state.

### Json server

Json server is a Node Module that allows creating demo REST webservices. REST full api allow for GET, UPDATE, PUTB and PATCH requests. you do this by creating a db.json file and installing json server using the command  `npm i json-server` and running the command `npm run server`

### REST request

Get request, the reminder are fetched using the fetch command using the useEffect hook
```
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((tasks) => {
        setTasks(tasks)
      })
  }, []);
```
POST request
this adds a reminder
```
const addTask = (task) => {
  fetch("http://localhost:5000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  })

  .then((r) => r.json())
  .then((newTask) => setTasks([...tasks, newTask]))

}
```


### Run app locally

To run app localy download a zip file and extract or or fork the project.
run the server on your terminal by running npm run server. On a new terminal run npm start.

## blog Link

To read more about the blog visit [Blog site](https://harry74.hashnode.dev/reminder-app-with-react-and-json-server).



