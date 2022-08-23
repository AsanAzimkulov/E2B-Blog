$(window).scroll(function () {
  const style = window.getComputedStyle(document.querySelector('header'));
  let wrapper = $(".post__anchor__sticky__inner-wrapper");
  if (Number.parseInt(style.getPropertyValue('--body-padding-height')) === 40) {
    $(wrapper).addClass('padding-top-100');
  } else {
    $(wrapper).removeClass('padding-top-100');
  }

})