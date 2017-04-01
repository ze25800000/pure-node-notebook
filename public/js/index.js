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
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(["name", "hello","world"]),
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

