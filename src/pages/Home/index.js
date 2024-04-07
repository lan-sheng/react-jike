import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

const Home = () => {
  const chartRef = useRef(null)
  useEffect(() => {
    // const chartDom = document.getElementById('main')
    const chartDom = chartRef.current
    const myChart = echarts.init(chartDom)
    const option = {
      xAxis: {
        type: 'category',
        data: ['Vue', 'React', 'Angular'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [10,20,30],
          type: 'bar',
        },
      ],
    }
    option && myChart.setOption(option)
  }, [])
  return (
    <div>
      {/* <div id="main" style={{ with: '200px', height: '200px' }}></div> */}
      <div ref={chartRef} style={{ with: '200px', height: '200px' }}></div>
    </div>
  )
}
export default Home
