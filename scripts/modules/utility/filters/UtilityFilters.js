hcMedia.filter('htmlToPlaintext', ['_', function(_) {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
}]);
