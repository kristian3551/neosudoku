const { Article } = require('../models');

module.exports = {
    get: (req, res, next) => {
        Article.find()
            .then((articles) => res.send(articles.map(e => {
                let length = 0;
                let cardContent = [];
                for(const e1 in [...e.content]) {
                    const element = e.content[e1];
                    if(element.content.length + length <= 500) {
                        cardContent.push(element);
                        length += element.content.length;
                    }
                    else {
                        cardContent.push({ type: element.type, content: element.content.slice(0, 500 - length)});
                        break;
                    }
                }
                return {
                        title: e.title,
                        imageURL: e.imageURL,
                        content: cardContent,
                        _id: e._id
                        };
            })))
            .catch(next);
    },
    getOne: (req, res, next) => {
        const id = req.params.id;
        Article.findOne({ _id: id})
            .then((article) => res.send(article))
            .catch(next);
    },
    post: {
        create: (req, res, next) => {
            const { title, imageURL, content } = req.body;
            Article.create({ title, imageURL, content })
                .then((article) => res.send(article))
                .catch(next);
        }
    },
    put: (req, res, next) => {
        const id = req.params.id;
        const { title, imageURL, content } = req.body;
        Article.updateOne({ _id: id }, { title, imageURL, content})
            .then((updatedArticle) => res.send(updatedArticle))
            .catch(next);
    },
    delete: (req, res, next) => {
        const id = req.params.id;
        Article.deleteOne({ _id: id })
            .then((removedArticle) => res.send(removedArticle))
            .catch(next);
    }
}