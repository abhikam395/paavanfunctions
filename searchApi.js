/**
 * search api
 */

import { CONTENT_TYPES, LAYOUT_TYPES } from "./constants"
import { getImage } from "./images"

//previous search api

// /api/v1/suggestions
const response = {
    status: true,
    data: [
        {id: 1, title: '', content_type: CONTENT_TYPES.CHANNEL},
        {id: 1, title: '', content_type: CONTENT_TYPES.CHANNEL},
        {id: 1, title: '', content_type: CONTENT_TYPES.CHANNEL},
        {id: 1, title: '', content_type: CONTENT_TYPES.CHANNEL},
        {id: 1, title: '', content_type: CONTENT_TYPES.CHANNEL}
    ]
}

// /api/v1/search/suggestions
const response = {
    status: true,
    data: [
        {id: 1, title: '', subtitle: '', image_url: '', content_type: CONTENT_TYPES.PLAYER},
        {id: 1, title: '', subtitle: '', image_url: '', content_type: CONTENT_TYPES.PLAYER},
        {id: 1, title: '', subtitle: '', image_url: '', content_type: CONTENT_TYPES.GOD},
        {id: 1, title: '', subtitle: '', image_url: '', content_type: CONTENT_TYPES.PLAYER},
    ]
}

// /api/v1/search?name="asdfasfsf"
const response = {
    status: true,
    data: [
        {
            id: 1,
            title: 'हनुमान भजन और प्लेलिस्ट',
            subtitle: '',
            layout: LAYOUT_TYPES.HORIZONTAL_SCROLL,
            contents: [
                {id: 1, title: 'धन प्राप्ति के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO},
                {id: 2, title: 'क्रोध मुक्त जीवन के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO},
                {id: 3, title: 'स्वस्थ जीवन के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO},
                {id: 4, title: 'धन प्राप्ति के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO},
                {id: 5, title: 'क्रोध मुक्त जीवन के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO},
                {id: 6, title: 'स्वस्थ जीवन के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO},
            ]
        },
        {
            id: 1,
            title: 'Trending भजन Playlists',
            subtitle: '',
            layout: LAYOUT_TYPES.HORIZONTAL_SCROLL,
            contents: [
                {id: 1, title: 'धन प्राप्ति के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO},
                {id: 2, title: 'क्रोध मुक्त जीवन के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO},
                {id: 3, title: 'स्वस्थ जीवन के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO},
                {id: 4, title: 'धन प्राप्ति के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO},
                {id: 5, title: 'क्रोध मुक्त जीवन के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO},
                {id: 6, title: 'स्वस्थ जीवन के लिए', image_url: getImage(), content_type: CONTENT_TYPES.VIDEO},
            ]
        }
    ]
}