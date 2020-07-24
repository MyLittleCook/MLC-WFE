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

export const addPhoto = async (file) => {
    let photoKey = file.name;
  
    try {
        const data = await new AWS.S3.ManagedUpload({
            params: {
                Bucket: albumBucketName,
                Key: photoKey,
                Body: file,
                ACL: "public-read",
                ContentType: 'image/png'
            }
        }).promise();
        console.log(data);
    
        console.log("Successfully uploaded photo.");
        return data.Location;
    } catch (err) {
        return alert("이미지 업로드에 실패하셨습니다.");
    }
}