const express = require('express');
const cors = require('cors');
const connect = require('../config/config.js');
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.path = "/api";
        //Middlewares
        this.middlewares();
        //Routing
        
        this.routes();

    }
    middlewares() {
        this.app.use(express.json());
        //cors
        this.app.use(cors());
        //public directory
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use(this.path, require('../routes/ciclista.routes.js'));
        this.app.use(this.path, require('../routes/equipo.routes.js'));
        this.app.use(this.path, require('../routes/etapa.routes.js'));
        this.app.use(this.path, require('../routes/premio.routes.js'));

    }

    listen(){
        connect();
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNNING ON PORT: ${this.port}`);
        });
    };
}

module.exports = Server;