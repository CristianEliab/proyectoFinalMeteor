import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Colleccion = new Mongo.Collection('basedatosproyecto');


if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('organizaciones', function tasksPublication() {
        return Colleccion.find();
    });
}

Meteor.methods({
    'organizaciones.insert'(organizacion) {
        Colleccion.insert(organizacion);
    },
    'organizaciones.update'(tarea) {
        //Colleccion.update(tarea.idProyecto, {$push:{tareas:{tarea}}});
    },
});