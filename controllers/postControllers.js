exports.getAllPosts = (req, res, next) => {
    res.send("Get all posts route");
};

exports.createNewPost = async(req, res, next) => {
    res.send("Create New Post Route");
};

exports.getPostById = async(req, res, next) => {
    res.send("Get Post By ID Route");
};