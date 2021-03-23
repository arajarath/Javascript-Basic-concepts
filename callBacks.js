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

function addPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 500);
}
// getPosts();
addPost({ title: "Post Three", body: "This is post three" }, getPosts);
