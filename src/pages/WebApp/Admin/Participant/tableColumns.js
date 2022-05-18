import ParticipantCellLink from "./ParticipantCellLink";

export const COLUMNS = [
    {
        Header: 'Participants',
        accessor: 'participant',
        Cell: ({ value }) => <ParticipantCellLink participantId={value.id} participantName={value.name} />
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