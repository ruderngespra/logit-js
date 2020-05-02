app.post('/delete/:id', function(req, res) {
    const { id } = req.params;
    dbUtils
        .deleteImageFromTags(id)
        .then(() => dbUtils.deleteImageFromComments(id))
        .then(importantData => {
            if (importantData.success) {
                return dbUtils.deleteImageFromImages(id);
            } else if (importantData.complicatedFail) {
                return 'A special complicated fail happened';
            } else {
                return 'something else happened';
            }
        })
        .then(didItWork => (didItWork ? didItWork : false))
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    res.json({
        message: 'Deletion of id ' + id + ' completed.',
    });
});
