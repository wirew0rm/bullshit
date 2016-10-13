// Extension to have blog publishing options in Jupyter Notebook
// 2016, Alexander Krimm <alex@wirew0rm.de>

define([
	'jquery',
	'base/js/namespace',
	'base/js/dialog',
	'base/js/events'
], function(
	$,
	Jupyter,
	dialog,
	events
){
  // Jupyter.notebook.metadata.blog.blogdir;
	
	var on_publish_callback = function () {
		var now = new Date().getTime();
		while(new Date().getTime() < now + 10000){ /* do nothing */ } 
		console.log('Here i should do the publishing')
	};

	var build_publish_dialog = function () {
		
		// ensure that all the metadata exist
		Jupyter.notebook.metadata['blog'] = {
			'uuid': 'asdf',
			'blogdir': '~/blog/',
			'category': 'linux',
			'template': 'blogpost',
			'author': 'Alex',
			'publish_date': '20161013',
			'comments': false
		}

    var publish_dialog = $('#publish_dialog');
    if (publish_dialog.length > 0) return publish_dialog;
    publish_dialog = $('<div/>').attr('id', 'publish_dialog').append(controls);

    var controls = $('<form/>')
      .appendTo(publish_dialog)
      .addClass('form-horizontal');

		// blogdir
    $('<div/>')
      .addClass('has-feedback')
      .appendTo(controls)
      .append(
        $('<label/>')
          .attr('for', 'blogdir')
          .text('Blog directory')
      )
      .append(
        $('<input/>')
          .addClass('form-control')
          .attr('id', 'blogdir')
          .val(Jupyter.notebook.metadata.blog.blogdir)
      )
      .append(
        $('<span/>')
          .addClass('form-control-feedback')
          .append(
            $('<i/>')
              .addClass('fa fa-lg')
        )
      )
      .append(
        $('<span/>')
          .addClass('help-block')
			);

		// author
    $('<div/>')
      .addClass('has-feedback')
      .appendTo(controls)
      .append(
        $('<label/>')
          .attr('for', 'author')
          .text('Author')
      )
      .append(
        $('<input/>')
          .addClass('form-control')
          .attr('id', 'author')
          .val(Jupyter.notebook.metadata.blog.author)
      )
      .append(
        $('<span/>')
          .addClass('form-control-feedback')
          .append(
            $('<i/>')
              .addClass('fa fa-lg')
        )
      )
      .append(
        $('<span/>')
          .addClass('help-block')
			);

		// template
    $('<div/>')
      .addClass('has-feedback')
      .appendTo(controls)
      .append(
        $('<label/>')
          .attr('for', 'template')
          .text('Template')
      )
      .append(
        $('<input/>')
          .addClass('form-control')
          .attr('id', 'template')
          .val(Jupyter.notebook.metadata.blog.template)
      )
      .append(
        $('<span/>')
          .addClass('form-control-feedback')
          .append(
            $('<i/>')
              .addClass('fa fa-lg')
        )
      )
      .append(
        $('<span/>')
          .addClass('help-block')
			);

		// comments
		$('<div/>')
		  .addClass('has-feedback')
		  .appendTo(controls)
		  .append(
				$('<div/>')
				  .addClass('checkbox')
				  .append(
				    $('<label>')
				      .text('Enable Comments')
				      .prepend(
				    		$('<input/>')
                  .attr('id', 'comments')
				    		  .attr('type', 'checkbox')
				    		  .prop('checked', Jupyter.notebook.metadata.blog.comments)
				    		  .prop('readonly', true)
				    	)
					)
			)

		// publication date
    $('<div/>')
      .addClass('has-feedback')
      .appendTo(controls)
      .append(
        $('<label/>')
          .attr('for', 'publish_date')
          .text('Publication Date')
      )
      .append(
        $('<input/>')
          .addClass('form-control')
          .attr('id', 'publish_date')
          .val(Jupyter.notebook.metadata.blog.publish_date)
      )
      .append(
        $('<span/>')
          .addClass('form-control-feedback')
          .append(
            $('<i/>')
              .addClass('fa fa-lg')
        )
      )
      .append(
        $('<span/>')
          .addClass('help-block')
			);

		// UUID
    $('<div/>')
      .addClass('has-feedback')
//		  .hide() // normally hidden, just shown for debugging purposes
      .appendTo(controls)
      .append(
        $('<label/>')
          .attr('for', 'uuid')
          .text('Post UUID')
      )
      .append(
        $('<input/>')
          .addClass('form-control')
          .attr('id', 'uuid')
          .val(Jupyter.notebook.metadata.blog.uuid)
      )
      .append(
        $('<span/>')
          .addClass('form-control-feedback')
          .append(
            $('<i/>')
              .addClass('fa fa-lg')
        )
      )
      .append(
        $('<span/>')
          .addClass('help-block')
			);
		
		return publish_dialog;
	}

	var show_dialog = function () {
		dialog.modal({
			body: build_publish_dialog ,
			title: 'Publish on blog',
			buttons: {
				'Publish':{
					class: 'btn-primary',
					click: on_publish_callback
				},
				'Cancel':{
					//... (or nothing to just dismiss )
				}
			},
			notebook:Jupyter.notebook,
			keyboard_manager: Jupyter.notebook.keyboard_manager,
		})
	};

	var load_ipython_extension = function () {
		Jupyter.toolbar.add_buttons_group([
			{
				'id'      : 'publish2blog',
				'label'   : 'Publish on Blog',
				'icon'    : 'fa-book',
				'callback': show_dialog
			}
		]);
	};

	return {
		load_ipython_extension : load_ipython_extension
  };
})
