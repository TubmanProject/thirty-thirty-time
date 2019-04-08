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


// Full spec-compliant TodoMVC with localStorage persistence
// and hash-based routing in ~120 effective lines of JavaScript.

// localStorage persistence
var STORAGE_KEY = '3030calculator-v0.1'

// app Vue instance
var app = new Vue({
  // app initial state
  data: {
    dates: [],
    inputDate: {
      CORDate: '',
      NCDDate: ''
    },
    newDate: {
      CORDate: '',
      NCDDate: ''
    }
  },

  // computed properties
  // http://vuejs.org/guide/computed.html
  computed: {
    numberDelays: function() {
      return this.dates.length
    },
    totalTimeLost: function() {
      console.log('total')
      var totalTime = 0
      for (var i = 0; i < this.dates.length; i++) {
        console.log(this.dates[i])
        totalTime += this.dates[i].timeElapsed
      }
      return totalTime
    }
    //filteredTodos: function () {
      //return filters[this.visibility](this.todos)
    //},
    //remaining: function () {
      //return filters.active(this.todos).length
    //},
    //allDone: {
      //get: function () {
        //return this.remaining === 0
      //},
      //set: function (value) {
        //this.todos.forEach(function (todo) {
          //todo.completed = value
        //})
      //}
    //}
  },

  filters: {
    pluralize: function (n) {
      return n === 1 ? 'date' : 'dates'
    }
  },

  // methods that implement data logic.
  // note there's no DOM manipulation here at all.
  methods: {
    // Calculate this instance
    // Persist COR date
    addDate: function () {
      var corDate = this.inputDate.CORDate
      var ncdDate = this.inputDate.NCDDate
      if (!corDate | !ncdDate) {
        return
      }
      this.dates.push({
        CORDate: moment(corDate),
        NCDDate: moment(ncdDate),
        timeElapsed: moment(ncdDate).diff(moment(corDate), 'days')
      })
      this.inputDate.CORDate = this.newDate.CORDate
      this.inputDate.NCDDate = this.newDate.NCDDate
    }
    // Calculate full time
  }
  //, 
  // a custom directive to wait for the DOM to be updated
  // before focusing on the input field.
  // http://vuejs.org/guide/custom-directive.html
  //directives: {
    //'todo-focus': function (el, binding) {
      //if (binding.value) {
        //el.focus()
      //}
    //}
  //}
})

// mount
app.$mount('#thirtythirtyapp')

