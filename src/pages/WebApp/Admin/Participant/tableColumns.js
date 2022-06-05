import ParticipantCellLink from "./ParticipantCellLink";

export const COLUMNS = [
    {
        Header: 'Participants',
        accessor: (row) => row.participant.name,
        Cell: ({ row }) => <ParticipantCellLink participantId={row.original.participant.id} participantName={row.original.participant.name} />
    },
    {
        Header: 'Task 1',
        accessor: 'task1'
    },
    {
        Header: 'Task 2',
        accessor: 'task2'
    },
    {
        Header: 'Task 3',
        accessor: 'task3'
    },
]