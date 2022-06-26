document.getElementById('form1').addEventListener('submit', submiForm)

function submiForm(e){
    e.preventDeFault();

    console.log(123);
}