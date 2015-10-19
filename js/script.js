
(function(){
  
  var app= angular.module("project3", [ ]);

app.controller("InstaCtrl", ['$scope', '$http', function($scope, $http) {



  $scope.loading = false;
  $scope.posts=[];  
  $scope.getPhotos = function(e) {
    e && e.preventDefault();
    $scope.loading=true;
      var searchInput = "https://api.instagram.com/v1/tags/"+ $scope.hashtag + "/media/recent?callback=JSON_CALLBACK&count=12&client_id=fc2d1d34fbbd4050a1f736b004887106";
      $http.jsonp(searchInput).then(function(response){
        $scope.posts = response.data.data;
        $scope.loading=false;
      });
};

}]);

}) ();





// $(function () {
//     $('#tag-search').submit(function (event){
//       event.preventDefault();
//             $('.wait').show();


// var anytag = '';
// var tagName = $('#tag').val();
// $.ajax({
// method: 'GET',
// url:'https://api.instagram.com/v1/tags/'+ tagName + '/media/recent?count=12&client_id=fc2d1d34fbbd4050a1f736b004887106',
// dataType: 'jsonp'
//  })
//   .done(function(results){
//             var result = results.data;
//             console.log(result);
//   $.each(result, function(key,value){
    // anytag += '<li>';
    // anytag += '<img src="'+ value.images.standard_resolution.url + '" />'; 
    // anytag += '<div class= "profile">';
    // anytag += '<img class="profilepic" src="' + value.caption.from.profile_picture + '" />';
    // anytag += '<div class="usernameandicons">';
    // anytag += '<h3>' + value.caption.from.username + '</h3>';
    // anytag += '<div class="icons">';
    // anytag += '<i class="fa fa-comments"></i>' + '<p>' + value.comments.count + '</p>';
    // anytag += '<i class="fa fa-heart"></i>' + '<p>' + value.likes.count + '</p>';
    // anytag += '</div>';
    // anytag += '</div>';
    // anytag += '</div>';
    // anytag += '</li>';
//   });
//     $('.tag-list').empty();
//       $('.tag-list').append(anytag);
//               $('.wait').hide();

//   });
//        }); 
//     })

// $('.results').click(function(){
//   $('.tag-list').empty();
// });



