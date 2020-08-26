function toggle(){
  var sec = document.getElementById('sec');
  var servico = document.getElementById('Serviços');
  var contato = document.getElementById('Contato');
  var nav = document.getElementById('navigation');
  sec.classList.toggle('active');
  servico.classList.toggle('active');
  contato.classList.toggle('active');
  nav.classList.toggle('active');
}