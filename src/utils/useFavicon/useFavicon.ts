import { useEffect } from 'react'
import icon from '../../assets/logo.svg'

export const useFavicon = () => {
  useEffect(() => {
    const favicon: any = document.getElementById('favicon')
    favicon && (favicon.href = icon)
  }, [])
}
