import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Colleccion = new Mongo.Collection('BaseDatosProyecto');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('organizaciones', function tasksPublication() {
        return Colleccion.find();
    });
}

Meteor.methods({
    'organizacion.insert'(organizacion) {
        Colleccion.insert(organizacion);
    },
    'organizacion.update'(tarea) {
        //Colleccion.update(tarea.idProyecto, {$push:{tareas:{tarea}}});
    },
});