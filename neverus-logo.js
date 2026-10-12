// NEVERUS LOGO & KINTETIC ENGINE

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.NeverusLogo = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  const PATHS = [
    "M262.12,986.54L307.55,986.54L316.44,990.31L317.65,1012.68L333.42,1068.74C331.17,1091.47 337.28,1106.47 351.75,1113.75L350.13,1080.06L365.9,1001.49C367.34,995.74 370.66,990.75 375.87,986.53L414.41,987.07L418.18,998.26C409.29,1019.55 401.47,1043.23 394.73,1069.28L395.27,1080.6L389.34,1106.21L375.73,1177.23L326,1181L306.86,1124.94L296.21,1061.33C290.73,1064.83 285.2,1069.82 279.63,1076.29L279.5,1117.39L266.56,1184.77L257.67,1181L215.62,1181L217.37,1173.59L214.14,1173.59L222.9,1151.08L229.1,1124.94L241.5,1109.85L234.76,1102.44L241.23,1087.48C247.16,1082.36 247.52,1078.63 242.31,1076.29L243.39,1065.1L255.65,1027.64L262.12,986.54ZM269.01,1080.06L270.76,1072.51L267.53,1072.51L269.01,1080.06ZM279.38,1050.15C280.1,1054.64 282.79,1057.11 287.47,1057.56L279.38,1050.15ZM283.83,1031.41C282.84,1036.44 284.14,1040.17 287.74,1042.6C288.19,1037.66 286.89,1033.93 283.83,1031.41ZM325.47,952.85C327.9,953.3 329.47,955.81 330.19,960.4L325.47,952.85ZM344.74,1143.67C345.01,1140.35 343.44,1137.83 340.02,1136.12C340.2,1138.64 341.77,1141.15 344.74,1143.67ZM383.56,1091.79C379.16,1079.3 371.3,1070.05 359.98,1064.03L383.56,1091.79Z",
    "M468.38,998.4L521.88,1002.44L537.51,998.4L550.04,1006.49L546.4,1040.59L496.13,1036.55C489.03,1038.53 480.68,1039.88 471.06,1040.59L464.32,1037.63L461.76,1079.81C470.65,1086.46 485.43,1090.05 506.1,1090.59L531.3,1086.68L540.6,1090.59L541.27,1120.78L494.1,1128.87L484.67,1124.83L462.3,1125.91L463.78,1178.47L486.15,1173.35L495.58,1177.39L517.55,1173.35L539.52,1173.35L545.85,1177.39L550.03,1210.95L540.6,1214.99L512.43,1210.95L503,1214.99L477.8,1210.95L430.77,1214.99L424.44,1154.88L427.54,1114.72L427.54,1026.45L424.44,1010.41L427.54,1002.46L468.37,1002.46L468.37,998.42L468.38,998.4ZM550.04,1088.15L553.27,1115.51L545.18,1112.14L550.03,1088.15L550.04,1088.15Z",
    "M566.38,1000.69L589.29,1006.08L599.4,1030.47L625.81,1122.92C629.67,1130.92 635.15,1138.64 642.25,1146.1L671.9,1043.68C676.84,1029.76 683.44,1015.43 691.71,1000.69L711.52,1004.06L655.46,1162.54L645.49,1179.12C637.58,1177.5 629.9,1174.18 622.45,1169.15L576.23,1037.08C571.29,1026.66 568.01,1014.53 566.39,1000.69L566.38,1000.69Z",
    "M775.49,998.4L828.99,1002.44L844.62,998.4L857.15,1006.49L853.51,1040.59L803.24,1036.55C796.14,1038.53 787.79,1039.88 778.17,1040.59L771.43,1037.63L768.87,1079.81C777.76,1086.46 792.54,1090.05 813.21,1090.59L838.41,1086.68L847.71,1090.59L848.38,1120.78L801.21,1128.87L791.78,1124.83L769.41,1125.91L770.89,1178.47L793.26,1173.35L802.69,1177.39L824.66,1173.35L846.63,1173.35L852.96,1177.39L857.14,1210.95L847.71,1214.99L819.54,1210.95L810.11,1214.99L784.91,1210.95L737.88,1214.99L731.55,1154.88L734.65,1114.72L734.65,1026.45L731.55,1010.41L734.65,1002.46L775.48,1002.46L775.48,998.42L775.49,998.4ZM857.16,1088.15L860.39,1115.51L852.3,1112.14L857.15,1088.15L857.16,1088.15Z",
    "M933.28,983.03L1003.36,986.26C1030.85,989.59 1045.63,997.22 1047.7,1009.17C1054.71,1022.11 1053.85,1040.75 1045.14,1065.1C1038.13,1082.62 1026.81,1095.02 1011.18,1102.3C1026.09,1116.77 1031.08,1138.15 1026.14,1166.45L1022.5,1223.73C1016.21,1226.96 1007.63,1227.28 996.76,1224.67C984.81,1225.03 980.5,1214.79 983.82,1193.94L988,1165.1C986.29,1128.71 980.5,1111.64 970.62,1113.89L941.65,1113.49C936.17,1117.08 932.22,1124.41 929.79,1135.46C928.44,1152.62 924.85,1171.44 919.01,1191.93L913.22,1219.69L893.01,1219.82L875.22,1218.74L882.5,1187.47L920.37,986.8L933.31,983.03L933.28,983.03ZM951.88,1014.97L937.46,1088.42L986.92,1086.4C1014.59,1071.94 1021.96,1050.15 1009.02,1021.04C997.52,1015.11 978.47,1013.09 951.88,1014.98L951.88,1014.97Z",
    "M1087.52,985.19L1108.54,989.23L1117.16,985.19L1125.25,985.19L1126.19,997.45L1117.3,1042.33L1117.7,1058.77L1110.42,1091.38L1111.9,1099.6L1108.53,1124.13C1112.66,1140.84 1121.2,1150.37 1134.14,1152.7C1146.27,1142.64 1154.85,1126.29 1159.88,1103.65L1164.73,1050.55L1169.04,1038.29L1173.22,989.24L1187.37,985.2L1194.78,989.24L1217.02,985.2L1216.21,1009.73C1212.62,1023.93 1209.43,1040.28 1206.64,1058.78L1195.86,1136.4L1191.41,1148.66L1160.82,1193.54L1113.79,1201.63C1101.3,1196.96 1088.77,1190.17 1076.19,1181.28C1071.43,1165.65 1068.51,1147.95 1067.43,1128.18L1072.82,1071.04L1077.13,1058.78L1083.06,997.46L1087.51,985.2L1087.52,985.19Z",
    "M1362.58,963.49C1382.08,968.52 1401.12,978.36 1419.72,993C1422.59,1002.52 1424.57,1013.75 1425.65,1026.69L1378.48,1030.87C1365.45,1017.66 1347.53,1009.22 1324.71,1005.53C1316.09,1011.46 1308.76,1019.91 1302.74,1030.87L1333.87,1043.4C1354.62,1049.24 1376.81,1057.69 1400.44,1068.74C1410.14,1086.08 1412.93,1107.1 1408.8,1131.81C1396.04,1150.41 1378.66,1167.25 1356.65,1182.35L1317.16,1190.71L1275.92,1186.53C1255.17,1182.13 1237.78,1170.9 1223.77,1152.84L1218.65,1114.97L1253.15,1110.79C1269.5,1121.12 1271.12,1127.14 1258,1128.85L1263.93,1143.27L1267.7,1138.96L1281.45,1128.85L1300.32,1148.66C1314.07,1147.67 1328.62,1144.89 1343.98,1140.3L1352.47,1119.14L1349.91,1110.78L1287.65,1085.58C1267.88,1077.76 1253.87,1063.7 1245.6,1043.4L1247.22,1014.02L1253.15,1005.53L1283.47,980.33C1306.38,973.23 1332.75,967.62 1362.58,963.48L1362.58,963.49ZM1270.26,1053.65L1273.49,1061.74L1277.8,1052.04L1259.61,1029.13L1270.26,1047.86L1262.31,1047.86L1270.26,1053.65Z",
    "M821.1,775.22C753.13,847.09 627.79,800.12 627.79,697.69C627.79,644.03 665.46,599.17 715.8,588.12L821.1,775.22Z",
    "M896.46,893.92C882.69,879.1 870.46,862.46 859.84,844.06L846.84,820.96C743.11,911.5 576.79,838.52 576.79,697.69C576.79,625.11 624.41,563.46 690.03,542.33C690.03,542.33 690.52,542.37 661.07,480.76C477.79,499.45 348.66,656.58 342.75,664.79L318.68,698.13L342.73,731.49C439.81,865.82 684.452,976.377 897.922,895.417L896.46,893.92ZM388.97,698.15C388.97,698.15 444.94,620.58 563.57,566.08C544.65,591.35 531.04,620.81 524.39,652.79C521.38,667.29 519.79,682.31 519.79,697.69C519.79,713.07 521.45,728.82 524.62,743.65C531.48,775.82 545.38,805.41 564.65,830.73C445.25,776.2 388.97,698.15 388.97,698.15Z",
    "M1319.04,743.54C1289.06,962.83 996.87,1021.45 885.82,829.06L695.6,491.07C684.65,471.62 692.02,446.97 711.84,436.71C730.75,426.93 754.01,433.92 764.39,452.51L860.97,625.93C863.81,631.03 870.37,632.67 875.27,629.49C879.73,626.6 881.19,620.75 878.6,616.1L729.53,348.56C719.15,329.93 725.89,306.41 744.57,296.11C763.13,285.87 786.48,292.56 796.79,311.08L943.99,576.59C946.52,581.15 952.26,582.83 956.84,580.34C961.49,577.82 963.19,571.98 960.61,567.35L798.36,275.99C787.57,256.7 794.71,232.31 814.2,221.88C833.18,211.72 856.8,218.64 867.31,237.43L1033.5,534.61C1035.71,538.57 1040.54,540.24 1044.73,538.5C1049.66,536.45 1051.71,530.55 1049.1,525.89L897.69,254.93C887.25,236.26 893.92,212.65 912.59,202.21C921.03,197.49 949.98,189.67 965.31,217.11L1172.96,588.26C1175.61,592.99 1181.59,594.68 1186.32,592.03C1191.07,589.37 1192.75,583.35 1190.06,578.61L1101.21,422.55C1090.25,403.3 1097.29,378.81 1116.79,368.31C1135.68,358.14 1159.24,364.94 1169.81,383.61L1289.86,595.76C1294.1,603.12 1330.06,662.84 1319.03,743.52L1319.04,743.54Z"
  ];

  function parsePathTokens(d) {
    const tokens = d.match(/[a-df-z]|[-+]?(?:\d*\.\d+|\d+)(?:[eE][-+]?\d+)?/gi) || [];
    const structured = [];
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (/^[a-df-z]$/i.test(token)) {
        structured.push({ type: 'cmd', val: token });
      } else {
        const x = parseFloat(token);
        const nextToken = tokens[i + 1];
        if (nextToken !== undefined && !/^[a-df-z]$/i.test(nextToken)) {
          const y = parseFloat(nextToken);
          structured.push({ type: 'point', x, y });
          i++;
        } else {
          structured.push({ type: 'val', val: x });
        }
      }
    }
    return structured;
  }

  function mountLogo(targetEl) {
    if (!targetEl) return;
    targetEl.setAttribute('viewBox', '0 0 1640 1424');
    targetEl.setAttribute('version', '1.1');
    targetEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    targetEl.style.fillRule = 'evenodd';
    targetEl.style.clipRule = 'evenodd';
    targetEl.style.strokeLinejoin = 'round';
    targetEl.style.strokeMiterlimit = '2';

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    for (let i = 0; i < 7; i++) {
      const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      p.setAttribute('d', PATHS[i]);
      p.style.fillRule = 'nonzero';
      g.appendChild(p);
    }
    targetEl.appendChild(g);

    for (let i = 7; i < PATHS.length; i++) {
      const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      p.setAttribute('d', PATHS[i]);
      p.style.fillRule = 'nonzero';
      targetEl.appendChild(p);
    }
  }

  function init(target = '#neverusLogo', options = {}) {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el) return;

    let pathElements = Array.from(el.querySelectorAll('path'));
    if (pathElements.length === 0) {
      mountLogo(el);
      pathElements = Array.from(el.querySelectorAll('path'));
    }

    const CONFIG = {
      fps: 24,
      phaseSpeed: 0.022,
      snapGrid: 11.0,
      driftAmp: 10,
      localWobbleAmp: 5,
      baseScale: 1.0,
      hoverScale: 1.10,
      scaleTransition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
      theme: 'dark',
      colors: { dark: '#ffffff', light: '#181818' },
      ...options
    };

    el.style.fill = CONFIG.colors[CONFIG.theme] || CONFIG.colors.dark;
    el.style.transition = CONFIG.scaleTransition;
    el.style.transformOrigin = 'center center';
    el.style.transform = `scale(${CONFIG.baseScale})`;

    const parsedPathData = pathElements.map(p => parsePathTokens(p.getAttribute('d')));
    let isWobbling = false;
    let animFrameId = null;
    let lastStepTime = 0;

    function renderWobbleFrame(currentTime) {
      if (!isWobbling) return;
      animFrameId = requestAnimationFrame(renderWobbleFrame);
      const stepIntervalMs = 1000 / CONFIG.fps;
      if (currentTime - lastStepTime < stepIntervalMs) return;
      lastStepTime = currentTime;

      const phase = currentTime * CONFIG.phaseSpeed;
      const driftX = Math.sin(phase * 1.3) * CONFIG.driftAmp;
      const driftY = Math.cos(phase * 1.1) * CONFIG.driftAmp;

      pathElements.forEach((pathEl, index) => {
        const items = parsedPathData[index];
        const out = [];
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item.type === 'cmd') out.push(item.val);
          else if (item.type === 'point') {
            const vertexPhase = (item.x * 0.008) + (item.y * 0.011) + phase;
            const localWobbleX = Math.sin(vertexPhase) * CONFIG.localWobbleAmp;
            const localWobbleY = Math.cos(vertexPhase * 1.4) * CONFIG.localWobbleAmp;

            const worldX = item.x + driftX + localWobbleX;
            const worldY = item.y + driftY + localWobbleY;

            const snappedX = Math.round(worldX / CONFIG.snapGrid) * CONFIG.snapGrid;
            const snappedY = Math.round(worldY / CONFIG.snapGrid) * CONFIG.snapGrid;
            out.push(`${snappedX.toFixed(1)},${snappedY.toFixed(1)}`);
          } else {
            out.push(item.val);
          }
        }
        pathEl.setAttribute('d', out.join(' '));
      });
    }

    function restoreOriginalPaths() {
      pathElements.forEach((pathEl, index) => {
        const items = parsedPathData[index];
        const out = [];
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item.type === 'cmd') out.push(item.val);
          else if (item.type === 'point') {
            out.push(`${item.x},${item.y}`);
          } else {
            out.push(item.val);
          }
        }
        pathEl.setAttribute('d', out.join(' '));
      });
    }

    el.addEventListener('mouseenter', () => {
      isWobbling = true;
      el.style.transform = `scale(${CONFIG.hoverScale})`;
      lastStepTime = 0;
      cancelAnimationFrame(animFrameId);
      animFrameId = requestAnimationFrame(renderWobbleFrame);
    });

    el.addEventListener('mouseleave', () => {
      isWobbling = false;
      el.style.transform = `scale(${CONFIG.baseScale})`;
      cancelAnimationFrame(animFrameId);
      restoreOriginalPaths();
    });
  }

  return {
    paths: PATHS,
    mount: mountLogo,
    init: init
  };
});