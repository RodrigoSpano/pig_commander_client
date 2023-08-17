import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import { clearFilters, filterByType } from '@/redux/features/monthTransactionsSlice';
import { useDispatch } from 'react-redux';
import { HiChevronDown } from "react-icons/hi2";

const PermanentFilter = () => {
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
      <DropdownTrigger className='py-2'>
        <Button variant="bordered">Types <span className=''><HiChevronDown/></span></Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Filter Transactions">
        <DropdownItem key="all" onClick={() => handleOptions('default')}>
          All Transactions
        </DropdownItem>
        <DropdownItem key="expense" onClick={() => handleOptions('expense')}>
          Expenses
        </DropdownItem>
        <DropdownItem key="income" onClick={() => handleOptions('income')}>
          Incomes
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default PermanentFilter;
