$(document).ready(function() {

	$('.create_note_form').on('submit', function(e) {
		e.preventDefault();
		$('.all_note_container').append(buildNote($(this)));
	});

	$('.container').on('click', '.delete_button', function(e) {
		e.preventDefault();
		$(this).text('You sure?');
		$(this).attr('class', 'confirm_button');
	});

	$('.container').on('click', '.confirm_button', function(e) {
		e.preventDefault();
		$(this).parent().remove();
	});

	$('.container').on('click', '.edit_button', function(e) {
		e.preventDefault();
		var $note = $(this).parent();
		$note.html(buildForm($note));
	});

	$('.container').on('click', '.edit_form_submit', function(e) {
		e.preventDefault();
		var $form = $(this).parent();
		var $note = $form.parent();
		$note.html(editNote($form));
	});

	function buildNote(form) {
		var $newNote = $($.trim($('.note_template').html()));;
		var title = form.children('.form_title').val();
		var content = form.children('.form_content').val();
		$newNote.find('.note_title').text(title);
		$newNote.find('.note_content').text(content);
		return $newNote;
	}

	function editNote(form) {
		var $newNote = $($.trim($('.note_template').html()));;
		var title = form.children('.edit_form_title').val();
		var content = form.children('.edit_form_content').val();
		$newNote.find('.note_title').text(title);
		$newNote.find('.note_content').text(content);
		return $newNote.html();
	}

	function buildForm(note) {
		var $newForm = $($.trim($('.edit_form_template').html()));;
		var title = note.children('.note_title').text();
		var content = note.children('.note_content').text();
		$newForm.find('.edit_form_title').attr('value', title);
		$newForm.find('.edit_form_content').text(content);
		return $newForm;
	}
});
