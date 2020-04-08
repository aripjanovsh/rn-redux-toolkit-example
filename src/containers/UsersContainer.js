import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Dropdown} from 'react-native-material-dropdown';
import {UsersListContainer} from '../component/UsersList';
import {fetchUsers, selectAllUsers} from '../redux/UsersSlice';
import {MainLayout} from '../component/layout/MainLayout';
import {Loading} from '../component/ui/Loading';
import {ErrorView} from '../component/ui/ErrorView';

export const UsersContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const {loading, error, filters} = useSelector(state => state.users);
  const [params, setParams] = useState({});
  const isLoading = loading === 'pending';

  const loadUsers = useCallback(() => {
    dispatch(fetchUsers(params));
  }, [dispatch, fetchUsers, params]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers, params]);

  const onChangeFilter = useCallback(
    name => value => {
      setParams(prev => ({...prev, [name]: value}));
    },
    [setParams],
  );

  return (
    <MainLayout title="Users">
      {isLoading && <Loading />}
      {error && (
        <ErrorView
          title="Ошибка"
          message={error.message}
          buttonText="Перезагрузить"
          onButtonPress={loadUsers}
        />
      )}
      {!isLoading && !error && (
        <UsersListContainer
          ListHeaderComponent={() => (
            <View style={styles.filters}>
              <Dropdown
                {...filters.teamlead}
                value={params.teamlead}
                onChangeText={onChangeFilter('teamlead')}
                containerStyle={styles.filtersItem}
              />
              <Dropdown
                {...filters.sort}
                value={params.sort}
                onChangeText={onChangeFilter('sort')}
                containerStyle={styles.filtersItem}
              />
            </View>
          )}
          hits={users}
        />
      )}
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  filters: {
    display: 'flex',
    flexDirection: 'row',
  },
  filtersItem: {
    flex: 1,
    paddingHorizontal: 8,
  },
});
