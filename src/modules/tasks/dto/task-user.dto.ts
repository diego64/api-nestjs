export type TaskUserRequestDTO = {
  userId: string;
  title: string;
  description: string;
  startAt: Date;
  endAt: Date;
  priority: 'BAIXA' | 'MEDIA' | 'ALTA';
  status: 'PENDENTER' | 'ANDAMENTO' | 'CONCLUIDA';
};

export type TaskUserResponseDTO = {
  id: string;
};
