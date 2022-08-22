function onOpenImageModal() {
  $('html').addClass('no-scroll-y');
  document.body.classList.add('modal-image-show');
  document.body.classList.add('no-scroll-y');
}

function onCloseImageModal() {
  $('html').removeClass('no-scroll-y');
  // Убираем предыдущий скролл
  document.querySelector('.image-modal').scrollTo(0, 0);
  document.body.classList.remove('modal-image-show');
  document.body.classList.remove('no-scroll-y');
}

document.querySelectorAll('.image-with-modal__wrapper').forEach(wrapper => wrapper.addEventListener('click', onOpenImageModal));

document.querySelectorAll('.image-modal__close').forEach(close => close.addEventListener('click', onCloseImageModal));

document.querySelectorAll('.image-modal').forEach(modal => modal.addEventListener('click', function (e) {
  if (e.target === this) {
    onCloseImageModal();
  }
}));