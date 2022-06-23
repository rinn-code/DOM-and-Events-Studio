// Write your JavaScript code here.
function init() {
    const takeoff = document.getElementById("takeoff");
    //const landing = document.getElementById("landing");
    //const abortMission = document.getElementById("abortMission");

    takeoff.addEventListener('click', () => {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result = true) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in Flight.";
            //paragraph.setAttribute("flightStatus", "Shuttle in Flight.");
          //  shuttleBackground.style.backgroundColor = "blue"
          console.log(paragraph.innerHTML);// = "Space shuttle ready for takeoff";
        }
        
    })
}

// Remember to pay attention to page loading!
window.addEventListener("load", init); 