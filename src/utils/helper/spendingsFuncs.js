/* crea las categorias en funcion de las guardadas en la base de datos y las que se crean desde el form */
export const CreateCategories = (categories) => {
  return categories.map((category) => (
    <option key={category.name} value={category.name}>
      {category.name}
    </option>
  ));
};

//fusiona los dos filtros
export const multipleFilter = (transactions, selectedCategory, categories) => {
  //manejo de errores, array vacio de transactions (siempre debe retornar algo)
  if (!transactions) {
    return [];
  }

  /* si no se selecciona ninguna categoria se filtra segun el a;o seleccionado y se muestra la suma de cada una de las categorias */
  if (selectedCategory === "select-none") {
    const categorySums = {};

    //se obtienen los nombres de las categorias
    transactions.forEach((element) => {
      const transactionCategory = ObtainNameByCategory(
        element.category_id,
        categories
      );

      if (!categorySums[transactionCategory]) {
        categorySums[transactionCategory] = {
          expense: 0,
        };
      }

      if (element.type === "expense") {
        categorySums[transactionCategory].expense += element.amount;
      }
    });

    return categorySums;
  }

  /* si se selecciono alguna categoria, se filtra por a;o y se muestran todas las transacciones de la categoria correspondiente */
  const filteredByCategory = transactions.filter((element) => {
    const transactionCategory = ObtainNameByCategory(
      element.category_id,
      categories
    );
    return transactionCategory === selectedCategory && element.type === "expense";
  });

  return filteredByCategory;
};

/* transactions viene con el id correspondiente a cada categoria, por lo tanto hay que relacionar estos dos arrays */
export const ObtainNameByCategory = (id, categories) => {
  const category = categories.find((category) => category.id === id);
  return category ? category.name : "others";
};
