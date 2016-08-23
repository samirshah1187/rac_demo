'use strict';

function productTileComponentController() {
    var self = this;
    self.isDeleted = false;
    self.isFavorited = false;

    this.toggleFavorite = function () {
        self.isFavorited = !self.isFavorited;
        self.listItem.isFavorite = !self.listItem.isFavorite;
    };

    this.toggleDel = function () {
        self.isDeleted = !self.isDeleted;
    };

};

module.exports = productTileComponentController;
