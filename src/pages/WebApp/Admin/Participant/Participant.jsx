import { useEffect, useState, useRef, useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import { COLUMNS } from './tableColumns'
import { useSelector } from 'react-redux'
import { getQueryDb } from '../../../../firebase'
import { Next, Previous, Refresh } from './svg'
import './Participant.css'
import SortIcon from './SortIcon'
import NameSearch from './NameSearch'

const Participant = () => {
  const [participantList, setParticipantList] = useState([])
  const initialReload = useRef(false)
  const [reload, setReload] = useState(false)
  const tasks = useSelector(state => state.task.data.map(task => task.lessonId))

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => participantList, [participantList])


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    gotoPage,
    pageCount,
    setPageSize
  } = useTable({ columns, data, initialState: { pageSize: 5 } }, useGlobalFilter, useSortBy, usePagination)

  const { globalFilter, pageSize, pageIndex } = state

  const fetchParticipantList = () => {
    getQueryDb('Users', { field: 'admin', eq: '==', value: false }).then(snapshot => {
      setParticipantList(snapshot.docs.map(rawDoc => {
        const doc = rawDoc.data()
        return {
          participant: {
            name: `${doc.LastName}, ${doc.FirstName}`,
            id: rawDoc.id
          },
          task1: doc.tasks.some(task => task.lessonId === tasks[0]) ? 'Completed' : 'Incomplete',
          task2: doc.tasks.some(task => task.lessonId === tasks[1]) ? 'Completed' : 'Incomplete',
          task3: doc.tasks.some(task => task.lessonId === tasks[2]) ? 'Completed' : 'Incomplete',
        }
      }))
      initialReload.current = true
      setReload(false)
    })
  }

  useEffect(() => { if ((!initialReload.current && tasks) || reload) fetchParticipantList() }, [tasks, reload])


  return (
    <div className='participant-cont'>
      <div className="table-cont">
        <div className="table-cont-header">
          <h1 className="cont-header">Participants</h1>
          <div className="refresh-cont">
            <Refresh onClick={() => setReload(true)} className='refresh-icon' />
          </div>
        </div>
        <div className="table-content">
          <div className="table-actions">
            <div className="page-count-cont">
              Show: 
              <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} className="page-count">
                {[5, 10, 15].map(select => (
                  <option value={select}>{select}</option>
                ))}
              </select>
            </div>
            <NameSearch filter={globalFilter} setFilter={setGlobalFilter} />
          </div>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, indx) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      <div className="table-data-cont">
                        {column.render('Header')}
                        <span>
                          <SortIcon key={indx}
                            sort={column.isSorted ? (column.isSortedDesc ? 'desc' : 'asc') : ''} />
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map(row => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className="page-pagination-cont">
            {canPreviousPage && (
              <a className="toggle-page previous-page" onClick={() => previousPage()}><Previous /></a>
            )}

            {[...Array(pageCount).keys()].map(pageIndx => (
              <a className={`page-link ${pageIndex === pageIndx ? 'active-page' : ''}`} 
                      onClick={() => gotoPage(pageIndx)}>
                        {pageIndx + 1}
              </a>
            ))}

            {canNextPage && (
              <a className="toggle-page next-page" onClick={() => nextPage()}><Next /></a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Participant