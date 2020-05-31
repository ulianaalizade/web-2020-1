function enter(num) {
    document.form.field.value = document.form.field.value + num;
}

function clean() {
    document.form.field.value = "";
}

function back1() {
    var exp = document.form.field.value;
    document.form.field.value = exp.substring(0, exp.length-1)
}

function equal() {
    var exp = document.form.field.value;
    if(exp) {
        document.form.field.value = eval(exp);
    }
}