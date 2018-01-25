import actions from 'app/general/components/LocationAPI/actions/LocationApiAction';
import LocationApiActionTypes from 'app/general/components/LocationAPI/actions/LocationApiActionTypes';

describe('Location actions', () => {
  it('locationAddPoint', () => {
    // given
    const field1 = 'field1';
    const field2 = 'field2';
    const field3 = 'field3';

    // when
    const expected = actions.locationAddPoint(field1, field2, field3);

    // then
    expect(expected.type).toEqual(LocationApiActionTypes.LOCATION_API_ADD_POINT);
    expect(expected.payload).toEqual({
      lng: field3,
      lat: field2,
      name: field1,
      note: ''
    });

  });
});
