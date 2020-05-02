app.post('/delete/:id', function(req, res) {
    const { id } = req.params;
    dbUtils
        .deleteImageFromTags(id)
        .then(() => dbUtils.deleteImageFromComments(id))
        .then(hello => dbUtils.deleteImageFromImages(id))
        .then(result => {
            console.log('Result of trying to delete all: ', result);
        })
        .catch(err => {
            console.log('Error in /delete route: ', err.message);
        });
    res.json({
        message: 'Deletion of id ' + id + ' completed.',
    });
});
