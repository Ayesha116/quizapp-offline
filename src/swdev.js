export default function swDev(){
    let swDev = `${process.env.PUBLIC_URL}/quiz-serviceworker.js`
    navigator.serviceWorker.register(swDev).then((result)=>{
        console.log("result",result);
    })
}