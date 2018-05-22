export const promiseMessageAPI = {};

promiseMessageAPI.getServerMessage = () => {
    const messagePromise = new Promise(promiseMessageAPI.fetch);
    return messagePromise;
};

promiseMessageAPI.fetch = (resolve, reject) => {
    setTimeout(() => {
        try{
            let c =b/d;
            resolve("Your request was processed and output of your request is " + c);
        }catch(e){
            reject(e.toString());
        }
    }, 3000);
}