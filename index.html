<!DOCTYPE html>
<html>
<head>
  <title>Final ED2</title>
  <!-- Icon at the tab  -->
  <link rel = "icon" href =
   "https://mooreagencies.com/wp-content/uploads/2020/04/lock_u.png"
      type = "image/x-icon">
  <style>
    .chartLine{
      width:900px;
      height:500px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 70%;
      background-color: rgb(0, 255, 255);
    }
    .chartLine2{
      width:900px;
      height:500px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 80%;
      background-color: rgb(0, 255, 255);
    }
    .my-button{
      /* Modifica el tamaño del boton: ancho vs alto */
      padding: 5px 20px;
      background-color: DarkBlue;
      color: white;
      /* para que sea redondeado */
      border-radius: 20px;
      border-color: rgb(0, 255, 0);
    }
    .solve-button{
      /* Modifica el tamaño del boton: ancho vs alto */
      padding: 5px 20px;
      background-color: rgb(0, 255, 0);
      color: black;
      border-color: rgb(0, 255, 0);
      /* para que sea redondeado */
      border-radius: 20px;
    }
    h3{
      color: rgb(0, 255, 0);
      margin-left: 100px;
      font-family: Arial, Helvetica, sans-serif;
    }
    h4{
      color: rgb(0, 255, 255);
      margin-left: 100px;
      font-family: Arial, Helvetica, sans-serif;
    }
    h1{
      color: rgb(0, 255, 255 );
      text-align: center;
      font-size: 50px;
      font-family: Arial, Helvetica, sans-serif;
    }
    p{
      color: white;
      text-align: center;
      font-size: 15px;
      font-family: Arial, Helvetica, sans-serif;
    }
    input {
      font-family: Arial, Helvetica, sans-serif;
      color: DarkBlue;
      display: inline-block;
      background-color: rgb(0, 255, 255);
      border-color: rgb(0, 0, 51);
    }
    table, th, td {
      border:1px solid;
    }
    .first_line_button{
      width:230px;
      height:170px;
      /* padding: 5px 20px; */
      background-color: rgb(0, 255, 255);
      color: black;
      font-size: 20px;
      border-radius: 20px;
      display: inline-block;
      margin: 10px;
    }
    .first_line_button:hover{
      background-color: rgb(0, 255, 0);;
    }
    table {
      width: 70%;
      margin-left: auto;
      margin-right: auto;
      background-color: #0033FF;
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      border-color: rgb(0, 255, 0);
      border-left-color: rgb(0, 255, 0);
    }
    th{
      background-color: rgb(0, 255, 255);
      color: #0033FF;
    }
    .from-to{
      display: table;
    }
    .inside-ft{
      display: table-cell;
      margin-left: 20px;
    }
    .report_buttons{
      width: 70%;
      margin-left: 300px;
    }
  </style>

  <!-- Import Chart.js, axios and date data-->
  <script src = "https://unpkg.com/axios@0.21.1/dist/axios.min.js"></script>
  <script src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.6.0/chart.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js"></script>
  <!-- Creating the sound level graph  -->
  <script>
    const url_sounds = "https://final-ed2.herokuapp.com/sounds"
    const responsePromise = axios.get(url_sounds);
    responsePromise.then((response)=>{
      const sounds = response.data.sounds
      let sounds_registered = []
      // Generate the data for the sound value graph
      for (var i = 0; i < sounds.length; i++) {
        sounds_registered.push({x: new Date(sounds[i].createdAt), y:sounds[i].sound_value})
      }
      const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
          type: 'line',
          data: {
              datasets: [{
                  label: 'Sound level',
                  data: sounds_registered,
                  backgroundColor:"rgb(0, 51, 204 )" ,
                  borderColor: "rgb(0, 51, 204 )",
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  x: {
                    type: 'time'
                  },
                  y: {
                      beginAtZero: true
                  },
              },
              maintainAspectRatio: false,
              responsive: true
          }
      });
    })
    </script>

  <!-- Creating the movement graph  -->
  <script>
    const url_movement = "https://final-ed2.herokuapp.com/motion"
    const mov_promise = axios.get(url_movement);
    // Generate the data for the sound value graph
    mov_promise.then((response)=>{
      const movements = response.data.movements
      let movements_registered = []
      for (var i = 0; i < movements.length; i++) {
        movements_registered.push({x: new Date(movements[i].createdAt), y:1})
      }
    // Create the movement graph
    const ctx = document.getElementById('myChart').getContext('2d');
    const movChart = new Chart(document.getElementById('movChart'), {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Movement detection',
                data: movements_registered,
                spanGaps: false,
                backgroundColor:"rgb(0, 51, 204 )" ,
                borderColor: "rgb(0, 51, 204 )",
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                  type: 'time'
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                      callback: function(value, index){
                        if(this.getLabelForValue(index) == 10){
                          return 'Movement Detected'
                        }else if (this.getLabelForValue(index) == 0){
                          return 'No Movement'
                        }
                      }
                    }
                }
            },
            maintainAspectRatio: false,
            responsive: true
        }
      });
    })
  </script>

  <!-- Creating the alarm table  -->
  <script>
    const url = "https://final-ed2.herokuapp.com/alarms"
    const alarmPromise = axios.get(url);
    // Get the alarm data
    alarmPromise.then((response)=>{
      const alarms = response.data.alarms
      for (var i = 0; i < alarms.length; i++) {
        var alarm_date = new Date(alarms[i].sound.createdAt)
        // Create the date
        var date = alarm_date.getDate() + "/" + alarm_date.getMonth() + "/"
        + alarm_date.getFullYear()+" at " + alarm_date.getHours() + ":"
        date += alarm_date.getMinutes() < 10? '0' + alarm_date.getMinutes() : alarm_date.getMinutes()

        // Add the alarm information to the table
        document.getElementById('alarms').innerHTML += '<tr><td>' +  alarms[i].id + '</td><td>' +
        alarms[i].sound.sound_value + '</td><td> ' + date + '</td><td id="boton'+alarms[i].id+'"><button class= "solve-button" onclick="solveAlarm('+ alarms[i].id +')" > Solve </button></td></tr>'

        // Add solved instead of 'Solve' button
        if(alarms[i].solved){
         document.getElementById('boton'+alarms[i].id).innerHTML = 'Solved'
        }
       }
    })

    // Change in the data base the alarm status to 'solved'
    let solveAlarm = function(id){
      const update_url = "http://localhost:3000/update-alarms"
      const reportPromise = axios.get(update_url, {params:{alarm_id: id, solved:true}});
      document.getElementById('boton'+id).innerHTML = 'Solved'
    }
  </script>

