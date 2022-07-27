import {useState, useEffect} from 'react';
import {css} from '@emotion/react';
import {Box} from '../components/atoms';
import { PlusIcon } from '../assets/icon';
import ColumnItem from '../components/columns/ColumnItem';

const Column = () => {
  const MAX_COLUMN_COUNT = 3;
  const [columns, setColumns] = useState([]);

  const addColumn = () => {
    if (columns.length < MAX_COLUMN_COUNT) {
      const id = Math.random().toString(32).substring(2);
      const column = {columnId: id, query: ''};

      setColumns([...columns, column]);
    }
  };

  const removeColumn = columnId => {
    if (columns.length) {
      const removed = columns.filter(col => col.columnId !== columnId);

      setColumns(removed);
    }
  };

  const handleSearch = (id, query) => {
    const newColmns = [...columns];
    const index = newColmns.findIndex(val => val.columnId === id);
    newColmns[index].query = query;

    setColumns(newColmns);
  };

  return (
    <Box css={contaienr}>
      <Box css={columnWrap}>
        {columns.map((val, index) => (
          <ColumnItem
            key={index}
            id={val.columnId}
            query={val.query}
            onSearch={handleSearch}
            onIconClick={removeColumn}
          />
        ))}
      </Box>
      {columns.length < MAX_COLUMN_COUNT && (
        <img src={PlusIcon} css={plusIcon} onClick={addColumn} alt="" />
      )}
    </Box>
  );
};

export default Column;

const contaienr = css`
  position: relative;
  align-items: flex-start;
  padding: 120px 0 40px;
`;

const columnWrap = css`
  column-gap: 32px;
`;

const plusIcon = css`
  position: absolute;
  width: 40px;
  margin-top: 16px;
  right: -80px;
`;