function adaptPageDropdown(dataTable) {
    const selector = dataTable.wrapper.querySelector(".dataTable-selector")
    selector.parentNode.parentNode.insertBefore(selector, selector.parentNode)
    selector.classList.add("form-select")
}

function adaptPagination(dataTable) {
    const paginations = dataTable.wrapper.querySelectorAll(
        "ul.dataTable-pagination-list"
    )

    for (const pagination of paginations) {
        pagination.classList.add(...["pagination", "pagination-primary"])
    }

    const paginationLis = dataTable.wrapper.querySelectorAll(
        "ul.dataTable-pagination-list li"
    )

    for (const paginationLi of paginationLis) {
        paginationLi.classList.add("page-item")
    }

    const paginationLinks = dataTable.wrapper.querySelectorAll(
        "ul.dataTable-pagination-list li a"
    )

    for (const paginationLink of paginationLinks) {
        paginationLink.classList.add("page-link")
    }

}


if (document.getElementById('datatables')) {
    var dataTable = new simpleDatatables.DataTable("#datatables", {
        searchable: true,
        fixedHeight: false,
        perPage: 25,
        labels: {
            placeholder: "Поиск...",
            perPage: "{select} записей на странице",
            noRows: "Ничего не найдено",
            info: "Показано с {start} по {end} из {rows} записей",
        },
    });

    dataTable.on("datatable.init", function () {
        adaptPageDropdown(dataTable)
        adaptPagination(dataTable)
    });

    dataTable.on('datatable.perpage', function()  {
        $('.js-example-basic-single').select2();
    });
    dataTable.on('datatable.sort', function()  {
        $('.js-example-basic-single').select2();
    });
    dataTable.on('datatable.search', function() {
        $('.js-example-basic-single').select2();
    });
    dataTable.on("datatable.page", function () {
        $('.js-example-basic-single').select2();
        adaptPagination(dataTable);
    });


}

