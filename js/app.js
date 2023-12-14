document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    // initialView: "dayGridMonth,",
    events: "/api/demo-feeds/events.json",
    editable: true,
    selectable: true,
    headerToolbar: {
      start: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
      center: "title",
      // end: 'prevYear,prev,next,nextYear'
    },
  });

  calendar.render();
});
