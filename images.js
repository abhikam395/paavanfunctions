const IMAGES = [
    "https://media.gettyimages.com/photos/picture-of-hindu-gods-radha-krishna-picture-id538134156?k=6&m=538134156&s=612x612&w=0&h=gQKGzbSooxog36ELq9JT09e0ChGvM78gzsM6DEO5GaM=",
    "https://media.gettyimages.com/photos/krishna-picture-id157428034?k=6&m=157428034&s=612x612&w=0&h=ZZRSOhJamX8xCUhtCvWPvtcA57Kq8PAUylCN7Z3g2HQ=",
    "https://www.gettyimages.in/detail/photo/temple-new-delhi-cngltrv1109-royalty-free-image/491816068",
    "https://media.gettyimages.com/photos/india-picture-id181432687?k=6&m=181432687&s=612x612&w=0&h=OwbnCZLt_oCavDoeVkMucU-bVI0x-FyU_kpMX2sR4OQ=",
    "https://media.gettyimages.com/photos/painting-in-the-leicester-iskcon-temple-krishna-with-gopi-united-picture-id764778149?k=6&m=764778149&s=612x612&w=0&h=bwQbAhau5LCN8HmRq8Cajr4T9i6yd1GoHawtay_i8m8=",
    "https://images.unsplash.com/photo-1609609830354-8f615d61b9c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bG9yZCUyMGtyaXNobmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1625580916836-1badf2c15b32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxvcmQlMjBrcmlzaG5hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://media.gettyimages.com/photos/vishwaroopa-the-universal-form-revealed-by-krishna-in-the-bhagavad-picture-id538134170?k=6&m=538134170&s=612x612&w=0&h=VHHLVDXnoiLe08JaavSen4zFrBnIl7qt_65cBV0hx0I=",
    "https://media.gettyimages.com/photos/hindu-gods-krishna-and-radha-picture-id538145052?k=6&m=538145052&s=612x612&w=0&h=1FjnRpiW0_TesbWe1F5EJXmQAQemPg6Ael4pTZaCzQQ=",
    "https://media.gettyimages.com/photos/figures-of-krishna-and-his-followers-at-prem-mandir-picture-id1158305368?k=6&m=1158305368&s=612x612&w=0&h=Sls0KCa8XugOF3kgTbcq92_Hs6DZkyU5BovVARGIzSo=",
    "https://media.gettyimages.com/photos/krishna-and-rada-statues-in-bhaktivedanta-manor-iskcon-temple-picture-id169358921?k=6&m=169358921&s=612x612&w=0&h=4c1q3arRjiYF8hCo68ACTWEl58Ag79X9N6T4veNvdd0=",
]

function getImage(){
    return IMAGES[Math.floor(Math.random() * IMAGES.length)];
}

module.exports = {
    IMAGES, getImage
}