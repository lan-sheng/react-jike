import { getChannelApi } from '@/apis/article'
import { useEffect, useState } from 'react'
const useChannel = () => {
  const [channelList, setChannelList] = useState([])
  useEffect(() => {
    // 获取频道列表
    const getChannel = async () => {
      const { data } = await getChannelApi()
      setChannelList(data.data.channels)
    }
    getChannel()
  }, [])
  return { channelList }
}
export { useChannel }
