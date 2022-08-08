async function firstSixIncomplete(userId) {

        const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

        const result = await promise.json()

        const incompleteTodos = result.filter(element => element.completed === false).slice(0,6);

        console.log(incompleteTodos)

    }

firstSixIncomplete(6);