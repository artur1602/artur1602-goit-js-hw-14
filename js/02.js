<script>
  document.addEventListener('DOMContentLoaded', function () {
    const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatoes', 'Herbs', 'Condiments'];

    function createElements() {
      const listItemElements = ingredients.map(ingredient => {
        const listItem = document.createElement('li');
        listItem.textContent = ingredient;
        listItem.classList.add('item');
        return listItem;
      });

      const listContainerElement = document.getElementById('ingredients');

      if (!listContainerElement) {
        return;
      }

      listContainerElement.append(...listItemElements);
    }

    createElements();
  });
</script>