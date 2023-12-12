const toolbarbtn = document.querySelector(".fiels-toolbar button");
const toolbarDropdown = document.querySelector(".menu-sub-dropdown");

toolbarbtn.addEventListener("click", () => {
  console.log("first");
  toolbarDropdown.classList.toggle("hidden");
});

const depositType = document.querySelectorAll(".table-type");
const depositbtn = document.querySelectorAll(
  ".income-writers-header div ul li"
);
// ================================================================================================
for (let i = 0; i < depositbtn.length; i++) {
  depositbtn[i].addEventListener("click", () => {
    // reset active style and hide every content
    for (let i = 0; i < depositbtn.length; i++) {
      // remove active style from all buttons
      depositbtn[i].classList.remove("active-btn");
      // hide every content related to buttons
      depositType[i].classList.add("hidden");
    }

    // add active style to the clicked button
    depositbtn[i].classList.add("active-btn");

    // show content related to the clicked button
    depositType[i].classList.remove("hidden");
  });
}

// function tagvim footer
document.addEventListener("DOMContentLoaded", function () {
  let calendarEl = document.getElementById("calendar");
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth,",
    // events: "/api/demo-feeds/events.json",
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
