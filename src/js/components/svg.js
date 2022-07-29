
export default () => {
    let layers = document.querySelectorAll('.off-grid__right svg [data-layer]');
    let rows = document.querySelectorAll('.off-grid__left [data-layer]');
    let floorPopup = document.querySelector('.floor');
    let options = document.querySelectorAll('.floor .select__item');

    if (layers.length && rows.length && floorPopup) {
        rows.forEach(function(row) {

          row.addEventListener('click', (e) => {
            let layerName = row.dataset.layer;
            openPopup(layerName);
          });

          row.addEventListener('mouseenter', (e) => {
            let layerName = row.dataset.layer;
            row.classList.add('_active');

            layers.forEach(function(layer) {
              if (layer.dataset.layer == layerName) {
                layer.classList.add('_active');
              }
            });
          });

          row.addEventListener('mouseleave', (e) => {
            let layerName = row.dataset.layer;
            row.classList.remove('_active');

            layers.forEach(function(layer) {
              if (layer.dataset.layer == layerName) {
                layer.classList.remove('_active');
              }
            });
          });
        });


        layers.forEach(function(layer) {
          layer.addEventListener('click', (e) => {
            let layerName = layer.dataset.layer;
            openPopup(layerName);
          });

          layer.addEventListener('mouseenter', (e) => {
            let layerName = layer.dataset.layer;
            layer.classList.add('_active');

            rows.forEach(function(row) {
              if (row.dataset.layer == layerName) {
                row.classList.add('_active');
              }
            });
          });

          layer.addEventListener('mouseleave', (e) => {
            let layerName = layer.dataset.layer;
            layer.classList.remove('_active');

            rows.forEach(function(row) {
              if (row.dataset.layer == layerName) {
                row.classList.remove('_active');
              }
            });
          });
        });
    }

    function openPopup(layerName) {
        floorPopup.classList.add('floor--visible');
        options.forEach(function(option) {
            if (option.dataset.floor == layerName) {
            option.click();
            option.closest('.select').classList.remove('select--expanded');
          }
        });
    }
}
