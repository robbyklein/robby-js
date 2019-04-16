RK = {
  elements: null,
  selected: null,
  
  getElements: function(selector, contextSelector) {
    contextElement = contextSelector
      ? (contextElement = document.querySelector(contextSelector))
      : null

    this.elements = contextElement
      ? contextElement.querySelectorAll(selector)
      : document.querySelectorAll(selector)

    this.selected = this.elements

    return this
  },

  addClass: function(className) {
    this.selected.forEach(function(element) {
      element.classList.add(className)
    })

    return this
  },

  removeClass: function(className) {
    this.selected.forEach(function(element) {
      element.classList.remove(className)
    })

    return this
  },

  toggleClass: function(className) {
    this.selected.forEach(function(element) {
      element.classList.toggle(className)
    })

    return this
  },

  hasClass: function(className) {
    var result = true

    for (var i = 0; i < this.selected.length; i++) {
      var element = this.selected[i]

      if (!element.classList.contains(className)) {
        result = false
        break
      }
    }

    return result
  },

  eq: function(i) {
    this.selected = [this.elements[i]]

    return this
  },

  all: function() {
    this.selected = this.elements

    return this
  },

  on: function(event, call) {
    this.selected.forEach(function(element) {
      element.addEventListener(event, call)
    })

    return this
  },

  each: function(call) {
    this.elements.forEach(function(element, index) {
      call(element, index)
    })
  }
}

/*
  Selector Shorthand
*/

$ = function(selector, contextSelector) {
  return RK.getElements(selector, contextSelector)
}

/*
  Helpers
*/

$.ajax = function() {
}