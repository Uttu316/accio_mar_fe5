function getUserData(username, onSuccess, onFailure) {
  setTimeout(() => {
    console.log("C");
    if (username === "ABC") {
      onSuccess({
        id: "323212",
        name: "Abc Xyz",
      });
    } else {
      onFailure("Oops");
    }
  }, 3000);

  console.log("D");
}

function getPost(userId, onSuccess, onFailure) {
  setTimeout(() => {
    if (userId) {
      const post = {
        postid: "323dwec2",
        caption: "Stop the war",
      };
      onSuccess(post);
    } else {
      onFailure("No post");
    }
  }, 3000);
}

function getComment(postId, onSuccess, onFailure) {
  setTimeout(() => {
    if (postId) {
      const comment = {
        id: "7287323",
        comment: "Iran rocks",
      };
      onSuccess(comment);
    } else {
      onFailure("No comment");
    }
  }, 3000);
}

console.log("A");
getUserData(
  "ABC",
  (data) => {
    console.log("User", data);
    getPost(
      data.id,
      (post) => {
        console.log("Post", post);
        getComment(
          post.postid,
          (comment) => {
            console.log("Comment", comment);
          },
          (err) => {
            console.log(err);
          },
        );
      },
      (err) => {
        console.log(err);
      },
    );
  },
  (err) => {
    console.log(err);
  },
);
console.log("B");
