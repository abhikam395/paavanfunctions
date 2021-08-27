/**
 * God api
 */

/**
 * channel api
 */

 import { LAYOUT_TYPES, CONTENT_TYPES, CARD_TYPES } from "./constants";

 // api/v1/gods/1
 
 const response = {
    status: true,
    data: [ 
        {
            id: 1,
            title: null,
            subtitle: null,
            layout: LAYOUT_TYPES.HEADER,
            contents: [
                {id: 1, image_url: getImage(), title: 'हनुमान अनुयायी संख्या: 378224', card_type: CARD_TYPES.LARGE_RECTANGLE},
            ],
            extra: []
        },
        {
            id: 2,
            title: 'Recently Played',
            subtitle: null,
            layout: CARD_TYPES.LARGE_SQUARE,
            contents: [
                {id: 1,image_url: getImage(), card_type: CARD_TYPES.LARGE_RECTANGLE, content_type: CONTENT_TYPES.VIDEO},
            ],
            extra: []
        },
        {
            id: 3,
            title: 'हनुमान भजन प्लेलिस्ट',
            subtitle: null,
            layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT,
            contents: [
                {id: 1, title: '', image_url: getImage(), card_type: CARD_TYPES.VERTICAL_RECTANGLE, content_type: CONTENT_TYPES.VIDEO},
                {id: 2, title: '', image_url: getImage(), card_type: CARD_TYPES.VERTICAL_RECTANGLE, content_type: CONTENT_TYPES.VIDEO},
                {id: 3, title: '', image_url: getImage(), card_type: CARD_TYPES.VERTICAL_RECTANGLE, content_type: CONTENT_TYPES.VIDEO},
            ],
            extra: [
                // {id: 1, title: 'और देखें', link: null},
            ]
        },
        {
            id: 4,
            title: 'आरती और चालीसा',
            subtitle: null,
            layout: LAYOUT_TYPES.TWO_COLUMN_LAYOUT,
            contents: [
                {id: 1, image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 2, image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 3, image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 4, image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 5, image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 6, image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 7, image_url: getImage(), card_type: CARD_TYPES.MEDIUM_RECTANGLE, content_type: CONTENT_TYPES.GOD},
            ],
            extra: [
                // {id: 1, title: 'और देखें', link: null},
            ]
        },
        {
            id: 5,
            title: 'आरती और चालीसा',
            subtitle: null,
            layout: LAYOUT_TYPES.TWO_COLUMN_LAYOUT,
            contents: [
                {id: 1, image_url: getImage(), card_type: CARD_TYPES.SMALL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 2, image_url: getImage(), card_type: CARD_TYPES.SMALL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 3, image_url: getImage(), card_type: CARD_TYPES.SMALL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 4, image_url: getImage(), card_type: CARD_TYPES.SMALL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 5, image_url: getImage(), card_type: CARD_TYPES.SMALL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 6, image_url: getImage(), card_type: CARD_TYPES.SMALL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
                {id: 7, image_url: getImage(), card_type: CARD_TYPES.SMALL_RECTANGLE, content_type: CONTENT_TYPES.GOD},
            ],
            extra: [
                // {id: 1, title: 'और देखें', link: null},
            ]
        },
        {
            id: 6,
            title: 'मंत्र, पाठ और जाप',
            subtitle: null,
            layout: LAYOUT_TYPES.THREE_COLUMN_LAYOUT,
            contents: [
                {id: 1, title: 'धन प्राप्ति के लिए', image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                {id: 2, title: 'क्रोध मुक्त जीवन के लिए', image_url: getImage(),  card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                {id: 3, title: 'स्वस्थ जीवन के लिए', image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                {id: 4, title: 'धन प्राप्ति के लिए', image_url: getImage(),  card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                {id: 5, title: 'क्रोध मुक्त जीवन के लिए', image_url: getImage(), card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
                {id: 6, title: 'स्वस्थ जीवन के लिए', image_url: getImage(),  card_type: CARD_TYPES.SMALL_SQUARE, content_type: CONTENT_TYPES.VIDEO},
            ],
            extra: [
                {id: 1, title: 'और देखें', link: null},
            ]
        },
    ]
}