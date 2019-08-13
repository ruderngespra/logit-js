app.post('/delete/:id', function(req, res) {
    const { id } = req.params;
    dbUtils
        .deleteImageFromTags(id)
        .then(() => dbUtils.deleteImageFromComments(id))
        .then(hello => {
            return dbUtils.deleteImageFromImages(id);
        })
        .then(result => {})
        .catch(err => {});
    res.json({
        message: 'Deletion of id ' + id + ' completed.',
    });
});
