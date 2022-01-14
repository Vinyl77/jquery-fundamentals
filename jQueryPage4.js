$(document).ready(function () {
    var tbody = $('#customers tbody');
    $('#addRow').on('click', function () {
        tbody.append('<tr><td>Jane</td><td>Doe</td></tr>');
        tbody.append('<tr><td>Patrick</td><td>Travers</td></tr>')
    });

    tbody.on('click', 'td', function () {
        alert($(this).text());
    });
});