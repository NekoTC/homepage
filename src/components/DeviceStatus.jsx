import { useDeviceStatus } from '../hooks/useDeviceStatus.js';

export function DeviceStatus() {
    const { data } = useDeviceStatus();

    const phone      = data?.devices?.Phone;
    const connOff    = phone?.connectionStatus === 'offline';   // 遮罩条件
    const statusOff  = phone?.status === 'offline';             // 红字条件

    const isOnline   = !connOff;   // 仅用于指示灯颜色

    return (
        <section className="cyber-card animate-in device-card">
            <h2 className="section-title">DEVICE_STATUS <span>// MONITORING</span></h2>

            <div className={`device-status ${isOnline ? 'online' : 'offline'}`}>
                <div className="device-name">
                    <span className={`status-indicator ${isOnline ? 'online' : 'offline'}`} />
                    PHONE_TERMINAL
                </div>

                <div className="app-info">
                    {statusOff ? (
                        <span className="screen-off">SCREEN OFF</span>
                    ) : (
                        <>Running: {phone?.software || 'Unknown App'}</>
                    )}
                </div>

                <div className="update-time">
                    {data?.receivedAt
                        ? `Updated: ${new Date(data.receivedAt).toLocaleTimeString('zh-CN')}`
                        : 'Syncing...'}
                </div>

                {connOff && (
                    <div className="offline-overlay">DISCONNECT</div>
                )}
            </div>
        </section>
    );
}