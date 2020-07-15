var albumBucketName = "mlc-images";
var bucketRegion = "ap-northeast-2";
var IdentityPoolId = "ap-northeast-2:9b272053-a85d-41af-8203-0234d993f6ae";

AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
    })
});

var s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    params: { Bucket: albumBucketName }
});

export const createAlbum = (albumName) => {
    let date = new Date();
    albumName = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}_${albumName.trim().replace(/ /g, "_")}`;
    if (!albumName) {
        return alert("Album names must contain at least one non-space character.");
    }
    if (albumName.indexOf("/") !== -1) {
        return alert("Album names cannot contain slashes.");
    }
    var albumKey = encodeURIComponent(albumName);
    s3.headObject({ Key: albumKey }, (err, data) => {
        if (!err) {
            return alert("Album already exists.");
        }
        if (err.code !== "NotFound") {
            return alert("There was an error creating your album: " + err.message);
        }
        s3.putObject({ Key: albumKey }, (err, data) => {
            if (err) {
                return alert("There was an error creating your album: " + err.message);
            }
            console.log("Successfully created album.");
        });
    });
    return albumName;
}

export const addPhoto = async (albumName, file) => {
    if (!file) {
        return alert('Please choose a file to upload first.');
    }
    let fileName = file.name;
    let albumPhotosKey = encodeURIComponent(albumName) + "/";
  
    let photoKey = albumPhotosKey + fileName;
  
    let upload = new AWS.S3.ManagedUpload({
        params: {
            Bucket: albumBucketName,
            Key: photoKey,
            Body: file,
            ACL: "public-read"
        }
    });

    let promise = upload.promise();

    var dataLocation = '';

    await promise.then(
        (data) => {
            console.log("Successfully uploaded photo.");
            dataLocation = data.Location;
        },
        (err) => {
            return alert("There was an error uploading your photo: ", err.message);
        }
    );

    return dataLocation;
}