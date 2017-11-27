$(document).ready(function() {
  var currentDate = new Date();
  function generateCalendar(d) {
    function monthDays(month, year) {
      var result = [];
      var days = new Date(year, month, 0).getDate();
      for (var i = 1; i <= days; i++) {
        result.push(i);
      }
      return result;
    }
    Date.prototype.monthDays = function() {
      var d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
      return d.getDate();
    };
    var details = {
      totalDays: d.monthDays(),
      weekDays: ['日', '月', '火', '水', '木', '<span class="c-blue">金</span>', '<span class="c-pink">土</span>'],
      months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    };
    var start = new Date(d.getFullYear(), d.getMonth()).getDay();
    var cal = [];
    var day = 1;
    for (var i = 0; i <= 6; i++) {
      cal.push(['<tr>']);
      for (var j = 0; j < 7; j++) {
        if (i === 0) {
          cal[i].push('<td class="day-name">' + details.weekDays[j] + '</td>');
        } else if (day > details.totalDays) {
          cal[i].push('<td>&nbsp;</td>');
        } else {
          if (i === 1 && j < start) {
            cal[i].push('<td>&nbsp;</td>');
          } else {
            cal[i].push('<td class="day">' + day++ + '</td>');
          }
        }
      }
      cal[i].push('</tr>');
    }
    cal = cal.reduce(function(a, b) {
      return a.concat(b);
    }, []).join('');
    $('table').append(cal);
    $('#month').text(details.months[d.getMonth()]);
    $('#year').text(d.getFullYear() + '年');
    $('td.day').mouseover(function() {
      $(this).addClass('hover');
    }).mouseout(function() {
      $(this).removeClass('hover');
    });
  }
  $('#left').click(function() {
    $('table').text('');
    if (currentDate.getMonth() === 0) {
      currentDate = new Date(currentDate.getFullYear() - 1, 11);
      generateCalendar(currentDate);
    } else {
      currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
      generateCalendar(currentDate);
    }
  });
  $('#right').click(function() {
    $('table').html('<tr></tr>');
    if (currentDate.getMonth() === 11) {
      currentDate = new Date(currentDate.getFullYear() + 1, 0);
      generateCalendar(currentDate);
    } else {
      currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
      generateCalendar(currentDate);
    }
  });
  generateCalendar(currentDate);
});