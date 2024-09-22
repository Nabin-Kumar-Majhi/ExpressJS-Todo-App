export function createTodoFormView() {
  return `
    <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Create Todo Form</title>
    </head>
    <body>
      <h1>Create Todo</h1>
  
      <form action="/create-todo" method="post">
        <label>
          Name
          <input name="name" type="text" placeholder="enter todo name" />
        </label>
        <label
          >Status
          <input
            name="status"
            type="text"
            placeholder="not_started, in_progress, done"
          />
        </label>
  
        <input type="submit" name="submit" value="submit" />
      </form>
  
      <script>
        const form = document.querySelector("form");
  
        const nameInput = document.querySelector('input[name="name"]');
        const statusInput = document.querySelector('input[name="status"]');
  
        console.log({
          nameInput,
          statusInput,
        });
  
        form.addEventListener("submit", (e) => {
          e.preventDefault();
  
          const name = nameInput.value;
          const status = statusInput.value;
  
          fetch("/create-todo", {
            method: "POST",
            body: JSON.stringify({
              name,
              status,
            }),
            headers: {
              "content-type": "application/json",
            },
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log("data", data);
            })
            .catch((e) => {
              console.error("Failed to submit data", e);
            });
        });
      </script>
    </body>
  </html>
  
    `;
}
