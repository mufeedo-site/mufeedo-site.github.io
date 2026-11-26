window.$ = function (id) { return document.getElementById(id); };
window.toast = function (m) { var t = document.createElement('div'); t.className = 'toast'; t.textContent = m; document.body.appendChild(t); setTimeout(function () { t.remove(); }, 1800); };
window.copyText = function (s) { (navigator.clipboard ? navigator.clipboard.writeText(s) : Promise.reject()).then(function () { toast('تم النسخ'); }, function () { var a = document.createElement('textarea'); a.value = s; document.body.appendChild(a); a.select(); try { document.execCommand('copy'); toast('تم النسخ'); } catch (e) { } a.remove(); }); };
window.fmt = function (n, d) { if (!isFinite(n)) return '—'; return Number(n).toLocaleString('en-US', { maximumFractionDigits: d == null ? 2 : d }); };
window.fmtBytes = function (b) { if (b < 1024) return b + ' B'; if (b < 1048576) return (b / 1024).toFixed(1) + ' KB'; return (b / 1048576).toFixed(2) + ' MB'; };
window.download = function (blob, name) { var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000); };
window.kv = function (rows) { return rows.map(function (r) { return '<div class="kv"><span>' + r[0] + '</span><b>' + r[1] + '</b></div>'; }).join(''); };
