import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import Table from '@common/components/Table'
import PatientVisitContainer from '@patient/containers/PatientVisitContainer'
import { pVisitCategory } from '@patient/consts/patientDetailConst'

const PatientDetailpageContainer = ({ id }) => {
  const { patientCond, patientDrug, patientVisit } = useSelector(
    (state) => state.api,
  )
  const dispatch = useDispatch()
  const [visitID, setVisitID] = useState()

  useEffect(() => {
    detailInfoFetch()
  }, [])

  const detailInfoFetch = () => {
    if (id) {
      dispatch({ type: 'FETCH_DATA', fetchType: 'patientCond', id })
      dispatch({ type: 'FETCH_DATA', fetchType: 'patientDrug', id })
      dispatch({ type: 'FETCH_DATA', fetchType: 'patientVisit', id })
    }
  }

  return (
    <>
      <h1>{id} 환자 방문 기록</h1>
      {patientVisit?.visitList && (
        <Table categories={pVisitCategory} dataList={patientVisit.visitList}>
          {visitID && (
            <PatientVisitContainer
              conditionList={patientCond.conditonList}
              drugList={patientDrug.drugList}
              visitID={visitID}
            />
          )}
        </Table>
      )}
    </>
  )
}

PatientDetailpageContainer.propTypes = {
  id: PropTypes.string,
}
PatientDetailpageContainer.defaultProps = {
  id: '',
}

export default PatientDetailpageContainer
