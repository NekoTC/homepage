import React from 'react';

export function Loader({ visible }) {
    // 移除了复杂的进度条计算逻辑，因为 UI 上已经不需要了

    return (
        <div id="loader-wrapper" className={visible ? '' : 'loaded-fade-out'}>
            {/* 对应 index.css 中的 .simple-spinner 样式 */}
            <div className="simple-spinner"></div>
        </div>
    );
}