const express = require('express');
const app = express();
const morgan = require('morgan');

// settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use((req, res, next) => {
    const cacheTime = 60*60*24;// 60 segundos * 60 minutos * 24 horas = 1 día
    res.set({
        'Cache-Control': `max-age=${cacheTime}`
    });
    next();
});

// routes
app.use(require('./routes/index'));
app.use('/api/golpistas', require('./routes/golpistas'));

//strating server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
