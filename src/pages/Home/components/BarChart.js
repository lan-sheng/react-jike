// 柱状图组件
import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

const BarChart = ({ title }) => {
  const chartRef = useRef(null)
  useEffect(() => {
    // const chartDom = document.getElementById('main')
    const chartDom = chartRef.current
    const myChart = echarts.init(chartDom)
    const option = {
      title: {
        text: title,
      },
      xAxis: {
        type: 'category',
        data: ['Vue', 'React', 'Angular'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [10, 20, 30],
          type: 'bar',
        },
      ],
    }
    option && myChart.setOption(option)
  }, [])
  // return <div id="main" style={{ with: '200px', height: '200px' }}></div>
  return <div ref={chartRef} style={{ with: '200px', height: '200px' }}></div>
}
export default BarChart
