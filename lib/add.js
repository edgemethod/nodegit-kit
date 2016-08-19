'use strict';

var Git = require('nodegit');

module.exports = function(repo, paths){

    return repo.index()
    .then(function(index){
        return index.removeAll(paths)
        .then(function(){
            return index.addAll(paths);
        })
        .then(function(){
            return index.write();  // sync
        })
        .then(function(){
            return index.writeTree(); // oid
        });
    });

};
