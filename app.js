async function getUsers() {
  const url = "https://fakestoreapi.com/users";

  const req = await fetch(url);
  const res = await req.json();

  console.log(res);
}

async function postLogin() {
  const credentials = { username: "johnd", password: "m38rmF$" };
  const url = "https://fakestoreapi.com/auth/login";

  const req = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const res = await req.json();

  console.log(res);
}

async function postNewUser() {
  const newUser = {
    username: "john_doe",
    email: "john@example.com",
    password: "pass123",
  };

  const url = "https://fakestoreapi.com/users"
  const req = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  })

  const res = await req.json()

  console.log(res)
}

postNewUser();
