const posts = [
    {title: 'Post One',
     body: 'This is Post One', 
     
    },
    {title: 'Post Two', 
     body: 'This is Post Two', 
     
    }
];

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title} <li/>`;

        });
        document.body.innerHTML=output;
    },1000);
}
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            } else{
                reject('error: something wrong');
            }
        },2000);
    })
}
const user={
    username:'yash',
    lastactivitytime:'13th of jan'
}
function updatelastactivitytime({
    return new Promise((resolve,reject)={
        setTimeout(()=>{
            user.lastactivitytime=new Date().getTime();
            resolve(user.lastactivitytime);
        },1000)
    })
})
Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])
.then(([createPostresolves,updatelastactivitytimeresolves])=>{
    console.log(updatelastactivitytimeresolves);
})
.catch{err=>console.log(err)}
