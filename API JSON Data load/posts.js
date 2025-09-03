const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    //promise of response
    .then((res) => res.json())
    //promise of json data
    .then((data) => {
        // console.log(data);
        displayPosts(data)
    });
};


// {
//     "userId": 4,
//     "id": 32,
//     "title": "doloremque illum aliquid sunt",
//     "body": "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
// }



const displayPosts = (posts) => {
    // 1. get the container and empty the container
    const postContainer = document.getElementById('post-container');
    postContainer.innerText = '';
    posts.forEach((post) =>{
        // 2. create element
        const postCard = document.createElement('div');

        postCard.innerHTML = `<div class = "post-card">
        <h2>${post.title}</h2>
        <p>
        ${post.body}
        </p>
        </div>`


        // 3. add to the container
        postContainer.append(postCard)
    })
}