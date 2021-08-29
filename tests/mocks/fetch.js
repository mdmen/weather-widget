export const mockFetch = () => {
  const fetchFunc = jest.fn();
  global.fetch = fetchFunc;

  return {
    withSuccessResponse: (response) => {
      fetchFunc.mockResolvedValue({
        json: () => Promise.resolve(response),
      });
    },
    withErrorResponse: (response = new Error('Fetch error')) => {
      fetchFunc.mockRejectedValue(response);
    },
  };
};
