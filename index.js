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


function calculate(startDate, stopDate, existingTime) {
  existingTime = existingTime || 0;
  timeAdded = stopDate - startDate;
  return existingTime + timeAdded;
}

// dates
//   date
//     moment.format()
//     start/continue/end
// calculation happens only on stop or calculate (as of today)

// logic: loop through dates
//        if labeled start, create a start date
//        if find a stop, create an end date, calculate time
// Full spec-compliant TodoMVC with localStorage persistence
// and hash-based routing in ~120 effective lines of JavaScript.

// localStorage persistence
var STORAGE_KEY = '3030calculator-v0.1'
var dateStorage = {
  fetch: function () {
    var dates = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    dates.forEach(function (date, index) {
      date.id = index
    })
    dateStorage.uid = dates.length
    return dates
  },
  save: function (dates) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dates))
  }
}

// app Vue instance
var app = new Vue({
  // app initial state
  data: {
    dates: dateStorage.fetch(),
    newDate: '',
    editedDate: null
  },

  // watch dates change for localStorage persistence
  watch: {
    dates: {
      handler: function (dates) {
        dateStorage.save(dates)
      },
      deep: true
    }
  },

  // computed properties
  // http://vuejs.org/guide/computed.html
  //computed: {
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
  //},

  filters: {
    pluralize: function (n) {
      return n === 1 ? 'date' : 'dates'
    }
  },

  // methods that implement data logic.
  // note there's no DOM manipulation here at all.
  methods: {
    addDate: function () {
      var value = this.newDate
      var dateType = this.buttonClass
      if (!value) {
        return
      }
      this.dates.push({
        id: dateStorage.uid++,
        date: moment().format(value),
        dateType: dateType
      })
      this.newDate = ''
    }
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

