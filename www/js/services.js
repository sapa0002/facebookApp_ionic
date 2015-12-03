angular.module('starter.services', [])

.factory('FacebookSevice', function ($auth, $http, $ionicPopup) {

    var facebookApiURL = 'graph.facebook.com/v2.2';

    return {
        me: function () {
            if ($auth.isAuthenticated()) {
                return $http.get(facebookApiURL + '/me',

                    {
                        params: {
                            access_token: $auth.getToken(),
                            fields: 'id, name, link, gender, location, website, picture, relationshipStatus',
                            format: 'json'
                        }
                    });
            } else {
                $ionicPopup.alert({
                    title: 'Error',
                    content: 'authenticate the user'
                });

            }



        },
        friends: function (userId) {
            if ($auth.isAuthenticated() && userId) {
                return $http.get(facebookApiURL + '/' + userId + '/friends', {
                    params: {
                        access_token: $auth.getToken()

                    }


                });
            } else {

                $ionicPopup.alert({
                    title: 'Error',
                    content: 'authenticate the user'

                });

            }

        }

    };


});