<p align="center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 320" width="100%" style="max-width:800px">
    <defs>
      <linearGradient id="tg" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#8ec5ff"/>
        <stop offset="30%" stop-color="#5ea8f7"/>
        <stop offset="45%" stop-color="#b8d8ff"/>
        <stop offset="50%" stop-color="#e8f4ff"/>
        <stop offset="55%" stop-color="#b8d8ff"/>
        <stop offset="70%" stop-color="#5ea8f7"/>
        <stop offset="100%" stop-color="#8ec5ff"/>
      </linearGradient>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#3b8beb" stop-opacity="0.5"/>
        <stop offset="50%" stop-color="#7eb8ff" stop-opacity="0.7">
          <animate attributeName="stop-opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite"/>
        </stop>
        <stop offset="100%" stop-color="#1a56b8" stop-opacity="0.5"/>
      </linearGradient>
      <filter id="gl"><feGaussianBlur stdDeviation="1"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>

    <!-- Card background -->
    <rect width="800" height="320" rx="16" fill="#060d1a"/>
    <rect x="1" y="1" width="798" height="318" rx="15" fill="none" stroke="url(#bg)" stroke-width="1.5"/>

    <!-- Stars -->
    <circle cx="50" cy="45" r="1.2" fill="#a0d2ff"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.4s" repeatCount="indefinite"/></circle>
    <circle cx="140" cy="28" r="0.8" fill="#a0d2ff"><animate attributeName="opacity" values="0.5;0.2;0.5" dur="3.1s" repeatCount="indefinite"/></circle>
    <circle cx="230" cy="60" r="1.4" fill="#b8d8ff"><animate attributeName="opacity" values="0.2;0.9;0.2" dur="2.7s" repeatCount="indefinite"/></circle>
    <circle cx="340" cy="20" r="0.7" fill="#a0d2ff"><animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.5s" repeatCount="indefinite"/></circle>
    <circle cx="480" cy="40" r="1.0" fill="#c8e2ff"><animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.0s" repeatCount="indefinite"/></circle>
    <circle cx="590" cy="18" r="1.3" fill="#a0d2ff"><animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.2s" repeatCount="indefinite"/></circle>
    <circle cx="690" cy="55" r="0.9" fill="#b8d8ff"><animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.9s" repeatCount="indefinite"/></circle>
    <circle cx="760" cy="25" r="1.1" fill="#a0d2ff"><animate attributeName="opacity" values="0.5;0.3;0.5" dur="3.3s" repeatCount="indefinite"/></circle>
    <circle cx="90" cy="280" r="0.9" fill="#a0d2ff"><animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.0s" repeatCount="indefinite"/></circle>
    <circle cx="380" cy="300" r="1.2" fill="#b8d8ff"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.6s" repeatCount="indefinite"/></circle>
    <circle cx="620" cy="295" r="0.8" fill="#a0d2ff"><animate attributeName="opacity" values="0.5;0.2;0.5" dur="3.8s" repeatCount="indefinite"/></circle>
    <circle cx="740" cy="285" r="1.0" fill="#c8e2ff"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.8s" repeatCount="indefinite"/></circle>
    <!-- Pulsar -->
    <circle cx="160" cy="260" r="1.6" fill="#7eb8ff">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite"/>
      <animate attributeName="r" values="1.6;3.2;1.6" dur="2.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="650" cy="80" r="1.5" fill="#7eb8ff">
      <animate attributeName="opacity" values="0.4;1;0.4" dur="2.8s" repeatCount="indefinite"/>
      <animate attributeName="r" values="1.5;3.0;1.5" dur="2.8s" repeatCount="indefinite"/>
    </circle>

    <!-- Shooting star -->
    <g opacity="0">
      <animate attributeName="opacity" values="0;0;0.8;0" dur="5s" begin="0s" repeatCount="indefinite"/>
      <line x1="160" y1="20" x2="230" y2="55" stroke="url(#tg)" stroke-width="1.5" stroke-linecap="round"/>
    </g>
    <g opacity="0">
      <animate attributeName="opacity" values="0;0;0.7;0" dur="6s" begin="2.8s" repeatCount="indefinite"/>
      <line x1="550" y1="25" x2="620" y2="60" stroke="url(#tg)" stroke-width="1.2" stroke-linecap="round"/>
    </g>

    <!-- Avatar ring -->
    <g transform="translate(400, 72)">
      <circle cx="0" cy="0" r="36" fill="none" stroke="#3b8beb" stroke-width="1.2" stroke-opacity="0.5">
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="0" cy="0" r="29" fill="none" stroke="#7eb8ff" stroke-width="0.8" stroke-opacity="0.35" stroke-dasharray="15 30">
        <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="5.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="0" cy="0" r="18" fill="none" stroke="#5ea8f7" stroke-width="1" stroke-opacity="0.55">
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="0" cy="0" r="9" fill="#0a1a3a" stroke="#7eb8ff" stroke-width="1.2" stroke-opacity="0.6"/>
      <text x="0" y="4" text-anchor="middle" fill="#7eb8ff" font-size="10" font-family="sans-serif">✦</text>
    </g>

    <!-- Name -->
    <text x="400" y="150" text-anchor="middle" fill="url(#tg)" font-size="42" font-weight="bold" font-family="'PingFang SC','Microsoft YaHei',sans-serif" filter="url(#gl)">晚 星</text>
    <text x="400" y="172" text-anchor="middle" fill="#6b8db5" font-size="12" font-family="'Segoe UI','PingFang SC',sans-serif" letter-spacing="4">GhostLLC</text>

    <!-- Tagline -->
    <text x="400" y="210" text-anchor="middle" fill="#7eb8ff" font-size="14" font-family="'PingFang SC','Microsoft YaHei',sans-serif">
      梦想是不会发光的，发光的是追梦的你。
      <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
    </text>

    <!-- Social row -->
    <g font-size="10" font-family="'Segoe UI','PingFang SC',sans-serif" fill="#6b8db5">
      <text x="400" y="250" text-anchor="middle">
        GitHub: ghostLLC &nbsp;|&nbsp; B站: Ghost_雲里看晚星 &nbsp;|&nbsp; Steam: llc1203 &nbsp;|&nbsp; 抖音: Ghost_晚星
      </text>
    </g>

    <!-- Scanlines -->
    <g opacity="0.025">
      <pattern id="s" patternUnits="userSpaceOnUse" width="800" height="3">
        <rect width="800" height="1" fill="#7eb8ff"/>
      </pattern>
      <rect width="800" height="320" rx="16" fill="url(#s)"/>
    </g>
  </svg>
