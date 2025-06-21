import React from "react";

const commentsData = [
  {
    name: "Yousuf Sayyed",
    text: "This is a top-level comment.",
    replies: [],
  },
  {
    name: "Yousuf Sayyed",
    text: "This is another comment with a reply.",
    replies: [
      {
        name: "Yousuf Sayyed",
        text: "This is a nested reply.",
        replies: [
          {
            name: "Yousuf Sayyed",
            text: "This is a reply to the nested reply.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Yousuf Sayyed",
    text: "A comment with one reply.",
    replies: [
      {
        name: "Yousuf Sayyed",
        text: "Nested single reply.",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex bg-white p-4 rounded-lg shadow-sm my-3">
      <img
        className="h-10 w-10 rounded-full"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s"
      />
      <div className="px-4">
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {comment.replies.length > 0 && (
        <div className="ml-6 border-l-2 border-gray-300 pl-4">
          <CommentList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const Comments = () => {
  return (
    <div className="mx-8 my-6 p-4 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default Comments;
