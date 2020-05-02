app.post('/delete/:id', function(req, res) {
    console.log('2:4', 'res :', res);
    console.log('typeof res :', typeof res);
    console.log('4:4', 'req :', req);
    console.log('typeof req :', typeof req);
    const { id } = req.params;
    console.log('7:4', 'id :', id);
    console.log('typeof id :', typeof id);
    let interestingVariable = 2 + 3;
    console.log('10:4', 'interestingVariable :', interestingVariable);
    console.log('typeof interestingVariable :', typeof interestingVariable);
    let [otherImportantVariable1, otherImportantVariable2] = req.params;
    console.log('13:4', 'otherImportantVariable2 :', otherImportantVariable2);
    console.log('typeof otherImportantVariable2 :', typeof otherImportantVariable2);
    console.log('15:4', 'otherImportantVariable1 :', otherImportantVariable1);
    console.log('typeof otherImportantVariable1 :', typeof otherImportantVariable1);
    interestingVariable += otherImportantVariable1;
    console.log('18:4', 'interestingVariable :', interestingVariable);
    console.log('typeof interestingVariable :', typeof interestingVariable);
    dbUtils
        .deleteImageFromTags(id)
        .then(() => dbUtils.deleteImageFromComments(id))
        .then(importantData => {
            console.log('24:12', 'importantData :', importantData);
            console.log('typeof importantData :', typeof importantData);
            if (importantData.success) {
                console.log('27:16', 'In IfStatement (importantData.success)');
                return dbUtils.deleteImageFromImages(id);
            } else if (importantData.complicatedFail) {
                console.log('30:16', 'In IfStatement (importantData.complicatedFail)');
                return importantData.complicatedFail;
            } else {
                console.log('33:16', 'In ElseStatement.');
                return 'something else';
            }
        })
        .then(didItWork => {
            console.log('38:12', 'didItWork :', didItWork);
            console.log('typeof didItWork :', typeof didItWork);
            return didItWork ? didItWork : false;
        })
        .then(result => {
            console.log('43:12', 'result :', result);
            console.log('typeof result :', typeof result);
            res.json(result);
        })
        .catch(err => {
            console.log('48:12', 'err :', err);
            console.log('typeof err :', typeof err);
            res.json(err);
        });
    res.json({
        message: 'Deletion of id ' + id + ' completed.',
    });
});
