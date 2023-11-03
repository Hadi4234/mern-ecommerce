import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    discount: { type: Number, required: true },
},{
    timestamps: true,    
});
const offer = mongoose.model('Offer', offerSchema);
export default offer;