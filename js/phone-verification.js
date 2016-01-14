window.onload = function(){

    var input = document.querySelector('.inner-wrapper input');

    function getChar(event) {
        if (event.which == null) { // IE
            if (event.keyCode < 32) return null; // ����. ������
            return String.fromCharCode(event.keyCode)
        }

        if (event.which != 0 && event.charCode != 0) { // ��� ����� IE
            if (event.which < 32) return null; // ����. ������
            return String.fromCharCode(event.which); // ���������
        }

        return null; // ����. ������
    }
    input.onkeypress = function(e) {
        e = e || event;

        if (e.ctrlKey || e.altKey || e.metaKey) return;

        var chr = getChar(e);

        // � null ���� ��������� � ������������,
        // �.�. �������� null >= '0' => true
        // �� ������ ������ ����� ������� �������� chr == null ��������
        if (chr == null) return;

        if (chr < '0' || chr > '9') {
            return false;
        }
    }
}

