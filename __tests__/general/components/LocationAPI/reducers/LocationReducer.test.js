import reducer, {initialState} from 'app/general/components/LocationAPI/reducers/LocationReducer';
import LocationApiActionTypes from 'app/general/components/LocationAPI/actions/LocationApiActionTypes';


describe('Location reducer', () => {

  test('should return initial state', () => {
    // Given
    const action = {
      type: 'ANY_ACTION',
    };

    // When
    const actualStore = reducer(undefined, action);

    // Then
    expect(actualStore)
      .toEqual(initialState);
  });

  test('should handle action LOCATION_API_LOAD_SUCCESS with no data', () => {
    // Given
    const action = {
      type: LocationApiActionTypes.LOCATION_API_LOAD_SUCCESS,
    };

    // When
    const actualStore = reducer(initialState, action);

    // Then
    expect(actualStore)
      .toEqual(initialState);
  });

  test('should handle action LOCATION_API_LOAD_SUCCESS with empty data', () => {
    // Given
    const action = {
      type: LocationApiActionTypes.LOCATION_API_LOAD_SUCCESS,
      payload: {
        items: [],
      },
    };

    // When
    const actualStore = reducer(initialState, action);

    // Then
    expect(actualStore)
      .toEqual(initialState);
  });

  test('should handle action LOCATION_API_LOAD_SUCCESS with new data', () => {
    // Given
    const action = {
      type: LocationApiActionTypes.LOCATION_API_LOAD_SUCCESS,
      payload: {
        items: [{
          test: 'test',
        }],
      },
    };
    const INITIAL_STATE = {
      entities: [],
    };

    // When
    const actualStore = reducer(INITIAL_STATE, action);

    // Then
    expect(actualStore.entities.length)
      .toEqual(1);
    expect(actualStore.entities[0].test)
      .toEqual('test');
  });

  test('should handle action LOCATION_API_LOAD_SUCCESS with new data and set note field', () => {
    // Given
    const action = {
      type: LocationApiActionTypes.LOCATION_API_LOAD_SUCCESS,
      payload: {
        items: [{
          test: 'test',
        }],
      },
    };
    const INITIAL_STATE = {
      entities: [],
    };

    // When
    const actualStore = reducer(INITIAL_STATE, action);

    // Then
    expect(actualStore.entities.length)
      .toEqual(1);
    expect(actualStore.entities[0].note)
      .toEqual('');
  });

  test('should handle action LOCATION_API_LOAD_SUCCESS with data and reset Loading state', () => {
    // Given
    const action = {
      type: LocationApiActionTypes.LOCATION_API_LOAD_SUCCESS,
      payload: {
        items: [],
      },
    };

    // When
    const actualStore = reducer(initialState, action);

    // Then
    expect(actualStore.isLoading)
      .toEqual(false);
  });

  test('should handle action LOCATION_API_UPDATE_POINT with no data', () => {
    // Given
    const action = {
      type: LocationApiActionTypes.LOCATION_API_UPDATE_POINT,
    };

    // When
    const actualStore = reducer(initialState, action);

    // Then
    expect(actualStore)
      .toEqual(initialState);
  });

  test('should handle action LOCATION_API_UPDATE_POINT with not stored Item', () => {
    // Given
    const action = {
      type: LocationApiActionTypes.LOCATION_API_UPDATE_POINT,
      payload: {
        name: 'test',
      },
    };
    // When
    const actualStore = reducer(initialState, action);

    // Then
    expect(actualStore)
      .toEqual(initialState);
  });

  test('should handle action LOCATION_API_UPDATE_POINT with stored Item and update', () => {
    // Given
    const action = {
      type: LocationApiActionTypes.LOCATION_API_UPDATE_POINT,
      payload: {
        name: 'test',
        newField: 'newField'
      },
    };
    const INITIAL_STATE = {
      entities: [{
        name: 'test',
      }],
    };

    // When
    const actualStore = reducer(INITIAL_STATE, action);

    // Then
    expect(actualStore.entities.length)
      .toEqual(1);
    expect(actualStore.entities[0].newField)
      .toEqual('newField');
  });

  test('should handle action LOCATION_API_ADD_POINT with no data', () => {
    // Given
    const action = {
      type: LocationApiActionTypes.LOCATION_API_ADD_POINT,
    };

    // When
    const actualStore = reducer(initialState, action);

    // Then
    expect(actualStore)
      .toEqual(initialState);
  });

  test('should handle action LOCATION_API_ADD_POINT with new data', () => {
    // Given
    const action = {
      type: LocationApiActionTypes.LOCATION_API_ADD_POINT,
      payload: {
        name: 'test'
      }
    };
    const INITIAL_STATE = {
      entities: [],
    };

    // When
    const actualStore = reducer(INITIAL_STATE, action);

    // Then
    expect(actualStore.entities.length)
      .toEqual(1);
    expect(actualStore.entities[0].name)
      .toEqual('test');
  });


});