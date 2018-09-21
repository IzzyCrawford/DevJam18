import mongoose from 'mongoose';
import Library from './models/library.model';
import LocalSpot from './models/localspot.model'


function listLocalSpots(req, res, next) {
    LocalSpot.find()
        .exec()
        .then(spots => res.json(spots))
        .catch(e => next(e));
}

function getLocalSpot(req, res, next) {
    const id = req.params['localspot'];
    LocalSpot.findOne({_id: id})
        .exec()
        .then(spot => res.json(spot))
        .catch(e => next(e));
}

function listFishLibrary(req, res, next) {
    Library.find()
        .exec()
        .then(lib => res.json(lib))
        .catch(e => next(e));
}

function getFish(req, res, next) {
    const name = req.params['name'];
    Library.findOne({name: name})
        .exec()
        .then(fish => res.json(fish))
        .catch(e => next(e));
}


export default { listLocalSpots, getLocalSpot, listFishLibrary, getFish };