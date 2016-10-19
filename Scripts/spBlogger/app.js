angular.module('spBlogger', ['spBlogger.posts', 'spBlogger.posts.controllers', 'spBlogger.posts.services', 'ui.router']);

//angular.module('spBlogger', ['ui.router']);

angular.module('spBlogger').run(['$state', function ($state) {
    $state.go('allPosts');
}]);