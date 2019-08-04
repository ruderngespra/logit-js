app.post('/delete/:id', function(req, res) {
    console.log('req: ', req);
    console.log('res: ', res);
    const { id } = req.params;
    console.log('id: ', id);
    dbUtils
        .deleteImageFromTags(id)
        .then(() => dbUtils.deleteImageFromComments(id))
        .then(hello => {
            console.log('hello: ', hello);
            return dbUtils.deleteImageFromImages(id);
        })
        .then(result => {
            console.log('result: ', result);
            console.log('Result of trying to delete all: ', result);
        })
        .catch(err => {
            console.log('err: ', err);
            console.log('Error in /delete route: ', err.message);
        });
    res.json({ message: 'Deletion of id ' + id + ' completed.' });
});
