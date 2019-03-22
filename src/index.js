import SortTable from '../src/component/sortTable'
import EditTable from '../src/component/editTable'
import BasicForm from '../src/component/basicForm'
import BasicTable from '../src/component/basicTable'
import TreeTable from '../src/component/treeTable'
import Reporte from '../src/component/reporte'

export default (Vue) => {
    Vue.component('SortTable', SortTable)
    Vue.component('EditTable', EditTable)
    Vue.component('Reporte', Reporte)
    Vue.component('BasicForm', BasicForm)
    Vue.component('BasicTable', BasicTable)
    Vue.component('TreeTable', TreeTable)
  }