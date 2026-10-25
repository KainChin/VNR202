// src/components/milestone2/M2LogicFlowSection.jsx
// Section "Logic chiến lược" (6 bước liên hoàn) – Không dùng card, thể hiện dòng tư duy nhân - quả

import { memo } from 'react';

function M2LogicFlowSection({ logicData }) {
  if (!logicData) return null;

  return (
    <section id="logic-chien-luoc" className="m1-section" aria-labelledby="heading-logic-m2">
      <div>
        <span className="m1-sec-eyebrow">DÒNG TƯ DUY CHIẾN LƯỢC 1939 – 1945</span>
        <h2 id="heading-logic-m2" className="m1-sec-title">
          {logicData.tieuDe}
        </h2>
        <p className="m1-sec-p">{logicData.phuDe}</p>
      </div>

      <div className="logic-flow-spine-wrap">
        {/* Đường nối trung tâm */}
        <div className="logic-spine-line" aria-hidden="true" />

        <div className="logic-steps-stack">
          {logicData.cacBuoc.map((step) => (
            <div
              key={step.buoc}
              className="logic-step-row"
              tabIndex={0}
              aria-label={`Bước ${step.buoc}: ${step.tenBuoc}`}
            >
              {/* Vòng tròn số thứ tự */}
              <div className="logic-node-indicator">
                <span>0{step.buoc}</span>
              </div>

              {/* Khối nội dung bước */}
              <div className="logic-node-content">
                <div className="logic-node-top">
                  <span className="logic-node-tag">{step.tag}</span>
                  <h3 className="logic-node-title">{step.tenBuoc}</h3>
                </div>

                <div className="logic-cause-effect-grid">
                  <div className="cause-box">
                    <span className="logic-sub-lbl">Tiền đề / Hành động:</span>
                    <p className="logic-desc-p">{step.nguyenNhan}</p>
                  </div>

                  <div className="effect-box">
                    <span className="logic-sub-lbl">Hệ quả / Bước chuyển:</span>
                    <p className="logic-desc-p">{step.ketQua}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(M2LogicFlowSection);
