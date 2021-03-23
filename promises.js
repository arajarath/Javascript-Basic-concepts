const posts = [
  { title: "Post One", body: "This is Post one" },
  { title: "Post Two", body: "This is Post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function addPost(post) {
  return new Promise((resolve, reject) => {
    let error = true;
    if (!error) {
      resolve();
    } else {
      reject("Error: Something went wrong");
    }
    setTimeout(() => {
      posts.push(post);
    }, 500);
  });
}
// getPosts();

// Using Promises

// addPost({ title: "Post Three", body: "This is post three" })
//   .then(getPosts)
//   .catch((error) => console.log(error));

// const promise1 = Promise.resolve("Hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Goodbye");
// });

// const promise4 = fetch(
//   "https://jsonplaceholder.typicode.com/users"
// ).then((res) => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );

// Fetch Api using Async/ Await

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}
fetchUsers();
