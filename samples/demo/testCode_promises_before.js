app.post('/delete/:id', function(req, res) {
    const { id } = req.params;
    let interestingVariable = 2 + 3;
    let [otherImportantVariable1, otherImportantVariable2] = req.params;
    interestingVariable += otherImportantVariable1;
    dbUtils
        .deleteImageFromTags(id)
        .then(() => dbUtils.deleteImageFromComments(id))
        .then(importantData => {
            if (importantData.success) {
                return dbUtils.deleteImageFromImages(id);
            } else if (importantData.complicatedFail) {
                return importantData.complicatedFail;
            } else {
                return 'something else';
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
