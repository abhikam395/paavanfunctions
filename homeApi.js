/**
 * home api
 */

import { CARD_TYPES, CONTENT_TYPES, LAYOUT_TYPES } from "./constants"
import { getImage } from "./images"

//api/v1/suggestions
const response = {
    status: true,
    data: [
        {id: 1, title: 'हनुमान', content_type: CONTENT_TYPES.GOD},
        {id: 2, title: 'कृष्ण भजन', content_type: CONTENT_TYPES.CHANNEL},
        {id: 3, title: 'महाभारत', content_type: CONTENT_TYPES.CHANNEL},
        {id: 4, title: 'हनुमान', content_type: CONTENT_TYPES.GOD},
        {id: 5, title: 'कृष्ण भजन', content_type: CONTENT_TYPES.GOD},
        {id: 6, title: 'महाभारत', content_type: CONTENT_TYPES.GOD},

    ]
}

// api/v1/all
const response = {
    status: true,
    data: [ 
        {
            id: 1,
            title: null,
            subtitle: null,
            layout: LAYOUT_TYPES.SLIDER,
            contents: [
                {id: 1, image_url: getImage(), card_type: CARD_TYPES.LARGE_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 2, image_url: getImage(), card_type: CARD_TYPES.LARGE_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 3, image_url: getImage(), card_type: CARD_TYPES.LARGE_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 4, image_url: getImage(), card_type: CARD_TYPES.LARGE_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 5, image_url: getImage(), card_type: CARD_TYPES.LARGE_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 6, image_url: getImage(), card_type: CARD_TYPES.LARGE_RECTANGLE, content_type: CONTENT_TYPES.GOD},
            ],
            extra: []
        },
        {
            id: 2,
            title: 'Recently Played',
            subtitle: null,
            layout: LAYOUT_TYPES.HORIZONTAL_SCROLL,
            contents: [
                {id: 1, title: 'श्याम तेरे दीवाने', image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                {id: 2, title: 'रामायण Ep. 20', image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                {id: 3, title: 'महामृत्युनजय मंत्र', image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                {id: 4, title: 'महामृत्युनजय Ep', image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
            ],
            extra: [
                {id: 1, title: 'और देखें', link: null},
            ]
        },
        {
            id: 3,
            title: 'चयनित श्रृंखला',
            subtitle: null,
            layout: LAYOUT_TYPES.HORIZONTAL_SCROLL,
            contents: [
                {id: 1, title: 'रामायण - 103 एपिसोड ', image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 2, title: 'महाभारत - 143 एपिसोड', image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 3, title: 'महाभारत - 143 एपिसोड', image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.GOD},
            ],
            extra: [
                {id: 1, title: 'और देखें', link: null},
            ]
        },
        {
            id: 4,
            title: 'आपके प्रिय देवी-देवता',
            subtitle: null,
            layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT,
            contents: [
                {id: 1, title: 'हनुमान', image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                {id: 2, title: 'हनुमान', image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                {id: 3, title: 'हनुमान', image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                {id: 4, title: 'हनुमान', image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                {id: 5, title: 'हनुमान', image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                {id: 6, title: 'हनुमान', image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                {id: 7, title: 'हनुमान', image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
            ],
            extra: [
                {id: 1, title: 'और देखें', link: null},
            ]
        },
        {
            id: 5,
            title: null,
            subtitle: null,
            layout: LAYOUT_TYPES.SLIDER,
            contents: [
                {id: 1, image_url: getImage(), card_type: CARD_TYPES.HORIZONTAL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 1, image_url: getImage(), card_type: CARD_TYPES.HORIZONTAL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
            ],
            extra: []
        },
        {
            id: 6,
            title: 'Popular Categories',
            subtitle: null,
            layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT,
            contents: [
                {id: 1, title: null, image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.GOD},
                {id: 2, title: null, image_url: getImage(),  card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.GOD},
                {id: 3, title: null, image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.GOD},
                {id: 4, title: null, image_url: getImage(),  card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.GOD},
                {id: 5, title: null, image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.GOD},
                {id: 6, title: null, image_url: getImage(),  card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.GOD},
            ],
            extra: [
                {id: 1, title: 'और देखें', link: null},
            ]
        },
        {
            id: 7,
            title: 'Trending भजन Playlists',
            subtitle: null,
            layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT,
            contents: [
                {id: 1, title: "शांतिपूर्ण सुबह", image_url: getImage(), card_type: CARD_TYPES.VERTICAL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 2, title: "शाम की धुन", image_url: getImage(), card_type: CARD_TYPES.VERTICAL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 3, title: "शांतिपूर्ण सुबह", image_url: getImage(), card_type: CARD_TYPES.VERTICAL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 4, title: "शाम की धुन", image_url: getImage(), card_type: CARD_TYPES.VERTICAL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 5, title: "गणेश भजन", image_url: getImage(), card_type: CARD_TYPES.VERTICAL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 6, title: "शाम की धुन", image_url: getImage(), card_type: CARD_TYPES.VERTICAL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 7, title: "गणेश भजन", image_url: getImage(), card_type: CARD_TYPES.VERTICAL_RECTANGLE, content_type: CONTENT_TYPES.GOD},            ],
            extra: [
                {id: 1, title: 'और देखें', link: null},
            ]
        },
        {
            id: 8,
            title: 'आज के लिए ख़ास',
            subtitle: null,
            layout: LAYOUT_TYPES.HORIZONTAL_SCROLL,
            contents: [
                {id: 1, title: "हनुमान", image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                {id: 2, title: "हनुमान भजन Playlist", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                {id: 3, title: "हनुमान मंत्र", image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                {id: 4, title: "हनुमान भजन Playlist", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
            ],
            extra: [
                {id: 1, title: 'और देखें', link: null},
            ]
        },
        {
            id: 9,
            title: 'सबका पसंदीदा',
            subtitle: null,
            layout: 'SLIDER',
            contents: [
                {id: 1, image_url: getImage(), card_type: CARD_TYPES.LARGE_SQUARE, content_type: CONTENT_TYPES.GOD},
                {id: 2, image_url: getImage(), card_type: CARD_TYPES.LARGE_SQUARE, content_type: CONTENT_TYPES.VIDEO},
            ],
            extra: []
        },
        {
            id: 10,
            title: 'प्रभावशाली प्रवचन',
            subtitle: null,
            layout: LAYOUT_TYPES.HORIZONTAL_SCROLL,
            contents: [
                {id: 1, title: "ब्रह्मा कुमारी", image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                {id: 2, title: "Sadhguru", image_url: getImage(), card_type: CARD_TYPES.CIRCLE, content_type: CONTENT_TYPES.GOD},
                {id: 3, title: "खुश कैसे रहे", image_url: getImage(), card_type: CARD_TYPES.MEDIUM_SQUARE, content_type: CONTENT_TYPES.GOD},
                {id: 4, title: "Sadhguru", image_url: getImage(), card_type: CARD_TYPES.MEDIUM_SQUARE, content_type: CONTENT_TYPES.GOD},

            ],
            extra: [
                {id: 1, title: 'और देखें', link: null},
            ]
        },
        {
            id: 11,
            title: 'नई रिलीज',
            subtitle: null,
            layout: LAYOUT_TYPES.HORIZONTAL_SCROLL,
            contents: [
                {id: 1, title: "गणेश वंदना", image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.VIDEO},
                {id: 2, title: "खुश कैसे रहे", image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 3, title: "गणेश वंदना", image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.VIDEO},
                {id: 4, title: "खुश कैसे रहे", image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.GOD},
            ],
            extra: [
                {id: 1, title: 'और देखें', link: null},
            ]
        },
        {
            id: 12,
            title: 'सुझाव एवं अनोखे उपाय',
            subtitle: null,
            layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT,
            contents: [
                {id: 1, title: "धन प्राप्ति के लिए", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                {id: 2, title: "क्रोध मुक्त जीवन के लिए", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                {id: 3, title: "स्वस्थ जीवन के लिए", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                {id: 4, title: "Sadhguru", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},

            ],
            extra: [
                {id: 1, title: 'और देखें', link: null},
            ]
        },
        {
            id: 13,
            title: 'आपके मूड अनुसार',
            subtitle: null,
            layout: LAYOUT_TYPES.HORIZONTAL_SCROLL,
            contents: [
                {id: 1, title: "गणेश वंदना", image_url: getImage(), card_type: CARD_TYPES.MEDIUM_SQUARE, content_type: CONTENT_TYPES.GOD},
                {id: 2, title: "खुश कैसे रहे", image_url: getImage(), card_type: CARD_TYPES.MEDIUM_SQUARE, content_type: CONTENT_TYPES.GOD},
                {id: 3, title: "गणेश वंदना", image_url: getImage(), card_type: CARD_TYPES.MEDIUM_SQUARE, content_type: CONTENT_TYPES.GOD},
                {id: 4, title: "खुश कैसे रहे", image_url: getImage(), card_type: CARD_TYPES.MEDIUM_SQUARE, content_type: CONTENT_TYPES.GOD},
            ],
            extra: [
                {id: 1, title: 'और देखें', link: null},
            ]
        },
        {
            id: 13,
            title: 'शीर्ष संग्रह',
            subtitle: null,
            layout: LAYOUT_TYPES.HORIZONTAL_SCROLL,
            contents: [
                {id: 1, title: "धन प्राप्ति के लिए", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                {id: 2, title: "क्रोध मुक्त जीवन के लिए", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                {id: 3, title: "गणेश वंदना", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                {id: 4, title: "खुश कैसे रहे", image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
            ],
            extra: [
                {id: 1, title: 'और देखें', link: null},
            ]
        },
    ]
}