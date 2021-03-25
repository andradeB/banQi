import React from 'react';
import {Transaction} from 'models/Transaction';
import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import {TransactionListItem} from '../TransactionListItem';
import {Container} from 'components/Container';
import {BodyBold, Title} from '../Typography';
import {TransactionListHeader} from '../TransactionListHeader';
import {useBottomSheet} from 'hooks';

type CustomProps = 'renderItem' | 'ListFooterComponent' | 'ListHeaderComponent';

type TransactionList = Omit<FlatListProps<Transaction>, CustomProps> & {
  limit?: number;
  headerComponent: () => React.ReactNode;
};

export const TransactionList: React.FC<TransactionList> = ({
  limit = 3,
  data,
  headerComponent,
  ...props
}) => {
  const {value, show} = useBottomSheet('datePicker');

  const [showAll, setShowAll] = React.useState(false);

  const computedData = React.useMemo(
    () => (showAll ? data : data?.slice(0, limit)),
    [limit, showAll, data],
  );

  const getFooterLabelText = () => (showAll ? 'Ver menos' : 'Ver mais');

  const renderItem: ListRenderItem<Transaction> = ({item}) => (
    <TransactionListItem
      item={item}
      onPress={() => {
        show();
      }}
    />
  );

  const renderFooter = () => (
    <TouchableOpacity onPress={() => setShowAll(!showAll)}>
      <Container height={44} alignItems={'flex-end'} px={2}>
        <BodyBold color={'blue'}>{getFooterLabelText()}</BodyBold>
      </Container>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <TransactionListHeader>
      {headerComponent && headerComponent()}
    </TransactionListHeader>
  );

  return (
    <>
      <FlatList
        {...props}
        data={computedData}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        ListHeaderComponent={renderHeader}
      />
    </>
  );
};
