// decide whether input starts or stops clock
// if starts clock, add start date
// if continues clock, pass but add to total?
// if stops clock, add end date
//
// calculate button creates end date of today 
// when there's no stop
//
// calculate function should take age from
// start date to end date
// update automatically if there's a stop date

function calculate(startDate, stopDate) {

}

var calculator = new Vue({
  el: "#calculator",
  data: { 
  },
  methods: {
    addStartDate: function(input) {
      //will need to format the input
      var start = moment.format();
    },
    addEndDate: function(input) {
      //will need to format the input
      var end = moment.format(input)
    },
    calculateOnDemand: function() {
      var end = moment();
      return calculate(start, end);
    }
  }
})
