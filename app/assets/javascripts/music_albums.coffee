$ ->
    if window.location.pathname == '/music_albums'
        musicAlbumTable = $('#music-album-datatable').DataTable
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
            columnDefs: [{
                targets: 0,
                checkboxes: {selectRow: true}
            }],
            select: {style: 'multi'},
            'sDom': 'tpl'

        # Inicialización de Yadcf
        yadcf.init(musicAlbumTable,
            [
                {
                    column_number: 1,
                    filter_type: 'text',
                },
                {
                    column_number: 2,
                    filter_type: 'text',
                },
                {
                    column_number: 3,
                    filter_type: "range_number_slider",
                    style_class: 'form-control form-control-sm',
                },
                {
                    column_number: 4,
                    filter_type: "range_date",
                    style_class: 'form-control form-control-sm',
                },
                {
                    column_number: 5,
                    select_type: 'select2',
                    style_class: 'form-control form-control-sm',
                    filter_reset_button_text: false,
                    data: [{value: 'Bulgaria', label: 'Bulgaria'}, {value: 'Cambodia', label: 'Cambodia'}],
                    select_type_options: {
                        allowClear: true,
                        placeholder: 'Select...'
                    }
                },
            ]
        )
