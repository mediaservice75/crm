import Toastify from "toastify-js";

function addRow() {
    let table = document.getElementById('editableTable').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    // Получаем количество столбцов в строке заголовков (учитывая текущие столбцы)
    let headers = document.getElementById('editableTable').getElementsByTagName('thead')[0].rows[1].cells.length;

    // Создаем нужное количество ячеек в новой строке
    for (let i = 0; i < headers - 1; i++) { // Минус 1, так как последний столбец — Actions
        let newCell = newRow.insertCell(i);
        newCell.classList.add('editable-cell');
        // newCell.contentEditable = 'true';
        newCell.innerHTML = '<div class="content">Свободно</div><div class="user-info"></div>';


    }

    // Создаем ячейку для Actions с кнопкой удаления
    let newCell = newRow.insertCell(headers - 1);
    newCell.innerHTML = '<button class="btn btn-danger btn-sm delete-row">&#10006;</button>';
}


// Удаление строки
function deleteRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Добавление нового столбца
function addColumn() {
    let table = document.getElementById('editableTable');
    let thead = table.getElementsByTagName('thead')[0];
    let tbody = table.getElementsByTagName('tbody')[0];

    // Заголовки таблицы
    let headerRow = thead.rows[1]; // Теперь вторая строка — это заголовки
    let removeRow = document.getElementById('removeRow');
    let actionsHeader = headerRow.cells[headerRow.cells.length - 1]; // Находим колонку "Actions"
    let removeActionsCell = removeRow.cells[removeRow.cells.length - 1]; // Для строки с кнопками удаления

    // Создаём новый заголовок перед "Actions"
    let newTh = document.createElement('th');
    // newTh.contentEditable = 'true';
    newTh.classList.add('editable-cell');
    newTh.innerHTML = '<div class="content">Свободно</div><div class="user-info"></div>';
    headerRow.insertBefore(newTh, actionsHeader); // Вставляем перед "Actions"

    // Создаём новую кнопку удаления в строке с кнопками удаления перед Actions
    let newRemoveTh = document.createElement('th');
    newRemoveTh.innerHTML = '<span class="btn btn-danger btn-sm remove-column-btn" attr-number="' + (headerRow.cells.length - 2) + '">&#10006;</span>';
    removeRow.insertBefore(newRemoveTh, removeActionsCell);

    // Проходим по каждой строке тела таблицы и добавляем новую ячейку перед последней ячейкой (Actions)
    for (let i = 0; i < tbody.rows.length; i++) {
        let row = tbody.rows[i];
        let actionsCell = row.cells[row.cells.length - 1]; // Находим ячейку "Actions"
        let newCell = document.createElement('td');
        // newCell.contentEditable = 'true';
        newCell.classList.add('editable-cell');
        newCell.innerHTML = '<div class="content">Свободно</div><div class="user-info"></div>';
        row.insertBefore(newCell, actionsCell); // Вставляем новую ячейку перед "Actions"
    }
}

// Функция для удаления столбца
function removeColumn(index) {
    let table = document.getElementById('editableTable');
    let thead = table.getElementsByTagName('thead')[0];
    let tbody = table.getElementsByTagName('tbody')[0];

    // Удаляем заголовок и кнопку удаления
    thead.rows[0].deleteCell(index);
    thead.rows[1].deleteCell(index);

    // Удаляем ячейки в каждой строке тела таблицы
    for (let i = 0; i < tbody.rows.length; i++) {
        tbody.rows[i].deleteCell(index);
    }
}

function saveTable() {
    let table = document.getElementById('editableTable');
    let headerRow = table.getElementsByTagName('thead')[0].rows[1]; // Строка с заголовками (вторая строка в thead)
    let rows = table.getElementsByTagName('tbody')[0].rows;

    let headerData = [];
    let rowData = [];

    // Собираем данные заголовков
    for (let i = 0; i < headerRow.cells.length - 1; i++) { // -1 для исключения столбца "Actions"
        let columnName = headerRow.cells[i].getElementsByClassName('content')[0].innerHTML.trim();
        let userId = headerRow.cells[i].getAttribute('user_id');

        headerData[i] = columnName;
        // headerData[i] = {
        //     'column' : columnName,
        //     'user_id' : userId,
        // }; // Добавляем название столбца в массив заголовков
    }

    // Собираем данные строк
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].cells;
        let row = {};

        // Записываем каждое значение в строке с использованием заголовков как ключей
        for (let j = 0; j < cells.length - 1; j++) { // -1 для исключения столбца "Actions"
            let cellValue = cells[j].getElementsByClassName('content')[0].innerHTML.trim();
            let columnName = headerData[j];

            let userId = cells[j].getAttribute('user_id');

            row[columnName] = {
                value: cellValue,
                user_id: userId || null
            };
        }

        rowData.push(row); // Добавляем строку в массив строк
    }

    console.log(headerData);
    console.log(rowData);

    // Отправляем данные на сервер через AJAX
    let csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    fetch('/events/save-table', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken
        },
        body: JSON.stringify({
            headers: headerData, // Названия столбцов
            rows: rowData // Данные строк
        })
    })
        .then(response => response.json())
        .then(result => {
            if (result.status === 'success') {
                Toastify({
                    text: "<h6>Отлично 😍</h6><p>Данные успешно сохранены</p>",
                    className: "customToast",
                    duration: 5000,
                    close: true,
                    escapeMarkup: false,
                }).showToast();
                // console.log(result.message)
                // alert('Table data saved successfully!');
            } else {
                Toastify({
                    text: "<h6>Ой 😬</h6><p>При сохранении данных произошла ошибка</p>",
                    className: "customToast",
                    duration: 5000,
                    close: true,
                    escapeMarkup: false,
                }).showToast();
                // alert('Error saving table data.');
            }
        })
        .catch(error => {
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

let quill;
let currentCell;

$(document).ready(function () {

    if (document.getElementById('editableTable')) {
        quill = new Quill('#quillEditorContainer', {
            theme: 'snow',
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline'],
                    [{'color': []}, {'background': []}],
                    [{'font': []}],
                    [{'align': []}],
                    ['link', 'video', 'formula'],
                    [{'list': 'ordered'}, {'list': 'bullet'}],
                ]
            },


        });
    }

    $(document).on('click', '.editable-cell',  function () {
        currentCell = $(this);
        const cellContent = currentCell.find('.content').html();

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
        const newContent = quill.root.innerHTML;

        let user_id = $("#user").val();

        currentCell.attr('user_id', user_id);

        if (user_id != 0) {
            let user = '<p><b>Ответственный:</b> ' + $("#user :selected").text() + '</p>';
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