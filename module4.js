$(document).ready(function () {
    WireEvents();
});

function WireEvents() {
    $('#SubmitButton').click(function () {
        var firstNameVal = $('#FirstNameTextBox').val();
        var lastNameVal = $('#LastNameTextBox').val();
        $('#DivOutput').text(firstNameVal + ' ' + lastNameVal);
        //Using unbind();
        $('#MyDiv').unbind('mouseup');
    });

    //Handle select
    $('.MyInput').change(function () {
        alert($(this).val());
        $(this).addClass('Highlight');
    });

    //Using short-cut event functions
    //            $('#MyDiv').mouseenter(function () {
    //                Toggle(this);
    //                $(this).css('cursor', 'pointer');
    //            })
    //            .mouseleave(function () {
    //                Toggle(this);
    //            })
    //            .mouseup(function (e) {
    //                alert($(e.target).attr('id'));
    //                $(this).text('X: ' + e.pageX + ' Y: ' + e.pageY);
    //            });

    //            function Toggle(div) {
    //               $(div).toggleClass('Highlight');
    //            }

    //bind() and on()
    /*  bind() is deprecated - use on() as shown below
        
        $('#MyDiv').bind('mouseenter mouseleave mouseup', function (e) {
        $(this).toggleClass('Highlight');
        $(this).css('cursor', 'pointer');
        if (e.type == 'mouseup') {
            $(this).text('X: ' + e.pageX + ' Y: ' + e.pageY);
        }
    });*/
    
    $('#MyDiv').on('mouseenter mouseleave mouseup', function (e) {
        $(this).toggleClass('Highlight');
        $(this).css('cursor', 'pointer');
        if (e.type == 'mouseup') {
            $(this).text('X: ' + e.pageX + ' Y: ' + e.pageY);
        }
    });

    //Using hover()
    //            $('#MyTable tr').hover(
    //                function () {
    //                    //mousenter
    //                    $(this).css('background-color', '#efefef');
    //                },
    //                function () {
    //                    //mouseleave
    //                    $(this).css('background-color', '#fff');
    //                });

    $('#MyTable tr').hover(function () {
        $(this).toggleClass('LightHighlight');
    });

    //Using toggle()
    //            $('#MyTable tr').toggle(
    //                function () {
    //                    //mousenter
    //                    $(this).css('background-color', '#efefef');
    //                },
    //                function () {
    //                    //mouseleave
    //                    $(this).css('background-color', '#fff');
    //                },
    //                function () {
    //                    //mouseleave
    //                    $(this).css('background-color', 'Yellow');
    //                }
    //                );

    /*
    <input type="button" id="AddPhone" value="Add Phone" />
    <div id="PhonesDiv" style="margin-top:10px;">
        <div class="PhoneTypeDiv">
            <select class="PhoneType">
                <option value="">Select One:</option>
                <option value="Mobile">Mobile</option>
                <option value="Office">Office</option>
            </select>
        </div>
        <div class="PhoneNumberDiv">
            <input type="text" class="PhoneNumber" maxlength="12" />
        </div>
    </div>
    */

    var phonesDiv = $('#PhonesDiv');

    $('#AddPhone').click(function () {
        var phoneSelDiv = $('div:eq(0)', phonesDiv).clone();
        var phoneTbDiv = $('div:eq(1)', phonesDiv).clone();
        $('select', phoneSelDiv).val('');
        $('input', phoneTbDiv).val('');
        phonesDiv.append('<div style="clear:both;" />')
                 .append(phoneSelDiv)
                 .append(phoneTbDiv);
    });

    //Note that live/die has been removed in jQuery 1.9+ so if you're using a newer script version
    //as in this project then you should use on/off or delegate : http://api.jquery.com/on/
    //            $('input', phonesDiv).live('keypress', function (e) {
    //                if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 45) {
    //                    e.stopPropagation();
    //                    return false;
    //                }
    //            });

    /*
    delegate() example but use on()
    phonesDiv.delegate('input', 'keypress', function (e) {
        if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 45) {
            e.stopPropagation();
            return false;
        }
    });*/
    
    phonesDiv.on('keypress', 'input', function (e) {
        if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 45) {
            e.stopPropagation();
            return false;
        }
    });

}