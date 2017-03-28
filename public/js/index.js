setTimeout(function () {
  $.ajax({
    url: '/user.action',
    method: 'get',
    success: function (arr) {
      var result = arr.map(function (item) {
        return '<li>' + item + '</li>';
      }).join('');
      $('#root').html(result);
    },
    error: function (error) {
      console.log(error);
    }
  });
  $.ajax({
    url: '/list.action',
    method: 'get',
    success: function (arr) {
      var result = arr.map(function (item) {
        return '<li>' + item + '</li>';
      }).join('');
      $('#list').html(result);
    },
    error: function (error) {
      console.log(error);
    }
  });
}, 2000);

