function todoModifyTabbedPane(event) {
    var tabbedTitles = document.getElementsByClassName('modify-tabbed-title');
    var tabbedContents = document.getElementsByClassName('modify-tabbed-content');

    for (var i = 0; i < tabbedContents.length; i++) {
        if (tabbedContents[i]) {
            tabbedContents[i].style.display = 'none'
            tabbedTitles[i].style.backgroundColor = 'crimson';
        }
    }

    var content = document.getElementById(event.target.title + '-content');
    content.style.display = 'block';
    event.target.style.backgroundColor = 'darkred';
}

function todoBookModifySearch() {
    var bookInfoTable = document.getElementById('book-info-modify-table');
    var bookname = document.getElementById('staff-input-bookname').value;
    var booktype = document.getElementById('staff-select-booktype').value;
    var bookauthor = document.getElementById('staff-input-bookauthor').value;
    var bookdate = [
        document.getElementsByClassName('staff-input-bookdate')[0].value,
        document.getElementsByClassName('staff-input-bookdate')[1].value
    ];
    var bookpress = document.getElementById('staff-select-bookpress').value;
    var bookprice = [
        document.getElementsByClassName('staff-input-bookprice')[0].value,
        document.getElementsByClassName('staff-input-bookprice')[1].value
    ];

    var postURL = '/validate/bookInfoSearch';
    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');

    postRequest.send(JSON.stringify({
        bookname: bookname,
        booktype: booktype,
        bookauthor: bookauthor,
        bookdate: bookdate,
        bookpress: bookpress,
        bookprice: bookprice
    }));

    postRequest.addEventListener('load', function(event) {
        console.log(event.target.response);
        for (var i = bookInfoTable.rows.length - 1; i > 0; i--) {
            bookInfoTable.deleteRow(i);
        }

        book = JSON.parse(event.target.response);
        book.forEach(function(item) {
            var rowHTML = buildBookModHTML(
                item['BOOK_ID'],
                item['BOOK_NAME'],
                item['BOOK_TYPE'],
                item['BOOK_AUTHOR_FIRST_NAME'],
                item['BOOK_AUTHOR_LAST_NAME'],
                item['BOOK_EDITION'],
                item['BOOK_PUBLISH_YEAR'],
                item['BOOK_PUBLISH_MONTH'],
                item['BOOK_PUBLISH_DATE'],
                item['BOOK_PUBLISH_PRESS'],
                item['BOOK_ISBN'],
                item['BOOK_PRICE']
            );
            bookInfoTable.insertAdjacentHTML('beforeend', rowHTML);
        });
    });
}

function todoStorageModifySearch() {
    var bookStoreTable = document.getElementById('store-info-modify-table');
    var bookid = document.getElementById('staff-store-input-bookid').value;
    var bookname = document.getElementById('staff-store-input-bookname').value;
    var booktype = document.getElementById('staff-store-select-booktype').value;
    var bookisbn = document.getElementById('staff-store-input-bookisbn').value;
    var repoid = document.getElementById('staff-store-input-repoid').value;
    var repoaddress = document.getElementById('staff-store-input-address').value;
    var repopurpose = document.getElementById('staff-store-select-purpose').value;

    var postURL = '/validate/storeInfoSearch';
    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');

    postRequest.send(JSON.stringify({
        bookid: bookid,
        bookname: bookname,
        booktype: booktype,
        bookisbn: bookisbn,
        repoid: repoid,
        repoaddress: repoaddress,
        repopurpose: repopurpose
    }));

    postRequest.addEventListener('load', function(event) {
        console.log(event.target.response);
        for (var i = bookStoreTable.rows.length - 1; i > 0; i--) {
            bookStoreTable.deleteRow(i);
        }

        book = JSON.parse(event.target.response);
        book.forEach(function(item) {
            var rowHTML = buildStoreModHTML(
                item['BOOK_ID'],
                item['BOOK_NAME'],
                item['BOOK_TYPE'],
                item['BOOK_QUANTITY'],
                item['REPOSITORY_ID'],
                item['REPOSITORY_ADDRESS_STREET'],
                item['REPOSITORY_ADDRESS_NUMBER'],
                item['REPOSITORY_GUARD_ID']
            );
            bookStoreTable.insertAdjacentHTML('beforeend', rowHTML);
        });
    });
}