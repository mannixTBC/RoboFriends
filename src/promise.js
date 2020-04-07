const promise = new Promise((resolve,reject) => {
    if (true){
        resolve('stuffed worked');
    }else{
        reject('we have an error')
    }
    
})


promise.then(result => console.log(result));

const promise4 = new Promise((resolve,reject) => {
    setTimeout(resolve, 100, 'hiii')
})

const promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve, 5000, 'hiii')
})

Promise.all([promise3])
    .then(values => {
        console.log(values)
    })






const promise = new Promise((resolve,reject) => {
    if(true){
        resolve('promisiune realizata')
    }else{
        reject('promisiune neindeplinita')
    }
})    


promise .then(result => result + '!').then(result2 => {
    throw Error
    console.log('result2')
})

.catch(console)

// --------------------------------------------------------------------------ASYNC / AWAIT
const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',

  ]

const getData = async function(){
    const [users,posts,albums] = await Promise.all(urls.map(url => {
        fetch(url).then(response => response.json())
        
    }))
    console.log('users',users)
    console.log('posts',posts)
    console.log('albums',albums)
}