$(function() {

  // Menu Toggle

  $('#MenuButton').on('click', function () {
    $(this).toggleClass('open');
    $('#MenuList').slideToggle();
  });

  $('#MenuList a').on('click', function () {
    if( window.innerWidth <= 768){
      $('#MenuButton').removeClass('open');
      $('#MenuList').slideToggle();
    }
  });

  // Window Resize Function

  $(window).resize(function(){

    if( window.innerWidth <= 768){

      $('#MenuList').hide();
      $('#MenuButton').show();
      $('#MenuButton').removeClass('open');

    } else {

      $('#MenuButton').hide();
      $('#MenuList').show();

    }

  });


  // Smooth Scrool

  $('a[href^="#"]').click(function() {

    // �����ݒ�F�ړ�����(ms)�Ɠ��o���ʒu
    var speed = 500;
    var offset = -96;

    // �A���J�[���擾
    var anchor = $(this).attr("href");

    // �^�[�Q�b�g�̈ʒu���擾
    var target = $(anchor == "#" || anchor == "" ? 'html' : anchor);
    var position = target.offset().top + offset;

    // �X�N���[���i�A�j���[�V�����j
    $('body,html').animate({scrollTop:position}, speed, 'swing');

    return false;

   });

});