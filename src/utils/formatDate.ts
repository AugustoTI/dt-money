export const formantDate = (data: string) => {
  return new Date(data).toLocaleString('pt-BR', {
    dateStyle: 'short',
    timeZone: 'UTC',
  });
};
