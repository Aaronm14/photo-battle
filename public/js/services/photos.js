'use strict';

angular.module('photoBattleApp').factory('Photos', ['$resource',
  function($resource) {
    return $resource('photos/:photoId', {
      photoId: '@_id'
    };
  };
]);