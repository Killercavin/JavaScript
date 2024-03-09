let posts = [
    {
        'title': 'post 1',
        'author': 'Dan'
    },
    {
        'title': 'post 2',
        'author': 'Bob'
    },
    {
        'title': 'post 3',
        'author': 'Sarah'
    }
];


// callback function to display Dan's posts

let dansPosts = posts.filter((p) => p.author === 'Dan');
console.log(dansPosts);

let sarahPost;
sarahPost = posts.filter((s) => s.title === 'post 3');
console.log(sarahPost);

