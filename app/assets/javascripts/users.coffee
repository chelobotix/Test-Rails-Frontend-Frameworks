# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
jQuery ->
    console.log('entre');
    $('#users').dataTable({
        order: [2, 'asc'],
        columnDefs: [{
            targets: 0,
            checkboxes: {selectRow: true}
        }],
        select: {style: 'multi'},
    })
