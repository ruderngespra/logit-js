app.post('/delete/:id', function(req, res) {
    console.log('2:4', 'res :', res);
    console.log('3:4', 'req :', req);
    const { id } = req.params;
    console.log('5:4', 'id :', id);
    let interestingVariable = 2 + 3;
    console.log('7:4', 'interestingVariable :', interestingVariable);
    let [otherImportantVariable1, otherImportantVariable2] = req.params;
    console.log('9:4', 'otherImportantVariable2 :', otherImportantVariable2);
    console.log('10:4', 'otherImportantVariable1 :', otherImportantVariable1);
    interestingVariable += otherImportantVariable1;
    console.log('12:4', 'interestingVariable :', interestingVariable);
    dbUtils
        .deleteImageFromTags(id)
        .then(() => dbUtils.deleteImageFromComments(id))
        .then(importantData => {
            console.log('17:12', 'importantData :', importantData);
            if (importantData.success) {
                return dbUtils.deleteImageFromImages(id);
            } else if (importantData.complicatedFail) {
                return importantData.complicatedFail;
            } else {
                return 'something else';
            }
        })
        .then(didItWork => {
            console.log('27:12', 'didItWork :', didItWork);
            return didItWork ? didItWork : false;
        })
        .then(result => {
            console.log('31:12', 'result :', result);
            res.json(result);
        })
        .catch(err => {
            console.log('35:12', 'err :', err);
            res.json(err);
        });
    res.json({
        message: 'Deletion of id ' + id + ' completed.',
    });
});