</p>

<p align="center">
  <a href="https://github.com/ghostLLC"><img src="https://img.shields.io/badge/GitHub-ghostLLC-3b8beb?style=flat-square&logo=github"></a>
  <a href="https://space.bilibili.com/456595757"><img src="https://img.shields.io/badge/Bilibili-Ghost__雲里看晚星-00A1D6?style=flat-square&logo=bilibili"></a>
  <a href="https://steamcommunity.com/id/llc1203/"><img src="https://img.shields.io/badge/Steam-llc1203-1a56b8?style=flat-square&logo=steam"></a>
  <a href="https://www.douyin.com/user/MS4wLjABAAAANsRi16n-D4Q17Qkd4r3dhRAbf4NiQU6W6orjZ1y-rMzZuaJBnUDz1VnZhHt16HSO"><img src="https://img.shields.io/badge/抖音-Ghost__晚星-7eb8ff?style=flat-square&logo=tiktok"></a>
</p>

---

### 👨‍💻 关于我

- 🎓 **华南农业大学** 在读
- 💻 热爱代码、游戏与创作
- 🎮 Steam 库存永远在增长，通关的永远只有那几个
- 🎬 B站 & 抖音业余 UP 主
- 🎵 看过黄霄雲现场 7 次

### 🛠 工具箱

![HTML5](https://img.shields.io/badge/-HTML5-060d1a?style=flat-square&logo=html5)
![CSS3](https://img.shields.io/badge/-CSS3-060d1a?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/-JavaScript-060d1a?style=flat-square&logo=javascript)
![Python](https://img.shields.io/badge/-Python-060d1a?style=flat-square&logo=python)
![Node.js](https://img.shields.io/badge/-Node.js-060d1a?style=flat-square&logo=node.js)
![Unity](https://img.shields.io/badge/-Unity-060d1a?style=flat-square&logo=unity)

### 📊 Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=ghostLLC&show_icons=true&theme=tokyonight&hide_border=true&bg_color=060d1a&title_color=7eb8ff&icon_color=3b8beb&text_color=c8ddf8" height="160"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ghostLLC&layout=compact&theme=tokyonight&hide_border=true&bg_color=060d1a&title_color=7eb8ff&text_color=c8ddf8" height="160"/>
</p>

---

<p align="center">
  <i>Keep coding, keep dreaming.</i>
</p>
