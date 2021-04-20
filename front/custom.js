document.getElementById('dolar').addEventListener('focus', (event) => {
    event.target
}, "keyup", (e) => {
    e.target.value(function(index, value) {
        return value.replace(/\D/g, "")
          .replace(/([0-9])([0-9]{2})$/, '$1,$2')
          .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".");
      });
}) 