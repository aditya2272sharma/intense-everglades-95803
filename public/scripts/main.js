/**
// https://stackoverflow.com/a/6263537/8887445
$('body').on('focus', '[contenteditable]', function() {
    var $this = $(this);
    $this.data('before', $this.html());
    return $this;
}).on('blur keyup paste input', '[contenteditable]', function() {
    var $this = $(this);
    if ($this.data('before') !== $this.html()) {
        $this.data('before', $this.html());
        $this.trigger('change');
    }
    return $this;
});

**/

$(function(){
  var target = document.querySelector('h1');
  var config = {
    attributes: true,
    childList: true,
    characterData: true
  };
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      console.log(mutation.type);
    })
  });

  observer.observe(target, config);


  $('button').on('click', function() {
    var p = $(document.createElement('p'))
    // var p = $('p')
    .text('this is a new field just added')
    .css('color', 'red')
    .height('50px');

    $(this).before(p);
  })


});

