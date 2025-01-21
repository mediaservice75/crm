/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/toastify-js/src/toastify.js":
/*!**************************************************!*\
  !*** ./node_modules/toastify-js/src/toastify.js ***!
  \**************************************************/
/***/ (function(module) {

/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
(function(root, factory) {
  if ( true && module.exports) {
    module.exports = factory();
  } else {
    root.Toastify = factory();
  }
})(this, function(global) {
  // Object initialization
  var Toastify = function(options) {
      // Returning a new init object
      return new Toastify.lib.init(options);
    },
    // Library version
    version = "1.12.0";

  // Set the default global options
  Toastify.defaults = {
    oldestFirst: true,
    text: "Toastify is awesome!",
    node: undefined,
    duration: 3000,
    selector: undefined,
    callback: function () {
    },
    destination: undefined,
    newWindow: false,
    close: false,
    gravity: "toastify-top",
    positionLeft: false,
    position: '',
    backgroundColor: '',
    avatar: "",
    className: "",
    stopOnFocus: true,
    onClick: function () {
    },
    offset: {x: 0, y: 0},
    escapeMarkup: true,
    ariaLive: 'polite',
    style: {background: ''}
  };

  // Defining the prototype of the object
  Toastify.lib = Toastify.prototype = {
    toastify: version,

    constructor: Toastify,

    // Initializing the object with required parameters
    init: function(options) {
      // Verifying and validating the input object
      if (!options) {
        options = {};
      }

      // Creating the options object
      this.options = {};

      this.toastElement = null;

      // Validating the options
      this.options.text = options.text || Toastify.defaults.text; // Display message
      this.options.node = options.node || Toastify.defaults.node;  // Display content as node
      this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify.defaults.duration; // Display duration
      this.options.selector = options.selector || Toastify.defaults.selector; // Parent selector
      this.options.callback = options.callback || Toastify.defaults.callback; // Callback after display
      this.options.destination = options.destination || Toastify.defaults.destination; // On-click destination
      this.options.newWindow = options.newWindow || Toastify.defaults.newWindow; // Open destination in new window
      this.options.close = options.close || Toastify.defaults.close; // Show toast close icon
      this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify.defaults.gravity; // toast position - top or bottom
      this.options.positionLeft = options.positionLeft || Toastify.defaults.positionLeft; // toast position - left or right
      this.options.position = options.position || Toastify.defaults.position; // toast position - left or right
      this.options.backgroundColor = options.backgroundColor || Toastify.defaults.backgroundColor; // toast background color
      this.options.avatar = options.avatar || Toastify.defaults.avatar; // img element src - url or a path
      this.options.className = options.className || Toastify.defaults.className; // additional class names for the toast
      this.options.stopOnFocus = options.stopOnFocus === undefined ? Toastify.defaults.stopOnFocus : options.stopOnFocus; // stop timeout on focus
      this.options.onClick = options.onClick || Toastify.defaults.onClick; // Callback after click
      this.options.offset = options.offset || Toastify.defaults.offset; // toast offset
      this.options.escapeMarkup = options.escapeMarkup !== undefined ? options.escapeMarkup : Toastify.defaults.escapeMarkup;
      this.options.ariaLive = options.ariaLive || Toastify.defaults.ariaLive;
      this.options.style = options.style || Toastify.defaults.style;
      if(options.backgroundColor) {
        this.options.style.background = options.backgroundColor;
      }

      // Returning the current object for chaining functions
      return this;
    },

    // Building the DOM element
    buildToast: function() {
      // Validating if the options are defined
      if (!this.options) {
        throw "Toastify is not initialized";
      }

      // Creating the DOM object
      var divElement = document.createElement("div");
      divElement.className = "toastify on " + this.options.className;

      // Positioning toast to left or right or center
      if (!!this.options.position) {
        divElement.className += " toastify-" + this.options.position;
      } else {
        // To be depreciated in further versions
        if (this.options.positionLeft === true) {
          divElement.className += " toastify-left";
          console.warn('Property `positionLeft` will be depreciated in further versions. Please use `position` instead.')
        } else {
          // Default position
          divElement.className += " toastify-right";
        }
      }

      // Assigning gravity of element
      divElement.className += " " + this.options.gravity;

      if (this.options.backgroundColor) {
        // This is being deprecated in favor of using the style HTML DOM property
        console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
      }

      // Loop through our style object and apply styles to divElement
      for (var property in this.options.style) {
        divElement.style[property] = this.options.style[property];
      }

      // Announce the toast to screen readers
      if (this.options.ariaLive) {
        divElement.setAttribute('aria-live', this.options.ariaLive)
      }

      // Adding the toast message/node
      if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
        // If we have a valid node, we insert it
        divElement.appendChild(this.options.node)
      } else {
        if (this.options.escapeMarkup) {
          divElement.innerText = this.options.text;
        } else {
          divElement.innerHTML = this.options.text;
        }

        if (this.options.avatar !== "") {
          var avatarElement = document.createElement("img");
          avatarElement.src = this.options.avatar;

          avatarElement.className = "toastify-avatar";

          if (this.options.position == "left" || this.options.positionLeft === true) {
            // Adding close icon on the left of content
            divElement.appendChild(avatarElement);
          } else {
            // Adding close icon on the right of content
            divElement.insertAdjacentElement("afterbegin", avatarElement);
          }
        }
      }

      // Adding a close icon to the toast
      if (this.options.close === true) {
        // Create a span for close element
        var closeElement = document.createElement("button");
        closeElement.type = "button";
        closeElement.setAttribute("aria-label", "Close");
        closeElement.className = "toast-close";
        closeElement.innerHTML = "&#10006;";

        // Triggering the removal of toast from DOM on close click
        closeElement.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
            this.removeElement(this.toastElement);
            window.clearTimeout(this.toastElement.timeOutValue);
          }.bind(this)
        );

        //Calculating screen width
        var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

        // Adding the close icon to the toast element
        // Display on the right if screen width is less than or equal to 360px
        if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
          // Adding close icon on the left of content
          divElement.insertAdjacentElement("afterbegin", closeElement);
        } else {
          // Adding close icon on the right of content
          divElement.appendChild(closeElement);
        }
      }

      // Clear timeout while toast is focused
      if (this.options.stopOnFocus && this.options.duration > 0) {
        var self = this;
        // stop countdown
        divElement.addEventListener(
          "mouseover",
          function(event) {
            window.clearTimeout(divElement.timeOutValue);
          }
        )
        // add back the timeout
        divElement.addEventListener(
          "mouseleave",
          function() {
            divElement.timeOutValue = window.setTimeout(
              function() {
                // Remove the toast from DOM
                self.removeElement(divElement);
              },
              self.options.duration
            )
          }
        )
      }

      // Adding an on-click destination path
      if (typeof this.options.destination !== "undefined") {
        divElement.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
            if (this.options.newWindow === true) {
              window.open(this.options.destination, "_blank");
            } else {
              window.location = this.options.destination;
            }
          }.bind(this)
        );
      }

      if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
        divElement.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
            this.options.onClick();
          }.bind(this)
        );
      }

      // Adding offset
      if(typeof this.options.offset === "object") {

        var x = getAxisOffsetAValue("x", this.options);
        var y = getAxisOffsetAValue("y", this.options);

        var xOffset = this.options.position == "left" ? x : "-" + x;
        var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;

        divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";

      }

      // Returning the generated element
      return divElement;
    },

    // Displaying the toast
    showToast: function() {
      // Creating the DOM object for the toast
      this.toastElement = this.buildToast();

      // Getting the root element to with the toast needs to be added
      var rootElement;
      if (typeof this.options.selector === "string") {
        rootElement = document.getElementById(this.options.selector);
      } else if (this.options.selector instanceof HTMLElement || (typeof ShadowRoot !== 'undefined' && this.options.selector instanceof ShadowRoot)) {
        rootElement = this.options.selector;
      } else {
        rootElement = document.body;
      }

      // Validating if root element is present in DOM
      if (!rootElement) {
        throw "Root element is not defined";
      }

      // Adding the DOM element
      var elementToInsert = Toastify.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
      rootElement.insertBefore(this.toastElement, elementToInsert);

      // Repositioning the toasts in case multiple toasts are present
      Toastify.reposition();

      if (this.options.duration > 0) {
        this.toastElement.timeOutValue = window.setTimeout(
          function() {
            // Remove the toast from DOM
            this.removeElement(this.toastElement);
          }.bind(this),
          this.options.duration
        ); // Binding `this` for function invocation
      }

      // Supporting function chaining
      return this;
    },

    hideToast: function() {
      if (this.toastElement.timeOutValue) {
        clearTimeout(this.toastElement.timeOutValue);
      }
      this.removeElement(this.toastElement);
    },

    // Removing the element from the DOM
    removeElement: function(toastElement) {
      // Hiding the element
      // toastElement.classList.remove("on");
      toastElement.className = toastElement.className.replace(" on", "");

      // Removing the element from DOM after transition end
      window.setTimeout(
        function() {
          // remove options node if any
          if (this.options.node && this.options.node.parentNode) {
            this.options.node.parentNode.removeChild(this.options.node);
          }

          // Remove the element from the DOM, only when the parent node was not removed before.
          if (toastElement.parentNode) {
            toastElement.parentNode.removeChild(toastElement);
          }

          // Calling the callback function
          this.options.callback.call(toastElement);

          // Repositioning the toasts again
          Toastify.reposition();
        }.bind(this),
        400
      ); // Binding `this` for function invocation
    },
  };

  // Positioning the toasts on the DOM
  Toastify.reposition = function() {

    // Top margins with gravity
    var topLeftOffsetSize = {
      top: 15,
      bottom: 15,
    };
    var topRightOffsetSize = {
      top: 15,
      bottom: 15,
    };
    var offsetSize = {
      top: 15,
      bottom: 15,
    };

    // Get all toast messages on the DOM
    var allToasts = document.getElementsByClassName("toastify");

    var classUsed;

    // Modifying the position of each toast element
    for (var i = 0; i < allToasts.length; i++) {
      // Getting the applied gravity
      if (containsClass(allToasts[i], "toastify-top") === true) {
        classUsed = "toastify-top";
      } else {
        classUsed = "toastify-bottom";
      }

      var height = allToasts[i].offsetHeight;
      classUsed = classUsed.substr(9, classUsed.length-1)
      // Spacing between toasts
      var offset = 15;

      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

      // Show toast in center if screen with less than or equal to 360px
      if (width <= 360) {
        // Setting the position
        allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";

        offsetSize[classUsed] += height + offset;
      } else {
        if (containsClass(allToasts[i], "toastify-left") === true) {
          // Setting the position
          allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";

          topLeftOffsetSize[classUsed] += height + offset;
        } else {
          // Setting the position
          allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";

          topRightOffsetSize[classUsed] += height + offset;
        }
      }
    }

    // Supporting function chaining
    return this;
  };

  // Helper function to get offset.
  function getAxisOffsetAValue(axis, options) {

    if(options.offset[axis]) {
      if(isNaN(options.offset[axis])) {
        return options.offset[axis];
      }
      else {
        return options.offset[axis] + 'px';
      }
    }

    return '0px';

  }

  function containsClass(elem, yourClass) {
    if (!elem || typeof yourClass !== "string") {
      return false;
    } else if (
      elem.className &&
      elem.className
        .trim()
        .split(/\s+/gi)
        .indexOf(yourClass) > -1
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Setting up the prototype for the init object
  Toastify.lib.init.prototype = Toastify.lib;

  // Returning the Toastify function to be assigned to the window object/module
  return Toastify;
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************************!*\
  !*** ./resources/front/js/events-table.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toastify-js */ "./node_modules/toastify-js/src/toastify.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_0__);

function addRow() {
  var table = document.getElementById('editableTable').getElementsByTagName('tbody')[0];
  var newRow = table.insertRow();

  // Получаем количество столбцов в строке заголовков (учитывая текущие столбцы)
  var headers = document.getElementById('editableTable').getElementsByTagName('thead')[0].rows[1].cells.length;

  // Создаем нужное количество ячеек в новой строке
  for (var i = 0; i < headers - 1; i++) {
    // Минус 1, так как последний столбец — Actions
    var _newCell = newRow.insertCell(i);
    _newCell.classList.add('editable-cell');
    // newCell.contentEditable = 'true';
    _newCell.innerHTML = '<div class="content">Свободно</div><div class="user-info"></div>';
  }

  // Создаем ячейку для Actions с кнопкой удаления
  var newCell = newRow.insertCell(headers - 1);
  newCell.innerHTML = '<button class="btn btn-danger btn-sm delete-row">&#10006;</button>';
}

// Удаление строки
function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

// Добавление нового столбца
function addColumn() {
  var table = document.getElementById('editableTable');
  var thead = table.getElementsByTagName('thead')[0];
  var tbody = table.getElementsByTagName('tbody')[0];

  // Заголовки таблицы
  var headerRow = thead.rows[1]; // Теперь вторая строка — это заголовки
  var removeRow = document.getElementById('removeRow');
  var actionsHeader = headerRow.cells[headerRow.cells.length - 1]; // Находим колонку "Actions"
  var removeActionsCell = removeRow.cells[removeRow.cells.length - 1]; // Для строки с кнопками удаления

  // Создаём новый заголовок перед "Actions"
  var newTh = document.createElement('th');
  // newTh.contentEditable = 'true';
  newTh.classList.add('editable-cell');
  newTh.innerHTML = '<div class="content">Свободно</div><div class="user-info"></div>';
  headerRow.insertBefore(newTh, actionsHeader); // Вставляем перед "Actions"

  // Создаём новую кнопку удаления в строке с кнопками удаления перед Actions
  var newRemoveTh = document.createElement('th');
  newRemoveTh.innerHTML = '<span class="btn btn-danger btn-sm remove-column-btn" attr-number="' + (headerRow.cells.length - 2) + '">&#10006;</span>';
  removeRow.insertBefore(newRemoveTh, removeActionsCell);

  // Проходим по каждой строке тела таблицы и добавляем новую ячейку перед последней ячейкой (Actions)
  for (var i = 0; i < tbody.rows.length; i++) {
    var row = tbody.rows[i];
    var actionsCell = row.cells[row.cells.length - 1]; // Находим ячейку "Actions"
    var newCell = document.createElement('td');
    // newCell.contentEditable = 'true';
    newCell.classList.add('editable-cell');
    newCell.innerHTML = '<div class="content">Свободно</div><div class="user-info"></div>';
    row.insertBefore(newCell, actionsCell); // Вставляем новую ячейку перед "Actions"
  }
}

// Функция для удаления столбца
function removeColumn(index) {
  var table = document.getElementById('editableTable');
  var thead = table.getElementsByTagName('thead')[0];
  var tbody = table.getElementsByTagName('tbody')[0];

  // Удаляем заголовок и кнопку удаления
  thead.rows[0].deleteCell(index);
  thead.rows[1].deleteCell(index);

  // Удаляем ячейки в каждой строке тела таблицы
  for (var i = 0; i < tbody.rows.length; i++) {
    tbody.rows[i].deleteCell(index);
  }
}
function saveTable() {
  var table = document.getElementById('editableTable');
  var headerRow = table.getElementsByTagName('thead')[0].rows[1]; // Строка с заголовками (вторая строка в thead)
  var rows = table.getElementsByTagName('tbody')[0].rows;
  var headerData = [];
  var rowData = [];

  // Собираем данные заголовков
  for (var i = 0; i < headerRow.cells.length - 1; i++) {
    // -1 для исключения столбца "Actions"
    var columnName = headerRow.cells[i].getElementsByClassName('content')[0].innerHTML.trim();
    var userId = headerRow.cells[i].getAttribute('user_id');
    headerData[i] = columnName;
    // headerData[i] = {
    //     'column' : columnName,
    //     'user_id' : userId,
    // }; // Добавляем название столбца в массив заголовков
  }

  // Собираем данные строк
  for (var _i = 0; _i < rows.length; _i++) {
    var cells = rows[_i].cells;
    var row = {};

    // Записываем каждое значение в строке с использованием заголовков как ключей
    for (var j = 0; j < cells.length - 1; j++) {
      // -1 для исключения столбца "Actions"
      var cellValue = cells[j].getElementsByClassName('content')[0].innerHTML.trim();
      var _columnName = headerData[j];
      var _userId = cells[j].getAttribute('user_id');
      row[_columnName] = {
        value: cellValue,
        user_id: _userId || null
      };
    }
    rowData.push(row); // Добавляем строку в массив строк
  }

  console.log(headerData);
  console.log(rowData);

  // Отправляем данные на сервер через AJAX
  var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  fetch('/events/save-table', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': csrfToken
    },
    body: JSON.stringify({
      headers: headerData,
      // Названия столбцов
      rows: rowData // Данные строк
    })
  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    if (result.status === 'success') {
      toastify_js__WEBPACK_IMPORTED_MODULE_0___default()({
        text: "<h6>Отлично 😍</h6><p>Данные успешно сохранены</p>",
        className: "customToast",
        duration: 5000,
        close: true,
        escapeMarkup: false
      }).showToast();
      // console.log(result.message)
      // alert('Table data saved successfully!');
    } else {
      toastify_js__WEBPACK_IMPORTED_MODULE_0___default()({
        text: "<h6>Ой 😬</h6><p>При сохранении данных произошла ошибка</p>",
        className: "customToast",
        duration: 5000,
        close: true,
        escapeMarkup: false
      }).showToast();
      // alert('Error saving table data.');
    }
  })["catch"](function (error) {
    console.error('Error:', error);
  });
}
$("#addRowTable").click(function () {
  addRow();
});
$("#addColumnTable").click(function () {
  addColumn();
});
$(document).on('click', '.delete-row', function () {
  deleteRow(this);
});
$(document).on('click', '.remove-column-btn', function () {
  removeColumn($(this).attr('attr-number'));
});
$("#saveTable").click(function () {
  saveTable();
});
var quill;
var currentCell;
$(document).ready(function () {
  quill = new Quill('#quillEditorContainer', {
    theme: 'snow',
    modules: {
      toolbar: [['bold', 'italic', 'underline'], [{
        'color': []
      }, {
        'background': []
      }], [{
        'font': []
      }], [{
        'align': []
      }], ['link', 'video', 'formula'], [{
        'list': 'ordered'
      }, {
        'list': 'bullet'
      }]]
    }
  });
  $(document).on('click', '.editable-cell', function () {
    currentCell = $(this);
    var cellContent = currentCell.find('.content').html();
    quill.root.innerHTML = cellContent;
    $("#user").val('0').change();
    if (currentCell.attr('user_id')) {
      $("#user").val(currentCell.attr('user_id')).change();
    }
    if (currentCell.prop('tagName') === 'TH') {
      $("#user").parents('.form-group').css('display', 'none');
    } else {
      $("#user").parents('.form-group').css('display', 'block');
    }
    $('.modal-overlay').show();
    $('#quillModal').show();
  });
  $('#saveButton').on('click', function () {
    var newContent = quill.root.innerHTML;
    var user_id = $("#user").val();
    currentCell.attr('user_id', user_id);
    if (user_id != 0) {
      var user = '<p><b>Ответственный:</b> ' + $("#user :selected").text() + '</p>';
      user = user.replace(/ *\([^)]*\) */g, "");
      currentCell.find('.user-info').html(user);
    } else {
      currentCell.find('.user-info').html('');
    }
    currentCell.find('.content').html(newContent);
    // saveContentToServer(currentCell.data('row'), currentCell.data('column'), newContent);

    closeModal();
  });
  $('#cancelButton').on('click', function () {
    closeModal();
  });
  function closeModal() {
    $('.modal-overlay').hide();
    $('#quillModal').hide();
  }
});
})();

/******/ })()
;