// src/components/milestone4/M4LogicFlowSection.jsx
// Flow "Logic xây dựng lực lượng" (6 bước) theo dòng tư duy Nhân – Quả
// Kế thừa layout từ LogicFlowSection của Cột mốc 01 (spine dọc bảo tàng)

import { memo } from 'react';

function M4LogicFlowSection({ logicData }) {
  return (
    <section
      id="logic-xay-dung"
      className="m1-section"
      aria-labelledby="heading-logic-xay-dung"
    >
      <div>
        <span className="m1-sec-eyebrow">DÒNG TƯ DUY CHIẾN LƯỢC</span>
        <h2 id="heading-logic-xay-dung" className="m1-sec-title">
          {logicData.tieuDe}
        </h2>
        <p className="m1-sec-p">{logicData.phuDe}</p>
      </div>

      <div className="logic-flow-spine-wrap">
        {/* Đường nối dọc dần theo dòng thời gian */}
        <div className="logic-spine-line" aria-hidden="true" />

        <div className="logic-steps-stack">
          {logicData.cacBuoc.map((b) => (
            <div
              key={b.buoc}
              className="logic-step-row"
              tabIndex={0}
              role="region"
              aria-label={`Bước ${b.buoc}: ${b.tenBuoc}`}
            >
              {/* Nút chỉ số thứ tự */}
              <div className="logic-node-indicator" aria-hidden="true">
                0{b.buoc}
              </div>

              {/* Khối nội dung nguyên nhân -> kết quả */}
              <div className="logic-node-content">
                <div className="logic-node-top">
                  <span className="logic-node-tag">✦ {b.tag}</span>
                  <h3 className="logic-node-title">{b.tenBuoc}</h3>
                </div>

                <div className="logic-cause-effect-grid">
                  <div className="cause-box">
                    <span className="logic-sub-lbl">Bối cảnh & Tiền đề:</span>
                    <p className="logic-desc-p">{b.nguyenNhan}</p>
                  </div>

                  <div className="effect-box">
                    <span className="logic-sub-lbl">Chuyển biến & Ý nghĩa:</span>
                    <p className="logic-desc-p">{b.ketQua}</p>
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

export default memo(M4LogicFlowSection);
