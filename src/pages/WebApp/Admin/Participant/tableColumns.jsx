import ParticipantCellLink from "./ParticipantCellLink";

const TaskStatus = ({ status }) => {
    return (
        <span className={`task-status ${status === 'Completed' ? 'task-complete' : 'task-incomplete'}`}>{status}</span>
    )
}

export const COLUMNS = [
    {
        Header: 'Participants',
        accessor: (row) => row.participant.name,
        Cell: ({ row }) => <ParticipantCellLink participantId={row.original.participant.id} participantName={row.original.participant.name} />
    },
    {
        Header: 'Task 1',
        accessor: 'task1',
        Cell: (data) => {
            return <TaskStatus status={data.value} />
        }
    },
    {
        Header: 'Task 2',
        accessor: 'task2',
        Cell: (data) => {
            return <TaskStatus status={data.value} />
        }
    },
    {
        Header: 'Task 3',
        accessor: 'task3',
        Cell: (data) => {
            return <TaskStatus status={data.value} />
        }
    },
]