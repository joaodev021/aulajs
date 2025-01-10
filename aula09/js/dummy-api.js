async function getUsers() {
  const resposta = await fetch("https://dummyapi.io/data/v1/user?created=1", {
    headers: {
      "app-id": "67804f60e98d845c40d9447c",
    },
  });

  const users = await resposta.json();
  console.log(users.data);
}
getUsers();

async function getUser() {
  const resposta = await fetch(
    "https://dummyapi.io/data/v1/user/67811090fc37eaf71a4083fa",
    {
      headers: {
        "app-id": "67804f60e98d845c40d9447c",
      },
    },
  );

  const user = await resposta.json();
  console.log(user);
}
getUser();

async function createUser() {
  const userData = {
    firstName: "John",
    lastName: "Galvão",
    email: "johngalvao@testing.com",
  };
  try {
    await fetch("https://dummyapi.io/data/v1/user/create", {
      method: "POST",
      headers: {
        "app-id": "67804f60e98d845c40d9447c",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  } catch (erro) {
    console.log("Deu erro ao tentar criar um novo usuário:", erro);
  }
}
// createUser();

async function deleteUser() {
  await fetch("https://dummyapi.io/data/v1/user/67806d748433522526194ba4", {
    method: "DELETE",
    headers: {
      "app-id": "67804f60e98d845c40d9447c",
    },
  });
}
// deleteUser();
