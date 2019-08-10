app.post('/delete/:id', function(req, res) {
    console.log('2:2 ', 'res: ', res);
    console.log('3:2 ', 'req: ', req);
    const { id } = req.params;
    console.log('7:2 ', 'id: ', id);
    dbUtils
        .deleteImageFromTags(id)
        .then(() => dbUtils.deleteImageFromComments(id))
        .then(hello => {
            console.log('9:4 ', 'hello: ', hello);
            return dbUtils.deleteImageFromImages(id);
        })
        .then(result => {
            console.log('12:4 ', 'result: ', result);
            console.log('13:4 ', 'Result of trying to delete all: ', result);
        })
        .catch(err => {
            console.log('15:4 ', 'err: ', err);
            console.log('16:4 ', 'Error in /delete route: ', err.message);
        });
    res.json({
        message: 'Deletion of id ' + id + ' completed.',
    });
});
