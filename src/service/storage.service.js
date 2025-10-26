var ImageKit = require("imagekit");
var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_ENDPOINT_URL
});

function uploadFile(file){
    return new Promise ((resolve,reject)=>{
        const ext = file.originalname.split('.').pop();
                const randomName = `${Date.now()}-${Math.floor(Math.random()*1e6)}${ext ? '.' + ext : ''}`;

        imagekit.upload({
            file:file.buffer,
            fileName:randomName
        },(error,result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result);
            }
        })
    });
}

module.exports = uploadFile;