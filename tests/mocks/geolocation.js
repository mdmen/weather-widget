export const mockGeolocation = () => {
  const getCurrentPosition = jest.fn();
  global.navigator.geolocation = {
    getCurrentPosition,
    watchPosition: jest.fn(),
    clearWatch: jest.fn(),
  };

  return {
    withSuccessResponse: () => {
      getCurrentPosition.mockImplementation((cbSuccess) =>
        cbSuccess({
          coords: {
            latitude: 10,
            longitude: 10,
          },
        })
      );
    },
    withErrorResponse: () => {
      getCurrentPosition.mockImplementation((_, cbError) =>
        cbError({
          error: {
            code: 1,
            message: 'Permission denied',
          },
        })
      );
    },
  };
};
