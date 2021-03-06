/**
 * Function: staffBookInfoRemove
 * Parameter: condition, connection, and callback
 * Description: To remove one or more books information based on typed conditions
 */
exports.staffBookInfoRemove = function(condition, connection, callback) {
    var sql = 'DELETE FROM BOOK_INFO_TB WHERE BOOK_INFO_TB.BOOK_ID IN (';
    /*Format multiple conditions for sql.*/
    for (var i = 0; i < condition.length; i++) {
        sql += '\'' + condition[i].bookid + '\'' + ((i == condition.length - 1) ? ')' : ', ');
    }
    /*Execute delete sql.*/
    connection.query(sql, function(err) {
        if (err) {
            console.log('Error: Fail to delete result from database.', err);
            callback('error');
        } else {
            callback('success');
        }
    });
}
/**
 * Function: staffStoreInfoRemove
 * Parameter: condition, connection, and callback
 * Description: To remove one or more storage information based on typed conditions
 */
exports.staffStoreInfoRemove = function(condition, connection, callback) {
    var sql = 'DELETE FROM REPOSITORY_INFO_TB WHERE REPOSITORY_INFO_TB.REPOSITORY_ID IN (';
    /*Format multiple conditions for sql.*/
    for (var i = 0; i < condition.length; i++) {
        sql += '\'' + condition[i].repoid + '\'' + ((i == condition.length - 1) ? ')' : ', ');
    }
    /*Execute delete sql.*/
    connection.query(sql, function(err) {
        if (err) {
            console.log('Error: Fail to delete result from database.', err);
            callback('error');
        } else {
            callback('success');
        }
    });
}
/**
 * Function: staffVendInfoRemove
 * Parameter: condition, connection, and callback
 * Description: To remove one or more vendors information based on typed conditions
 */
exports.staffVendInfoRemove = function(condition, connection, callback) {
    var sql = 'DELETE FROM VENDOR_INFO_TB WHERE VENDOR_INFO_TB.VENDOR_ID IN (';
    /*Format multiple conditions for sql.*/
    for (var i = 0; i < condition.length; i++) {
        sql += '\'' + condition[i].vendid + '\'' + ((i == condition.length - 1) ? ')' : ', ');
    }
    /*Execute delete sql.*/
    connection.query(sql, function(err) {
        if (err) {
            console.log('Error: Fail to delete result from database.', err);
            callback('error');
        } else {
            callback('success');
        }
    });
}
