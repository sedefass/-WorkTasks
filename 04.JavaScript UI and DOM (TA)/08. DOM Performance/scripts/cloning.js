function createPost(postInfo) {
    var article = document.createElement('article'),
        header = document.createElement('header'),
        heading = document.createElement('h2'),
        content = document.createElement('p'),
        postFooter = document.createElement('footer');
    
    article.appendChild(header);
    header.appendChild(heading);
    heading.innerText = postInfo.user;

    article.appendChild(content);
    content.innerText = postInfo.content;
    
    article.appendChild(postFooter);
    postFooter.innerText = new Date().toString();

    return article;
}

var postTemplate = createPost({
    user: '',
    content: ''
});

function createPostCloning(postInfo) {
    var article = postTemplate.cloneNode(true);

    var heading =  article.querySelector('h2');
    heading.innerText = postInfo.user;

    var content = article.querySelector('p');
    content.innerText = postInfo.content;

    var footer = article.querySelector('footer');
    footer.innerText = new Date().toString();

    return article;
}

var post1 = createPost({
    user: 'Stamat',
    content: 'Hello, I am new to the forum!'
});

var post2 = createPost({
    user: 'Ivan',
    content: 'Hello, Stamat!'
});

document.body.appendChild(post1);
document.body.appendChild(post2);

var post3 = createPostCloning({
    user: 'Stamat',
    content: 'Hello, I am new to the forum!'
});

var post4 = createPostCloning({
    user: 'Ivan',
    content: 'Hello, Stamat!'
});

document.body.appendChild(post3);
document.body.appendChild(post4);

//-----------------------------------------------

var repeatCount = 100000,
    postInfo = {
        user: 'Tosho',
        content: 'Lets go skiing'
    };

var executionTimeCloning = measure(function(){
    for (var i = 0; i < repeatCount; i++){
        createPostCloning(postInfo);
    }
});

var executionTimeWithoutCloning = measure(function(){
    for (var i = 0; i < repeatCount; i++){
        createPost(postInfo);
    }
});

console.log('cloning: ' + executionTimeCloning);
console.log('without cloning: ' + executionTimeWithoutCloning);

