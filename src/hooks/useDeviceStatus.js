import { useEffect, useState } from 'react'

export function useDeviceStatus(pollInterval = 10000) {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchOnce = () =>
            fetch('https://track.nekotc.cn/api/status')
                .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
                .then((j) => setData(j))
                .catch(() => setData({ connectionStatus: 'offline', devices: {} }))

        fetchOnce()
        const id = setInterval(fetchOnce, pollInterval)
        return () => clearInterval(id)
    }, [pollInterval])

    return { data }
}