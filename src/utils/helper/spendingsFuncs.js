import {DropdownItem} from "@nextui-org/react";

/* crea los años en funcion del año actual  -10 años */
export const CreateYears = (setSelect) => {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 10;
  const endYear = currentYear;

  const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => (
    <DropdownItem key={startYear + index} value={startYear + index} onClick={(e)=> setSelect(e.target.value)}>
      {startYear + index}
    </DropdownItem>
  ));

  return years;
};
/* crea las categorias en funcion de las guardadas en la base de datos y las que se crean desde el form */
export const CreateCategories = (categories) => {
  return categories.map((category) => (
    <option key={category.name} value={category.name}>
      {category.name}
    </option>
  ));
};

//filtra las transacciones solo si estan en la fecha seleccionada
export const filterTransactions = (selectedYear, transactions) => {
  if (selectedYear === "select-none" || !transactions) {
    return transactions;
  }

  const filteredTransactions = transactions.filter((element) => {
    const transactionYear = new Date(element.createdAt).getFullYear();
    return transactionYear === parseInt(selectedYear);
  });

  return filteredTransactions;
};

//fusiona los dos filtros
export const multipleFilter = (
  transactions,
  selectedCategory,
  selectedYear,
  categories
) => {
  const filteredByYear = filterTransactions(selectedYear, transactions);

  //manejo de errores, array vacio de filteredbyYear (siempre debe retornar algo)
  if (!filteredByYear) {
    return [];
  }

  /* si no se selecciona ninguna categoria se filtra segun el a;o seleccionado y se muestra la suma de cada una de las categorias */
  if (selectedCategory === "select-none") {
    const categorySums = {};

    filteredByYear.forEach((element) => {
      const transactionCategory = ObtainNameByCategory(
        element.category_id,
        categories
      );

      if (!categorySums[transactionCategory]) {
        categorySums[transactionCategory] = {
          income: 0,
          expense: 0,
          total: 0,
        };
      }

      if (element.type === "income") {
        categorySums[transactionCategory].income += element.amount;
      } else if (element.type === "expense") {
        categorySums[transactionCategory].expense += element.amount;
      }
      categorySums[transactionCategory].total += element.amount;
    });

    return categorySums;
  }

  /* si se selecciono alguna categoria, se filtra por a;o y se muestran todas las transacciones de la categoria correspondiente */
  const filteredByCategory = filteredByYear.filter((element) => {
    const transactionCategory = ObtainNameByCategory(
      element.category_id,
      categories
    );
    return transactionCategory === selectedCategory;
  });

  return filteredByCategory;
};

/* transactions viene con el id correspondiente a cada categoria, por lo tanto hay que relacionar estos dos arrays */
export const ObtainNameByCategory = (id, categories) => {
  const category = categories.find((category) => category.id === id);
  return category ? category.name : "Unknown Category";
};
