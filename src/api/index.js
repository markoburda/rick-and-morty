export const getCharacters = async (params) => {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/character?${searchParams.toString()}`
  );

  return response.json();
};

export const getCharacter = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/character/${id}`
  );
  return response.json();
};

export const getEpisodes = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/episode`);
  return response.json();
};
