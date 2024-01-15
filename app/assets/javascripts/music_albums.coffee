$ ->
  $('#music-album-datatable').dataTable
    processing: true,
    serverSide: true,
    ajax:
      url: $('#music-album-datatable').data('source')
      type: 'POST'
    pagingType: 'full_numbers'
    columns: [
      {data: 'id'}
      {data: 'title'}
      {data: 'genre'}
      {data: 'tracks'}
      {data: 'date_of_released'}
      {data: 'country'}
      {data: 'tag'}
    ],
    order: [1, 'asc'],
