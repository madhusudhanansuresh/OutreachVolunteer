import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import Event from './models/Event';




const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyparser.json());

mongoose.connect('mongodb://localhost:27017/volunteer');

const connection = mongoose.connection;

connection.once('open', () => {
console.log('MongoDB database connection etablished successfully');
});


router.route('/events').get((req, res) => {
    Event.find((err, events) => {
        if (err)
            console.log(err);
        else
            res.json(events);
    });
});

router.route('/events/add').post((req, res) => {
    let event = new Event(req.body);
    event.save()
        .then(event => {
            res.status(200).json({'event': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
})


router.route('/events/update/:id').post((req, res) => {
    Event.findById(req.params.id, (err, event) => {
        if (!event)
            return next(new Error('Could not load Document'));
        else {                   
            event.status = req.body.status;        
            event.save().then(event => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

app.use('/', router);


app.listen(4000, () => console.log(`Express server running on port 4000`));
