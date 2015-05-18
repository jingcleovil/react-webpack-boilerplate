import path from 'path';
import Express from 'express';

var app = Express();
var server;

const PATH_STYLES = path.resolve(__dirname, '../client/css');
const PATH_IMAGES = path.resolve(__dirname, '../client/images');
const PATH_DEMO = path.resolve(__dirname, '../client/demo');
const PATH_FONT = path.resolve(__dirname, '../client/fonts');
const PATH_SCRIPTS = path.resolve(__dirname, '../client/scripts/build');
const PATH_DIST = path.resolve(__dirname, '../../dist');

app.use('/css', Express.static(PATH_STYLES));
app.use('/images', Express.static(PATH_IMAGES));
app.use('/demo', Express.static(PATH_DEMO));
app.use('/fonts', Express.static(PATH_FONT));
app.use('/scripts/build', Express.static(PATH_SCRIPTS));
app.use(Express.static(PATH_DIST));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

server = app.listen(process.env.PORT || 3100, () => {
    var port = server.address().port;

    console.log('Server running http://localhost:%s', port);
});
