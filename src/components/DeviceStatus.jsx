import { useDeviceStatus } from '../hooks/useDeviceStatus.js';

export function DeviceStatus() {
    const { data } = useDeviceStatus();

    /* ---------- Phone Data ---------- */
    const phone     = data?.devices?.Phone;
    const phoneConn = phone?.connectionStatus === 'disconnect'; // 是否断连
    const phoneOff  = phone?.status === 'offline';              // 是否锁屏/离线
    const phoneBat  = Number(phone?.battery || 0);

    /* ---------- PC Data ---------- */
    const pc        = data?.devices?.PC;
    const pcConn    = pc?.connectionStatus === 'disconnect';
    const pcOff     = pc?.status === 'offline';
    const pcCpu     = Number(pc?.cpuUsage || 0);

    // 格式化时间
    const fmtTime = (t) =>
        t ? new Date(t).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }) : 'Syncing...';

    // MD3 风格微型进度条组件
    const ProgressBar = ({ val }) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
            <div className="progress-track" style={{ flex: 1, height: '6px' }}>
                <div
                    className="progress-fill"
                    style={{
                        width: `${Math.min(val, 100)}%`,
                        // 如果电量低，可以变红，否则用主题绿
                        backgroundColor: val < 20 ? '#ba1a1a' : 'var(--md-sys-color-primary)'
                    }}
                />
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-on-surface-variant)', width: '32px', textAlign: 'right' }}>
                {val}%
            </span>
        </div>
    );

    // 单个设备卡片组件 (提取出来复用)
    const DeviceCard = ({ title, isConn, isOff, battery, cpu, app, updated, type }) => {
        // 判断卡片状态样式
        const cardOpacity = isConn ? 0.6 : 1;
        const statusColor = isConn ? '#747775' : (isOff ? '#747775' : 'var(--md-sys-color-primary)');
        const statusText = isConn ? 'Disconnected' : (isOff ? 'Sleep' : 'Active');

        return (
            <div className="device-unit">
                {/* 标题栏 */}
                <div className="device-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {/* 简单的图标圆点 */}
                        <div style={{
                            width: '10px', height: '10px', borderRadius: '50%',
                            backgroundColor: statusColor,
                            boxShadow: !isConn && !isOff ? '0 0 0 3px rgba(56, 106, 32, 0.2)' : 'none'
                        }} />
                        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 500, color: 'var(--md-sys-color-on-surface)' }}>
                            {title}
                        </h3>
                    </div>
                    <span style={{
                        fontSize: '0.75rem',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        background: isConn ? '#e0e4d6' : 'var(--md-sys-color-secondary-container)',
                        color: 'var(--md-sys-color-on-secondary-container)'
                    }}>
                        {statusText}
                    </span>
                </div>

                {/* 内容详情 */}
                <div style={{ marginTop: '16px', opacity: cardOpacity, display: 'flex', flexDirection: 'column', gap: '12px' }}>

                    {/* 进度条行 (电池或CPU) */}
                    <div className="kv-item">
                        <span className="label">{type === 'phone' ? 'Battery' : 'CPU Load'}</span>
                        <div style={{ flex: 1, marginLeft: '12px' }}>
                            <ProgressBar val={type === 'phone' ? battery : cpu} />
                        </div>
                    </div>

                    {/* App 行 */}
                    <div className="kv-item">
                        <span className="label">Focus App</span>
                        <span className="value text-truncate">
                            {isOff ? 'Screen Off' : (app || 'System Idle')}
                        </span>
                    </div>

                    {/* 时间行 */}
                    <div className="kv-item">
                        <span className="label">Last Sync</span>
                        <span className="value" style={{ fontSize: '0.75rem' }}>{updated}</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="md-card">
            <h2 className="section-title">
                Device Status
                <span>Real-time Monitor</span>
            </h2>

            <div className="device-grid-layout">
                <DeviceCard
                    title="Phone"
                    type="phone"
                    isConn={phoneConn}
                    isOff={phoneOff}
                    battery={phoneBat}
                    app={phone?.software}
                    updated={fmtTime(phone?.receivedAt)}
                />

                <DeviceCard
                    title="Computer"
                    type="pc"
                    isConn={pcConn}
                    isOff={pcOff}
                    cpu={pcCpu}
                    app={pc?.software}
                    updated={fmtTime(pc?.receivedAt)}
                />
            </div>
        </section>
    );
}