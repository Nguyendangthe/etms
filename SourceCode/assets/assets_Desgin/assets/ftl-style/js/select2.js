$(document).ready(function() {
    function dropdownSelect() {
        $('.dropdownSelect').each(function() {
            if($(this).attr('data-placeholder')) {
                var dataPlaceholder = $(this).attr('data-placeholder');
                $(this).select2({
                    placeholder: dataPlaceholder,
                    allowClear: true,
                    width: '100%',
                    language: "vi",
                    dropdownParent: $(this).parent()
                });
            } else {
                $(this).select2({
                    width: '100%',
                    language: "vi",
                    dropdownParent: $(this).parent()
                });
            }
        });
    }
    function dropdownMultiSelect() {
        $('.dropdownMultiSelect').each(function() {
            if($(this).attr('data-placeholder')) {
                var dataPlaceholder = $(this).attr('data-placeholder');
                $(this).select2({
                    multiple: true,
                    allowClear: true,
                    width: '100%',
                    language: "vi",
                    dropdownParent: $(this).parent()
                });
            } else {
                $(this).select2({
                    multiple: true,
                    width: '100%',
                    language: "vi",
                    dropdownParent: $(this).parent()
                });
            }
        });
    }
    dropdownSelect();
    dropdownMultiSelect();
});
