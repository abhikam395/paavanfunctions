const { getImage } = require("./images");

const videos = [
    {
        id: 1,
        title: 'राधे राधे बरसाने वाली राधे || ORIGINAL RADHE RADHE BARSANE WALI RADHE || 84 KOS YATRA|| VIPUL MUSIC',
        channel_name: 'VIPUL MUSIC COMPANY',
        video_id: '4rURry0UFB8',
        placeholder_url: getImage(),
        channel_icon: getImage(),
        views: '216,084,008',
    },
    {
        id: 2,
        title: 'Hanuman Gatha - Kumar Vishu',
        channel_name: ' Arun Chauhan',
        video_id: 'CRJvIygabGA',
        placeholder_url: getImage(),
        channel_icon: getImage(),
        views: '6,856,225',
    },
    {
        id: 3,
        title: 'Radhe Radhe Barsane wali radhe | 84 kos yatra | radhe Radhe | morning bajan | Radha best bajan liven',
        channel_name: 'DHANJI DUBEY',
        video_id: 'vNDsqW5Pt3s',
        placeholder_url: getImage(),
        channel_icon: getImage(),
        views: '1,314,663',
    },
    {
        id: 4,
        title: 'RADHE RADHE BARSANE WALI RADHE//84 KOS YATRA',
        channel_name: 'BHAKTI SAGAR',
        video_id: 'Z2ZOMdYIcFs',
        placeholder_url: getImage(),
        channel_icon: getImage(),
        views: '516,561',
    },
    {
        id: 5,
        title: 'बताओ कहा मिलेगा श्याम || इस भाजन को सुन के रोना आ जायेगा #devbhaktisong #krishna BHAJAN',
        channel_name: 'DEV BHAKTI SONG',
        video_id: 'kuDH6AuAM0E',
        placeholder_url: getImage(),
        channel_icon: getImage(),
        views: '20,889,035',
    },
    {
        id: 6,
        title: 'Radha Rani Vrindavan Dham | Bhakti Bhajan of Radha Rani | 2021 bhakti songs',
        channel_name: 'Bhajan Wallah',
        video_id: 'FRRGSJeBvBY',
        placeholder_url: getImage(),
        channel_icon: getImage(),
        views: '8,849,627',
    },
    {
        id: 7,
        title: 'Kitna Sundar Roop Hai | Bhakti Song | Vedon Ki Aur 2021',
        channel_name: 'Vedon Ki Aur',
        video_id: 'Twf5KWtKJ10',
        placeholder_url: getImage(),
        channel_icon: getImage(),
        views: '4,493,045',
    },
    {
        id: 8,
        title: 'Barsane wali radhe full song || rade rade rade barsane wali radhe full song',
        channel_name: 'TechJar',
        video_id: 'dweDvx_ezss',
        placeholder_url: getImage(),
        channel_icon: getImage(),
        views: '1,151,855',
    }
]

exports.videos = function(id = 1){
    let video = videos.filter(video => {
        return video.id == id
    })[0];
    const videoList = videos.filter(video => {
        return video.id != id
    })
    return videoList;
}