</head>
  <body style="background-color:rgb(0, 0, 51);">
    <h1>Alarm System<h1>
    <!-- First 4 buttons to jump to different parts of the web page-->
    <div>
      <a href="#sound_link"><button class= "first_line_button"><img src="https://www.pngall.com/wp-content/uploads/8/Vector-Sound-PNG-Image-File.png" width="100"/><br>Sound Level </button></a>
      <a href="#motion_link"><button class= "first_line_button"><img src="https://i.dlpng.com/static/png/4629223-motion-icon-with-png-and-vector-format-for-free-unlimited-download-png-motion-512_512_preview.png" width="100"/><br>Movement Detection </button></a>
    </div>
    <div style="height: 190px">
      <a href="#alarm_link"><button style="padding-top: 25px" class= "first_line_button"><img src="http://cdn.onlinewebfonts.com/svg/img_129610.png" width="100"/><br>Alarms</button></a>
      <a href="#report_link"><button class= "first_line_button"><img src="https://www.pngall.com/wp-content/uploads/3/Report-PNG-High-Quality-Image.png" width="100"/><br>Reports</button></a>
    </div>

    <!-- Sound level graph -->
    <h3><a id="sound_link">Sound detection</a> </h3>
    <div class = "chartLine">
      <canvas id="myChart"></canvas>
    </div>
    <p>Graph plotting the sound level. The sound level was registered by an arduino sound sensor that has a sensitivity of 48-66 dB.
      <br>The background noise has a value of '0'. Any sound value above 10 will generate and alarm. </P>

    <!-- Motion graph -->
    <h3><a id="motion_link">Movement detection</a> </h3>
    <div class = "chartLine2">
      <canvas id="movChart"></canvas>
    </div>
    <p>Graph plotting the movement. This is registered by a PIR motion sensor. It can cover distance of about 120° and 7 meters.
      <br> Data points are being gathered every second. The bars are drawn when there is movement detected.
      <br>If there is no movement detection, no bars will be drawn and the sensor stops registering.</P>

    <!-- Alarms table -->
    <h3><a id="alarm_link">Alarms</a> </h3>
    <table id='alarms'>
      <tr>
        <th>ID</th>
        <th>Sound Level</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </table>
    <p>Table showing the alarms registered after a sound level above 10.Once the reason for the sound has been found,
      <br> the user can mark the event as 'solved' in order to keep a record of all unsolved events separate.</p>

    <!-- Reports with from-to buttons -->
    <h3><a id="report_link">Report</a> </h3>
    <!-- From-to buttons -->
    <div class= "from-to">
      <div class="inside-ft">
        <h4>From:  </h4>
      </div>
      <div class="inside-ft">
        <input type="date" name="startDate">
      </div>
      <div class="inside-ft">
        <h4>To: </h4>
      </div>
      <div class="inside-ft">
        <input type="date" name="endDate">
      </div>
    </div>
    <!-- Show the report -->
    <div class ="report_buttons" id='report_buttons'>
    </div>
</body>

<!-- Creating the report -->
<script>
  // Get the from-to input data
  const endDate = document.querySelector("input[name='endDate']");
  const startDate = document.querySelector("input[name='startDate']");
  var endValue
  var startValue
  endDate.addEventListener("change", function (e) {
      send_request(e);
  })
  startDate.addEventListener("change", function (e) {
      send_request(e);
  })
  function send_request(e){
    e.preventDefault();
    endValue = new Date(endDate.value);
    startValue = new Date(startDate.value);
    const report_url = "https://final-ed2.herokuapp.com/report"
    const reportPromise = axios.get(report_url, {params:{start: startValue, end:endValue}});
    reportPromise.then((response)=>{
      const reports = response.data.reports
      document.getElementById('report_buttons').innerHTML = '<button class= "my-button">Total alarms= '
      + reports.alarms_count[0].count + '</button>' + '<button class= "my-button">Total movements= '
      + reports.movement_count[0].count + '</button>' + '<button class= "my-button">Average sound= '
      + reports.sound_avg[0].avg + '</button>'
    })
  }
</script>
</html>
