const { CONTENT_TYPES, CARD_TYPES, LAYOUT_TYPES } = require("./constants");
const { getImage } =  require("./images");


exports.searchSuggestions = (req, res) => {
    const response = {
        status: true,
        data: [
            {
                id: 1,
                layout: LAYOUT_TYPES.TWO_COLUMN_LAYOUT,
                title: null,
                subtitle: null,
                contents: [
                    {id: 1, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.MEDIUM_RECTANGLE},
                    {id: 2, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.MEDIUM_RECTANGLE},
                    {id: 3, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.MEDIUM_RECTANGLE},
                    {id: 4, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.MEDIUM_RECTANGLE},
                    {id: 5, title: null, image_url: getImage(), content_type: CONTENT_TYPES.CHANNEL, card_type: CARD_TYPES.MEDIUM_RECTANGLE},
                ]
            }
        ]
    }

    res.status(200).json(response);
};