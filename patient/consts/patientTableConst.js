export const initListFetch = ['race', 'gender', 'ethnicity']

export const patientCategories = [
  { id: 'personID', value: '환자 ID', tableCol: 'person_id' },
  { id: 'gender', value: '성별', tableCol: 'gender' },
  { id: 'birthDatetime', value: '생년월일', tableCol: 'birth' },
  { id: 'age', value: '나이', tableCol: null },
  { id: 'race', value: '인종', tableCol: 'race' },
  { id: 'ethnicity', value: '민족', tableCol: 'ethnicity' },
  { id: 'isDeath', value: '사망여부', tableCol: 'death' },
]
export const paginationOpts = [
  { text: '10개씩 출력', value: 10 },
  { text: '20개씩 출력', value: 20 },
  { text: '50개씩 출력', value: 50 },
]

export const PAGE_CNT = 10
