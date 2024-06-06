function getUser(userId, callback) {
  // Simulate asynchronous operation (e.g., database query)
  setTimeout(() => {
    const user = { id: userId, name: "John Doe" };
    callback(user);
  }, 1000);
}

function getPosts(userId, callback) {
  // Simulate asynchronous operation (e.g., API call)
  setTimeout(() => {
    const posts = [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ];
    callback(posts);
  }, 500);
}

getUser(1, (user) => {
  getPosts(user.id, (posts) => {
    console.log("User:", user);
    console.log("Posts:", posts);
  });
});