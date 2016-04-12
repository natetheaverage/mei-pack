<template>
  <center>
    <h1>{{event.city}}, {{event.state}}</h1>
    <h2>{{ dateSpan(event) }}</h2>
  </center>
    
  <ul class="social-icons">
    <div class="dates">
      <li v-for="day in event.dates | orderBy 'date'">
        <center>
          <div>
            <a :href="day.link">
              <span class="fa-stack fa-2x">
                <i class="fa fa-calendar-o fa-stack-1x"></i>
                <span class="fa-stack" v-text="calanderFormat(day)"></span>
              </span>
            </a>
          </div>
          <p v-text="times(day)"></p>
        </center>
      </li>
    </div>
  </ul>
</template>

<script>
export default {
  name: 'dates_box',
  props:['event'],
  data(){
    return{
    }
  },
  methods:{
    dateSpan(d){
      var date = this.newDate(d.date, '00:00:00')
      var dateString = this.monthTextShort(date.getMonth())+' '
      +d.startDate+'-'+d.endDate+', '+date.getFullYear();
      
      return dateString;
    },
    monthTextShort(d){
      var months = ['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug','Sep.','Oct.','Nov.','Dec.'];
      return months[d];
    },
    prefex(i){
      var j = i % 10, k = i % 100;
      if (j == 1 && k != 11) {
          return i + "st";
      }
      if (j == 2 && k != 12) {
          return i + "nd";
      }
      if (j == 3 && k != 13) {
          return i + "rd";
      }
      return i + "th";
    },

    times(d){
      var startTime = this.newDate(d.date, d.start);  
      var endTime = this.newDate(d.date, d.end);  
      var start = this.twelveHourFormat(startTime.getHours()).toString();
      var end = this.twelveHourFormat(endTime.getHours()).toString();
      return start+'-'+end+'pm';
    },
    newDate(dateString, timeString){
      var dStr=dateString.split('-');
      var tStr=timeString.split(':');
      var date=new Date();
      date.setFullYear(dStr[0], dStr[1]-1, dStr[2]);
      date.setHours(tStr[0]);
      return date;
    },
    twelveHourFormat(h){
      if (h > 12) {
        h -= 12;
      } else if (h === 0) {
         h = 12;
      }
      return h;
    },

    calanderFormat(d){
      d = d.date.split('-');
      return d[1]+'/'+d[2];
    },
  },

  ready(){
      //this.dateD = this.event.dates;
      //this.city = this.event.city;
      //this.state = this.event.state;
      //this.startDate = this.event.startDate;
      //this.endDate = this.event.endDate;
      //console.log(this.event['dates']);
  },
  
}
</script>
<style lang='stylus'>
</style>