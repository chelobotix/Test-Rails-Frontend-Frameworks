$ ->
  $('#movies-datatable').dataTable
    processing: true,
    serverSide: true,
    ajax:
      url: $('#movies-datatable').data('source')
      type: 'POST'
    pagingType: 'full_numbers'
    columns: [
      {data: 'id'}
      {data: 'name'}
      {data: 'year'}
    ],
    order: [1, 'asc'],
