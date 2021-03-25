import React from 'react';
import {ListItemProps, ListItem} from 'components/ListItem';
import {Transaction} from 'models/Transaction';
import {TouchableOpacityProps} from 'react-native';
import {useAppHooks} from 'hooks';

type TransactionListItemProps = TouchableOpacityProps & {
  item: Transaction;
};

export const TransactionListItem: React.FC<TransactionListItemProps> = ({
  item,
  ...props
}) => {
  const format = useAppHooks('format');

  const listItemData = React.useMemo<ListItemProps>(
    () => ({
      title: item.description,
      value: item.amount.toString(10),
      icon: 'arrow_down',
      subtitle: `Recebido em ${format.date(item.date)}`,
    }),
    [item, format],
  );

  return <ListItem {...listItemData} {...props} />;
};
