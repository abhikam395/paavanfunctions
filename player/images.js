const IMAGES = [
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-925159288-612x612.jpg?alt=media&token=5e457ecd-dbbf-4595-8793-650bced2c128",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fphoto-1567878673942-be055fed5d30.webp?alt=media&token=94898348-bb83-4bcc-91d2-9ba740b1553c",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-92284896-612x612.jpg?alt=media&token=a5309401-dcb5-4214-81d4-e3400cff08bf",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-693339470-612x612.jpg?alt=media&token=06148179-176d-4a4d-a9f9-0ed261c89fde",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-686952880-612x612.jpg?alt=media&token=2d2db849-2f0f-42fe-a171-d2c8854851d0",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-679252860-612x612.jpg?alt=media&token=aa4c3c11-46ef-4a7c-87a8-a6b319a1ec5a",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-683980338-612x612.jpg?alt=media&token=cb2d492e-aea5-4ea5-a49f-fb838b47a67d",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-685684890-612x612.jpg?alt=media&token=2cd5b72f-caa9-4637-b456-3caeddc05e74",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-609722472-612x612.jpg?alt=media&token=e00890bb-3b91-4c7f-9662-c7ae5e48b9f8",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-674420568-612x612.jpg?alt=media&token=ec2ffbbe-e2ba-4c32-a538-ecb62cfb6b45",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-678595884-612x612.jpg?alt=media&token=0f70308e-aa24-4b88-a5dd-549f41b5333e",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-679252860-612x612.jpg?alt=media&token=aa4c3c11-46ef-4a7c-87a8-a6b319a1ec5a",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-683980338-612x612.jpg?alt=media&token=cb2d492e-aea5-4ea5-a49f-fb838b47a67d",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-685684890-612x612.jpg?alt=media&token=2cd5b72f-caa9-4637-b456-3caeddc05e74",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-175454330-612x612.jpg?alt=media&token=17572957-c325-456f-a3d4-7749ec05fabc",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-516282892-612x612.jpg?alt=media&token=cd466f9e-525f-44d5-91c9-13e37d17cd7d",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-156300193-612x612.jpg?alt=media&token=3b7d2a15-c81e-4e42-a922-ff9677417f2e",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-1208642725-612x612.jpg?alt=media&token=616552bf-3fcf-4354-a5d2-9f951844df69",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-1262196241-612x612.jpg?alt=media&token=39c800fc-ea0b-4995-9f55-e650c76f48bc",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-1271305848-612x612.jpg?alt=media&token=c84d5545-41a3-4cff-8ed7-b5c7bc470b57",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-152975351-612x612.jpg?alt=media&token=e7929a93-538d-4ac1-af40-ca56049d4914",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-155437235-612x612.jpg?alt=media&token=4ebf918a-3727-452a-acf6-ab0c42c2ba19",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-1023346706-612x612.jpg?alt=media&token=af0eae82-febc-4e33-8bfb-dfcd09e4acaf",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-1086164374-612x612.jpg?alt=media&token=aebe2572-a780-4d38-bd9d-3c47ba9b9257",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-1165838588-612x612.jpg?alt=media&token=b0abcd73-7851-4840-aeb5-8cac237d41bc",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-1169282592-612x612.jpg?alt=media&token=907f302f-23b0-4001-84fa-c35e949b6e02",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-1170069867-612x612.jpg?alt=media&token=4b22e042-2b55-4c93-988e-cc032f46d348",
   "https://firebasestorage.googleapis.com/v0/b/test-47076.appspot.com/o/god-images%2Fistockphoto-1171920010-612x612.jpg?alt=media&token=f26090f5-b323-4f89-9575-bb3caff3c0fb"
]

function getImage(){
    return IMAGES[Math.floor(Math.random() * IMAGES.length)];
}

module.exports = {
    getImage
}