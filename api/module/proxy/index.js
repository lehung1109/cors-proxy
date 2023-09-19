import got from 'got';
const proxy = (req, res, next) => {
    const url = req.query.url;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Origin', 'https://example.com/');
    got(url, {
        timeout: {
            lookup: 100,
            connect: 50,
            secureConnect: 50,
            socket: 1000,
            send: 10000,
            response: 1000
        }
    }).text().then(data => {
        res.send(data.slice(0, 100));
    }).catch(error => {
        res.send(`some thing went wrong! Try another url. Error ${error.code} ${error.message}`);
    }).finally(() => {
        next();
    });
};
// const url = 'https://www.google.com/';
// got(url).then(console.log);
// console.log('test');
export default proxy;
