import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import { clearFilters, filterByType } from '@/redux/features/monthTransactionsSlice';
import { useDispatch } from 'react-redux';
import { HiChevronDown } from "react-icons/hi2";

const PermanentFilterEs = () => {
  const dispatch = useDispatch();

  const handleOptions = (value) => {
    if (value === 'default') {
      dispatch(clearFilters());
    } else {
      dispatch(filterByType(value));
    }
  };

  return (
    <Dropdown className=''>
      <DropdownTrigger className='py-2 dark:border dark:border-white'>
        <Button variant="bordered">Tipos <span className=''><HiChevronDown/></span></Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Filter Transactions">
        <DropdownItem key="all" onClick={() => handleOptions('default')}>
          Todas las Transacciones
        </DropdownItem>
        <DropdownItem key="expense" onClick={() => handleOptions('expense')}>
          Gastos
        </DropdownItem>
        <DropdownItem key="income" onClick={() => handleOptions('income')}>
          Ingresos
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default PermanentFilterEs;