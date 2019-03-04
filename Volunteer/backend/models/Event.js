import mongoose from 'mongoose';
import { stringify } from 'querystring';

const Schema = mongoose.Schema;

let Event = new Schema({
    event: {
           type : String
    },

     description: {
         type: String
     },

     venue: {
         type: String
     },

     datetime:{
         type: String
     },

     transport: {
         type: String
     },

     preferedTransport: {
         type: String
     },
     status: {
         type: Boolean
     }
});

export default mongoose.model ('Event', Event);