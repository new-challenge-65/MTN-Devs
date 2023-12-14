document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    events: "/api/demo-feeds/events.json",
    editable: true,
    selectable: true,
    headerToolbar: {
      start: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
      center: "title",
    },
    events:[{
      title: 'mehndi',
      start:'2023-12-14',
      end:'2023-12-14T13:00',
      color:'blue',
      textColor:'black',
    },
    {
      title:'haldi',
      start:'2023-12-20T13:00',
      end:'2023-12-20T18:00',
      color:'blue',
      background:'yellow',
      textColor:'black'
    }
  ]
  });

  calendar.render();
});
