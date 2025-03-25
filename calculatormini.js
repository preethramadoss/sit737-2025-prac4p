const express= require("express");
const res = require("express/lib/response");
const app = express();  // create an express app
const fs = require('fs');const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'calculator-project' },
  transports: [
    new winston.transports.Console({
      format: winston.format.simple()
    }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

// Example of logging a request
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
}


const add= (n1,n2)=> n1+n2;
const sub= (n1,n2)=> n1-n2;     
const mul= (n1,n2)=> n1*n2;
const div= (n1,n2)=> (n2 !==0 ? n1/n2: "Division by zero is not allowed");

// Addition Operation
app.get("/add", (req,res)=>{
    try{
        const n1=parseFloat(req.query.n1);
        const n2=parseFloat(req.query.n2);
        logger.info('New add operation requested: '+n1+' and '+n2+' parameters');
        if(isNaN(n1)) {
            logger.error("Invalid value for n1");
            throw new Error("Invalid value for n1");
        }
        if(isNaN(n2)) {
            logger.error("Invalid value for n2");
            throw new Error("Invalid value for n2");
        }

        if (n1 === NaN || n2 === NaN) {
            console.log()
            logger.error("Parsing Error");
            throw new Error("Parsing Error");
        }
        
        logger.info('Addition Operation Parameters '+n1+' and '+n2+' is received');
        const result=add(n1,n2);
        res.status(200).json({statuscocde:200, data: result });
        } catch(error) {
            console.log(error)
            logger.error('Error Arised:' +error.toString());
            res.status(500).json({statuscocde:500, msg: error.toString() })
           }
    });

    // Subtraction Operation

    app.get("/sub", (req,res)=>{
        try{
            const n1=parseFloat(req.query.n1);
            const n2=parseFloat(req.query.n2);
            logger.info('New subtract operation requested: '+n1+' and '+n2+' parameters');
            if(isNaN(n1)) {
                logger.error("Invalid value for n1");
                throw new Error("Invalid value for n1");
            }
            if(isNaN(n2)) {
                logger.error("Invalid value for n2");
                throw new Error("Invalid value for n2");
            }
    
            if (n1 === NaN || n2 === NaN) {
                console.log()
                logger.error("Parsing Error");
                throw new Error("Parsing Error");
            }
            
            logger.info('Subtraction Operation Parameters '+n1+' and '+n2+' is received');
            const result=sub(n1,n2);
            res.status(200).json({statuscocde:200, data: result });
            } catch(error) {
                console.log(error)
                logger.error('Error Arised:' +error.toString());
                res.status(500).json({statuscocde:500, msg: error.toString() })
               }
        });

    // Multiplication Operation

    app.get("/mul", (req,res)=>{
        try{
            const n1=parseFloat(req.query.n1);
            const n2=parseFloat(req.query.n2);
            logger.info('New multiply operation requested: '+n1+' and '+n2+' parameters');
            if(isNaN(n1)) {
                logger.error("Invalid value for n1");
                throw new Error("Invalid value for n1");
            }
            if(isNaN(n2)) {
                logger.error("Invalid value for n2");
                throw new Error("Invalid value for n2");
            }
    
            if (n1 === NaN || n2 === NaN) {
                console.log()
                logger.error("Parsing Error");
                throw new Error("Parsing Error");
            }
            
            logger.info('Multiplication Operation Parameters '+n1+' and '+n2+' is received');
            const result=mul(n1,n2);
            res.status(200).json({statuscocde:200, data: result });
            } catch(error) {
                console.log(error)
                logger.error('Error Arised:' +error.toString());
                res.status(500).json({statuscocde:500, msg: error.toString() })
               }
        });

    // Division Operation
    app.get("/div", (req,res)=>{
        try{
            const n1=parseFloat(req.query.n1);
            const n2=parseFloat(req.query.n2);
            logger.info('New divide operation requested: '+n1+' and '+n2+' parameters');
            if(isNaN(n1)) {
                logger.error("Invalid value for n1");
                throw new Error("Invalid value for n1");
            }
            if(isNaN(n2)) {
                logger.error("Invalid value for n2");
                throw new Error("Invalid value for n2");
            }
    
            if (n1 === NaN || n2 === NaN) {
                console.log()
                logger.error("Parsing Error");
                throw new Error("Parsing Error");
            }
            
            logger.info('Division Operation Parameters '+n1+' and '+n2+' is received');
            const result=div(n1,n2);
            res.status(200).json({statuscocde:200, data: result });
            } catch(error) {
                console.log(error)
                logger.error('Error Arised:' +error.toString());
                res.status(500).json({statuscocde:500, msg: error.toString() })
               }
        });
    const port=3040;
    app.listen(port,()=>{
        console.log("Server is running on port" +port);
        logger.info('Server is running on port' +port);
    })

