const express = require('express');
const postControllers = require('../controllers/postControllers');
const router = express.Router();


//@route GET && POST - /psots/
router
    .route("/")
    .get(postControllers.getAllPosts)
    .post(postMessage.createNewPost);

router.route("/:id").get(postControllers.getPostById);

module.exports = router;